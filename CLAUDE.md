# CLAUDE.md — Memória Principal do Projeto UBS Conectadas (FUST)

> Leia este arquivo antes de qualquer mudança relevante no projeto.
> Nome do painel: **UBS Conectadas**. Projeto irmão: **CNES Combo** (`gaiafranklinalexandre-blip/CNESCombo`) — mesma arquitetura (Python sync → API PHP no Hostinger → MySQL → HTML no Render), reaproveitada aqui.
> **Push automático autorizado**: commitar e enviar direto após mudanças em `index.html`/`sync_fust.py`/`CLAUDE.md` (o Render faz deploy automático). Continua valendo pedir confirmação para operações destrutivas (force-push, reset, etc.).

---

## Objetivo do painel

Painel web de monitoramento da **adesão dos municípios ao programa UBS Conectadas** (Novo PAC Conectividade de Unidades de Saúde — Edital nº 238/2026/MCOM, financiado pelo FUST). Acompanha quantos municípios elegíveis já aderiram, em qual fase estão (Fase I / Fase II) e quantas UBS já têm empresa vencedora manifestando interesse em levar internet ao estabelecimento.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | HTML + CSS + JavaScript (vanilla, sem framework) |
| Fonte de dados | API PHP (Hostinger) → MySQL (mesmo banco do CNES Combo / Painel Credenciamento, tabelas próprias `fust_ubs` e `fust_solicitacoes`) |
| Sincronização | Python (`sync_fust.py`) + openpyxl + requests |
| Versionamento | Git → GitHub (`gaiafranklinalexandre-blip/UBSCONECTADA`) |
| Deploy | Render — `https://ubsconectada.onrender.com`, auto-deploy no push para `main` |

---

## Arquitetura atual

```
RESULTADO_PROVISORIO_DADOS.xlsx (universo elegível — 1 linha por estabelecimento/CNES)
SOLICITACOES.xlsx (municípios que aderiram — 1 linha por município, atualizada todo dia)
  ↓ sync_fust.py (Python, openpyxl) — lê as duas planilhas por completo
API PHP (sync-fust.php — Hostinger, NÃO está no GitHub)
  ↓ MySQL — tabelas fust_ubs e fust_solicitacoes
index.html ← fetch API em tempo real
```

### Decisão de arquitetura: TRUNCATE (DELETE) + INSERT, não upsert incremental

Diferente do CNES Combo (que é uma série histórica por competência e por isso nunca trunca), aqui **as duas planilhas de origem são sempre o retrato completo e atual do dia** — não há dimensão de tempo/competência. Por isso `sync_ubs` e `sync_solicitacoes` apagam a tabela inteira (`DELETE FROM`, não `TRUNCATE`, para manter a operação transacional e permitir rollback se o envio falhar no meio) e reinserem tudo a cada sync. `sync_fust.py` roda diariamente e não precisa de nenhuma lógica condicional — sempre lê os dois arquivos por completo e substitui o conteúdo das tabelas.

### Por que duas bases separadas, e por que IBGE é a chave

- **`RESULTADO_PROVISORIO_DADOS.xlsx`** (→ tabela `fust_ubs`): lista de todos os estabelecimentos (UBS) do resultado provisório do edital, elegíveis ao programa. Uma linha por CNES. A coluna `QNT. COM EMP. VENC.` (0 ou 1) indica se aquele estabelecimento já tem empresa vencedora manifestando interesse. O município é elegível se aparece nesta base — **não depende de adesão**.
- **`SOLICITACOES.xlsx`** (→ tabela `fust_solicitacoes`): lista de municípios que já manifestaram adesão ao programa, em duas fases:
  - **Fase I**: manifestação simples de interesse.
  - **Fase II**: o gestor informa o responsável técnico e confirma os dados para a instalação.
  - A coluna `Situação` tem 3 valores possíveis, mapeados assim (confirmado com o usuário em 2026-07-23):
    - `SOLICITADA` → só Fase I feita, Fase II não iniciada.
    - `EM PREENCHIMENTO FASE II` → Fase II iniciada mas **incompleta** — ainda é prioritário contatar.
    - `SOLICITADA FASE II` → Fase II **concluída**.
  - "Fase II pendente" (KPI e relatório de contatos prioritários) = `SOLICITADA` OU `EM PREENCHIMENTO FASE II`.
- **A chave de cruzamento entre as duas bases é sempre o código IBGE do município** (`ibge`, 6 dígitos), nunca o nome. O nome do município vem em **Title Case** em `RESULTADO_PROVISORIO_DADOS` (ex: "Cabo de Santo Agostinho") e em **CAIXA ALTA** em `SOLICITACOES` (ex: "TAQUARITINGA DO NORTE") — grafias diferentes para o mesmo município. Por isso os filtros de município em `sync-fust.php` comparam com `UPPER(municipio) = UPPER(?)`, nunca `=` direto, e a lista de autocomplete (`?action=municipios`) agrupa por `UPPER(municipio)` escolhendo a grafia de `fust_ubs` (Title Case) como a exibida.
- Existe uma minoria de municípios que aderiram (aparecem em `SOLICITACOES`) mas **não estão** na lista de elegíveis (`RESULTADO_PROVISORIO_DADOS`) — provavelmente entraram depois do corte do edital preliminar. O painel trata isso como uma observação à parte (`obs.municipios_aderidos_nao_elegiveis` no `?action=stats`), não como erro, e a lista de contatos prioritários **não** inclui esses municípios (não são alvo de contato do programa por ora).

---

## Regras de cálculo dos KPIs (`?action=stats` em `sync-fust.php`)

Toda a lógica de cruzamento é feita **em PHP, em memória**, não em SQL com JOINs complexos — os dois conjuntos de dados são pequenos (≤ ~4 mil linhas de UBS, ≤ ~1 mil municípios), então montar dois mapas indexados por `ibge` e cruzá-los em arrays é mais simples e legível do que SQL com `LEFT JOIN` + `GROUP_CONCAT`. Ver funções `ubsPorMunicipio()` e `solicitacoesPorMunicipio()`.

- **Resumo geral**: todos os municípios/UBS de `fust_ubs`, independente de adesão.
- **Adesão**: municípios que estão em `fust_ubs` **E** em `fust_solicitacoes` (intersecção por IBGE). Some as UBS com/sem vencedora apenas desses municípios.
- **Alerta "Aderiram sem nenhuma UBS vencedora"** (`adesao.municipios_sem_vencedora`): dentro do grupo "Adesão", município cujo `com_venc` somado (todas as UBS daquele IBGE) é zero — aderiu, mas nenhum estabelecimento tem empresa manifestando interesse ainda. KPI de alerta (vermelho) no painel, pedido pelo usuário em 2026-07-23 depois de confirmar que existiam ~308/1034 municípios nessa situação.
- **Faltam aderir**: municípios em `fust_ubs` que **não** estão em `fust_solicitacoes`.
- **Fase II**: dentro do grupo "Adesão", separa por `situacao` (ver mapeamento acima).
- Todos os filtros (`uf`, `municipio`) do painel se aplicam **antes** do cruzamento (filtram `fust_ubs` e `fust_solicitacoes` pelas mesmas colunas `uf`/`municipio` que cada tabela já tem, sem necessidade de join para filtrar).

## Relatório de contatos prioritários (`?action=prioritarios`)

Lista municípios com Fase II pendente (`SOLICITADA` ou `EM PREENCHIMENTO FASE II`) que **também são elegíveis** (existem em `fust_ubs`), com UF, nome, situação, número/data da solicitação e quantidade de UBS com/sem vencedora naquele município — para o gestor priorizar quem contatar para concluir a Fase II. Baixado como `.xlsx` formatado pelo botão no painel (`baixarPrioritariosXLSX()` em `index.html`, via `downloadXLSX()`), respeitando os filtros de UF/município ativos no momento.

## Downloads em XLSX formatado (não CSV puro)

Os dois botões de download (`baixarPrioritariosXLSX()` e `baixarDetalheXLSX()`) geram `.xlsx` de verdade via **ExcelJS** (CDN, ver "Exceções à regra de vanilla JS" abaixo) — cabeçalho em negrito/azul, 1ª linha congelada, autofiltro, largura de coluna automática e células coloridas (verde/amarelo/vermelho, espelhando o farol do painel) nas colunas de situação. Motivo: CSV puro abre sem nenhuma formatação no Excel e os apoiadores de campo tinham dificuldade de ler a planilha crua (pedido do usuário em 2026-07-23). Função genérica: `downloadXLSX(nomeBase, headers, rows, colColors)`.

## Painel estratégico (gráficos)

Seção "📊 Visão estratégica" (`index.html`, logo após o Resumo geral) com 6 visualizações — pedida pelo usuário em 2026-09-04 para dar uma leitura visual rápida do funil de adesão, complementar aos cards de KPI numéricos. Sete rodadas de ajuste no mesmo dia: (1) "poderia ter visão por município e por ubs e faltou algo mais visual para a fase II" — 1ª tentativa foi um toggle Municípios/UBS que alternava a unidade exibida; (2) depois de perguntar sobre a data de adesão e o ritmo dos últimos 15 dias, o usuário pediu um gráfico de série temporal ("sim, seria bom"); (3) "no painel o número de municípios sempre precisa acompanhar o número correspondente de UBS" — **removeu o toggle**, as duas unidades passaram a aparecer sempre juntas; (4) "quando mostrar o número no painel de UBS, precisa separar as UBS com proposta e as sem proposta" — todo total de UBS exibido é sempre quebrado em com/sem empresa vencedora (o termo "proposta" do usuário mapeia para `com_emp_venc`, o mesmo conceito já usado nos cards de KPI existentes), nunca mostrado como número único; (5) o usuário colou um print de uma planilha própria dele com gráficos de linha (histórico sólido + projeção tracejada até a "Meta") e pediu algo parecido ("gráfico de uma linha do tempo das adesões, com linhas cruzadas") — virou o card "🏁 Linha do tempo", inicialmente como 2 gráficos separados (Municípios / UBS); (6) "em que eu consiga filtrar por data, período" — adicionou o filtro de período (`#fDataInicio`/`#fDataFim`); (7) "tem que juntar o gráfico, colocar junto, municípios e ubs" — **fundiu os 2 gráficos da Linha do Tempo em 1 só**, normalizando as duas séries em % da própria meta (nunca dois eixos Y absolutos — escalas de município ≈1.400 e UBS ≈3.800 são incomparáveis lado a lado).

- **Donut de situação** (`renderDonutPrincipal()`): 3 fatias (não aderiu / Fase II pendente / Fase II concluída), proporção calculada por município (é a unidade natural de adesão) — cada fatia da legenda mostra `N município(s) (%)`, o rótulo da situação, e uma linha `.donut-legenda-ubs` com `M UBS c/ vencedora · P UBS s/ vencedora`; o centro mostra o total de municípios com a mesma quebra de UBS como subtítulo.
- **Gauge de Fase II** (`renderDonutFase2()`): donut de 2 fatias só entre quem já aderiu (drill-down, não mistura com "não aderiu") — centro mostra o **% concluído da Fase II** (em municípios) em destaque; legenda traz UBS com/sem vencedora de cada fatia. Adicionado porque o donut principal misturava as 3 situações e ficava pouco visual para acompanhar especificamente o avanço da Fase II.
- **Funil de progresso** (`renderFunil()`): 3 barras horizontais (Elegíveis → Aderiram → Fase II concluída), largura proporcional ao total de municípios; cada etapa mostra `N mun.` + subtítulo, e numa segunda linha `M UBS c/ vencedora · P UBS s/ vencedora`.
- **Ranking por UF** (`carregarRankingUf()` / `renderRankingUf()`): barra horizontal empilhada por UF (composição por município), ordenada pelas UFs com mais municípios não aderidos ou pendentes de Fase II; o total à direita de cada linha é `N mun` na 1ª linha e `M UBS c/venc · P UBS s/venc` na 2ª (`.uf-total-mun`/`.uf-total-ubs`). Consome `?action=ranking_uf` em `sync-fust.php`, que retorna a contagem por município (`mun_nao_aderiu`/`mun_fase2_pendente`/`mun_fase2_completa`) e, por situação, o total de UBS já separado (`ubs_nao_aderiu_com_venc`/`_sem_venc`, `ubs_fase2_pendente_com_venc`/`_sem_venc`, `ubs_fase2_completa_com_venc`/`_sem_venc`) — respeita os filtros de UF/município.
- **Ritmo de adesão** (`carregarRitmoAdesao()` / `renderRitmoAdesao()`): gráfico de barras por semana com a contagem de novas solicitações (`data_solicitacao` de `fust_solicitacoes`, contagem por município — não tem equivalente por UBS/vencedora), mais dois chips de KPI ("Últimos 15 dias" / "Últimos 30 dias") calculados no front a partir da mesma lista diária. Semana = segunda-feira a domingo (`inicioDaSemana()`).
- **Linha do tempo** (`renderLinhaTempoDupla()` / `renderLinhaTempoAdesao()`): 1 gráfico de linha só, com as duas séries (Municípios azul, UBS roxo) — acumulado histórico (linha sólida, `<path>` SVG) e uma **linha tracejada de projeção** do último ponto real até a "Meta" (= 100%, canto superior direito) — réplica do estilo de uma planilha de controle que o usuário já mantinha manualmente (captura de tela compartilhada em 2026-09-04). Como município (~1.400) e UBS (~3.800) têm escalas muito diferentes, cada ponto é normalizado como `100 * valor / meta_da_própria_série` antes de plotar — eixo Y é sempre 0–100%, nunca um eixo por série. `renderLinhaTempoDupla(svgId, legendaId, series)` é genérico (`series = [{nome, pontos, meta, cor}]`, só 3 rótulos de eixo X para não poluir, legenda HTML própria com o valor absoluto + % de cada série); `renderLinhaTempoAdesao()` monta os pontos acumulando `ultimoSerieAdesoes` (mesma lista diária do ritmo de adesão) e injeta as metas de `ultimoStats`.

Ritmo de adesão e Linha do tempo compartilham `?action=serie_adesoes` (busca única em `carregarRitmoAdesao()`, guardada em `ultimoSerieAdesoes` e usada por ambos) e um **filtro de período** próprio (`#fDataInicio`/`#fDataFim`, funções `onPeriodoChange()`/`limparPeriodo()`/`carregarRitmoEEvolucao()`) — independente do filtro global de UF/Município do topo da página — só estes dois gráficos respeitam data_inicio/data_fim (as demais rotas ignoram esses parâmetros silenciosamente, `filtroParams()` sempre inclui os dois quando preenchidos). Quando o período filtra a lista, o acumulado da Linha do Tempo passa a representar só as adesões daquela janela (começa do zero), não o histórico completo — a Meta continua sendo o universo total elegível em qualquer filtro.

O donut e o gauge são desenhados pela mesma função genérica `renderDonutGenerico()` (`<circle>` SVG + `stroke-dasharray`/`stroke-dashoffset`, técnica de anel sem lib de gráficos), que aceita `seg.ubsComVenc`/`seg.ubsSemVenc` opcionais por segmento; o ritmo de adesão usa barras CSS simples (`<div>` com `height` proporcional). Cores reaproveitadas das mesmas `--red`/`--yellow`/`--green`/`--blue`/`--kpi.roxo` (`#6c3fc5`) já usadas no farol, no mapa e nos cards de Resumo geral (constante `CORES_STATUS` no JS, valores hex fixos porque `var()` do CSS não é confiável em atributos de presentation SVG como `stroke`) — nenhuma paleta nova foi introduzida. Nenhuma lib de gráficos foi adicionada (SVG/CSS puro), mantendo a exceção à regra de vanilla JS restrita a ExcelJS e Leaflet.

**Atenção**: `?action=ranking_uf` e `?action=serie_adesoes` (rotas novas, a última reescrita para incluir UBS por dia e o filtro de período) dependem do `sync-fust.php` atualizado — como esse arquivo é gitignored, precisa ser reenviado manualmente para o Hostinger (ver "Regras principais de desenvolvimento"); confirmado em 2026-09-04 que a versão em produção ainda não tinha essas rotas (retornavam HTTP 400) — até o usuário reenviar o arquivo, o Ranking por UF, o Ritmo de Adesão e a Linha do Tempo mostram erro. `?action=stats` também ganhou campos novos (`fase2.completa_ubs_sem_venc`/`_total`, `fase2.pendente_ubs_sem_venc`/`_total`) — os campos `_com_venc` já existiam em produção, então o donut e o gauge de Fase II carregam sem erro, mas mostram **"0 UBS s/ vencedora"** nas fatias de Fase II (valor incorreto/zerado) até o `sync-fust.php` ser reenviado; o donut sempre mostrou certo o "Não aderiu" (usa campos de `faltam_aderir` que já existiam). Enviar o arquivo atualizado (mandado ao usuário via SendUserFile a cada mudança nesse dia) resolve tudo de uma vez.

## Mapa de adesão (`?action=mapa`)

Um ponto por município elegível (universo de `fust_ubs`, mesmo padrão do `?action=prioritarios`), colorido pela situação: vermelho = não aderiu, amarelo = aderiu com Fase II pendente, verde = Fase II concluída. Renderizado com **Leaflet** (CDN, tiles OpenStreetMap) na função `carregarMapa()`, chamada junto com `carregarStats()`/`carregarDetalhe()` no `Promise.all` de `carregarTudo()` — por isso já respeita os filtros de UF/município ativos.

As coordenadas (lat/lon por IBGE de 6 dígitos) vêm de `municipios_latlon.json` na raiz do repo — asset estático gerado a partir do dataset público [kelvins/municipios-brasileiros](https://github.com/kelvins/municipios-brasileiros) (`codigo_ibge` de 7 dígitos ÷ 10, descartando o dígito verificador, dá o `ibge` de 6 dígitos usado no projeto). Cobre os 5.571 municípios do Brasil, não só os atualmente elegíveis, para não precisar regenerar o arquivo quando a base de elegíveis mudar. Buscado 1x por sessão (`fetch('municipios_latlon.json')`, cacheado em `mapaCoordsCache`) — **atenção**: esse fetch relativo só funciona servido por HTTP (Render, ou um servidor local tipo `python -m http.server`), não abrindo o `index.html` direto via `file://` (CORS bloqueia).

---

## Arquivos críticos

| Arquivo | Localização | Observação |
|---|---|---|
| `sync_fust.py` | Raiz do repo | Lê as duas planilhas (openpyxl), envia para a API em dois POSTs (sem batching — volume pequeno) |
| `sync-fust.php` | Hostinger (manual) | API PHP + MySQL — **gitignored**, contém credenciais reais |
| `RESULTADO_PROVISORIO_DADOS.xlsx` | Raiz local | Base de elegíveis — **gitignored**, atualizada esporadicamente |
| `SOLICITACOES.xlsx` | Raiz local | Base de adesões — **gitignored**, atualizada todo dia pelo usuário |
| `index.html` | Raiz do repo | Frontend do painel |
| `municipios_latlon.json` | Raiz do repo | Coordenadas (lat/lon) por IBGE de 6 dígitos, para o mapa de adesão — versionado (não é dado sensível nem muda) |

---

## Design system (`design-system/`)

Pacote React separado (`ubs-conectadas-ds`), criado em 2026-09-04 a pedido do usuário para (1) ser usado como referência de design em painéis/sites/apresentações futuros e (2) ser publicado no claude.ai/design via a skill `/design-sync`. Já commitado e enviado (`git push`, incluído manualmente já que não está na lista de auto-push do topo deste arquivo).

- **Escopo**: não é só o UBS Conectadas — o usuário pediu para abranger toda a família **Gerência APS** (Ministério da Saúde/SAPS, padrão gov.br), mostrando capturas de tela de um zip (`Gerencia APS.zip`, na raiz, não versionado) com os sistemas "Gerência APS" (Gestão Federal/Municipal — credenciamento, habilitação, adesão, financiamento, calendário CNES) e "SIAPS". O link do Figma de origem (`Gerencia-APS---DESATUALIZADO`) não pôde ser acessado por este agente (exige login; `WebFetch` só via o app-shell vazio) — os tokens institucionais (navy `#071D41`, verde/vermelho decorativos do banner, azul dos links) foram amostrados por **pixel** das capturas com um script PowerShell (`System.Drawing.Bitmap.GetPixel`), não estimados visualmente.
- **25 componentes** em `src/components/`, exportados de `src/index.ts`: layout institucional (`GovBrHeader`, `Breadcrumb`, `PageHeader`, `Footer`, `SectionTitle`, `BrandBanner`, `GradientHero`), conteúdo (`StatusPill`, `ModuleCard`, `AccordionRow`, `InfoCard`, `KpiCard`, `ChartCard`), dados (`DataTable`, `Pagination`, `NotificationList`), controles (`Button`, `Tabs`, `Select`, `SearchableSelect`, `SearchInput`) e os 4 gráficos do UBS Conectadas portados para React (`DonutChart`, `ProgressFunnel`, `RankingBar`, `TimelineChart` — mesma lógica SVG/matemática do `index.html`, sem lib de gráficos). Detalhes e o que ficou de fora (ex: `CalendarTable`, não construída) estão em `design-system/README.md`.
- **Build**: TypeScript + tsup (`npm run build` dentro de `design-system/`) → `dist/index.js` + `dist/index.css` + `dist/index.d.ts`. Build limpo na 1ª tentativa; validado com `smoke-test.mjs` (renderiza todos os 25 componentes via `react-dom/server`, sem navegador — este ambiente não tem Chromium/`chromium-cli` disponível).
- **Node**: instalado em `C:\Program Files\nodejs` mas fora do PATH desta sessão — comandos precisam de `$env:PATH = "C:\Program Files\nodejs;" + $env:PATH` antes (PowerShell) ou caminho completo.
- **Próximo passo em aberto**: rodar a skill `/design-sync` a partir de `design-system/` para efetivamente publicar em claude.ai/design (shape "package", sem Storybook) — ainda não executado nesta sessão.
- **IMPORTANTE — o painel NÃO deve imitar a identidade institucional do Gerência APS/Ministério da Saúde.** Ver "Aplicação no `index.html`" abaixo: a 1ª tentativa (barra "gov.br", breadcrumb fake, banner decorativo, rodapé "Ministério da Saúde | SAPS") foi **revertida a pedido do usuário** — "é uma ferramenta minha, não deve ser vinculado ao ministério da saúde". O `design-system/` em si pode continuar usando essa referência (é material de estudo/reuso genérico), mas **nunca reintroduzir no `index.html` qualquer elemento que sugira publicação oficial** (logo gov.br, trilhos de navegação/breadcrumb inventados, rodapé com atribuição institucional).

### Aplicação no `index.html` — histórico (2026-09-04, mesmo dia, ordem cronológica)

1. **1ª tentativa (revertida)**: reestruturação completa espelhando o Gerência APS — barra "gov.br" no topo do header, breadcrumb "🏠 › Ministério da Saúde › SAPS › UBS Conectadas", banner decorativo (textura diagonal + arco verde + pontilhado vermelho) e rodapé navy "Ministério da Saúde | SAPS". **Revertida integralmente** após o usuário apontar, em sequência: (a) o breadcrumb inventava uma hierarquia de navegação que não existe ("NÃO CRIE caminhos que não existem"); (b) o rodapé afirmava uma vinculação institucional que não é real; (c) mesmo sem o logo/rodapé, a barra superior e o banner decorativo ainda visualmente remetiam à marca oficial. Todo o CSS/HTML dessa tentativa (`.govbr-bar`, `.breadcrumb`, `.brand-banner`, `.app-footer`, tokens `--navy`/`--link-blue`/`--brand-green`/`--brand-red`) foi removido.
2. **Regra permanente**: **nenhum emoji no painel** (pedido explícito do usuário) — todos os emojis de `secao-titulo`, `dash-kpi-label`, ícones de fundo dos KPI cards, botões de download e estados vazios/erro foram removidos. O ícone de fundo dos KPI cards (antes um emoji tipo 🏛️/🏥) virou uma decoração geométrica sutil via `.dash-kpi::after` (círculo com a cor do card). O "×" usado em "Limpar filtros"/"Limpar período" é o sinal de multiplicação tipográfico normal (`×`, U+00D7), não um dingbat/emoji — mantido de propósito.
3. **Direção visual final ("editorial de dados")**: a pedido do usuário, aplicada de fato a skill `frontend-design` (`.claude/skills/frontend-design/`) — um ponto de vista estético único e deliberado, já que o painel é ferramenta pessoal sem compromisso de parecer com nenhuma marca oficial:
   - **Tipografia**: serifada de destaque `Fraunces` (Google Fonts, variável, `--font-display`) para título do painel, títulos de seção, números grandes de KPI/gráficos — pareada com `Inter` (`--font-body`) para texto denso/tabelas, onde legibilidade em tamanho pequeno importa mais que personalidade.
   - **Fundo**: tom "papel" quente (`--paper: #F7F3EC`, `--paper-line: #E4DDD0`) no lugar do cinza frio genérico (`--gray-bg` continua existindo, usado só em elementos de UI internos como filtros/tabelas).
   - **Cards**: `.dash-kpi`/`.dash-chart-card` viraram planos (borda fina `1px solid var(--paper-line)`, sem `box-shadow` pesado) com leve elevação só no `:hover` — isso também resolveu o mesmo problema visual identificado ao comparar com as capturas do Gerência APS (sombra pesada vs. borda fina), mesmo não perseguindo mais aquela referência especificamente.
   - **Acento**: barra de cor do farol nos KPI cards migrou de `border-top` (4px) para `border-left` (3px).
   - **Títulos de seção**: viraram um "kicker" editorial — serifada 24px + traço curto azul (`::after`, 46×3px) embaixo, alinhado à esquerda (não mais centralizado com linhas dos dois lados).
   - **Movimento**: entrada com fade-up escalonado nos KPI cards (`@keyframes kpiEntrada`, `animation-delay` por `nth-child`) e elevação suave no hover dos cards.
   - **Header**: fundo = `--paper` (não mais branco puro) com uma regra inferior grossa (`border-bottom: 2px solid var(--text)`) como um traço de "masthead" editorial; título em serifada 30px; subtítulo em itálico serifado (estilo "deck" de matéria).
- **Não visualmente conferido num navegador real** (sem Chromium/`chromium-cli` neste ambiente) em nenhuma das etapas — só validado por leitura de HTML/CSS e teste de que a página carrega sem erro num servidor local. Pedir para o usuário conferir ao vivo no Render antes de considerar definitivo.

---

## Regras principais de desenvolvimento

- Não usar frameworks JS — vanilla JS, mesmo padrão do CNES Combo.
- **Exceções à regra de vanilla JS**: bibliotecas utilitárias pontuais via CDN são aceitas quando não há alternativa razoável em vanilla JS puro — hoje são **ExcelJS** (gerar `.xlsx` formatado nos downloads) e **Leaflet** (mapa de adesão). Continuam proibidos frameworks de UI (React/Vue/etc.).
- `sync-fust.php` nunca vai para o GitHub — gitignored, sobe manualmente no Hostinger. **Toda mudança em `sync-fust.php` precisa ser reenviada manualmente para o Hostinger depois do commit local** — o push automático do `index.html`/`CLAUDE.md` não cobre esse arquivo.
- Não versionar `.xlsx`.
- Busca de município é lista suspensa pesquisável (autocomplete): mostra a lista completa já ao focar o campo (respeitando a UF selecionada), com busca por texto para refinar — mesmo componente corrigido no CNES Combo em 2026-07-23 (mostrar tudo desde o início, sort defensivo contra campo ausente).
- Toda chamada à API passa por `fetchJson()` (não `fetch(...).then(r=>r.json())` cru), que captura falha de rede, HTTP não-200 e corpo não-JSON com uma mensagem diagnosticável — lição aprendida no CNES Combo, replicada aqui desde o início.
- Filtros disponíveis: UF e Município (mesmo padrão do CNES Combo). Não há filtro de "situação" separado porque os próprios cards de KPI já segmentam por situação/fase.

---

## Próximos passos

1. Criar o banco: subir `sync-fust.php` manualmente no Hostinger (tabelas são criadas automaticamente no primeiro request via `CREATE TABLE IF NOT EXISTS`).
2. Rodar `python sync_fust.py` pela primeira vez para popular `fust_ubs` (3.815 registros) e `fust_solicitacoes` (~1.042 registros).
3. Configurar deploy do `index.html` no Render (`https://ubsconectada.onrender.com`).
4. Validar o painel em produção com dados reais.
5. Combinar com o usuário a frequência de execução do `sync_fust.py` (ele mencionou atualização diária da base de solicitações — hoje é manual, pode virar uma tarefa agendada no futuro).
