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

Lista municípios com Fase II pendente (`SOLICITADA` ou `EM PREENCHIMENTO FASE II`) que **também são elegíveis** (existem em `fust_ubs`), com UF, nome, situação, número/data da solicitação e quantidade de UBS com/sem vencedora naquele município — para o gestor priorizar quem contatar para concluir a Fase II. Baixado como CSV pelo botão no painel (`baixarPrioritariosCSV()` em `index.html`), respeitando os filtros de UF/município ativos no momento.

---

## Arquivos críticos

| Arquivo | Localização | Observação |
|---|---|---|
| `sync_fust.py` | Raiz do repo | Lê as duas planilhas (openpyxl), envia para a API em dois POSTs (sem batching — volume pequeno) |
| `sync-fust.php` | Hostinger (manual) | API PHP + MySQL — **gitignored**, contém credenciais reais |
| `RESULTADO_PROVISORIO_DADOS.xlsx` | Raiz local | Base de elegíveis — **gitignored**, atualizada esporadicamente |
| `SOLICITACOES.xlsx` | Raiz local | Base de adesões — **gitignored**, atualizada todo dia pelo usuário |
| `index.html` | Raiz do repo | Frontend do painel |

---

## Regras principais de desenvolvimento

- Não usar frameworks JS — vanilla JS, mesmo padrão do CNES Combo.
- `sync-fust.php` nunca vai para o GitHub — gitignored, sobe manualmente no Hostinger.
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
