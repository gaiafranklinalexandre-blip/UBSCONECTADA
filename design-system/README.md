# ubs-conectadas-ds

Design system do ecossistema **Gerência APS** (Ministério da Saúde / SAPS, padrão gov.br) —
construído em 2026-09-04 para uso interno (painéis, sites, apresentações) e para servir de
biblioteca de componentes reais ao publicar em [claude.ai/design](https://claude.ai/design)
via a skill `/design-sync`.

## Origem dos tokens e componentes

- **Núcleo de cor** (azul `#1351B4`, verde `#168821`, amarelo `#FFCD07`, vermelho `#E52207`,
  roxo `#6c3fc5`) extraído literalmente do `index.html` do painel **UBS Conectadas**
  (`../index.html`), o primeiro produto desta família a existir.
- **Camada institucional** (navy do rodapé `#071D41`, verde do banner `~#00C700`, vermelho do
  pontilhado `~#EF0000`, azul dos links `#5D87CC`) amostrada por pixel das capturas de tela em
  `../Gerencia APS.zip` (sistemas **Gerência APS** — Gestão Federal/Municipal — e **SIAPS**).
  O link do Figma de origem (`Gerencia-APS---DESATUALIZADO`) não pôde ser acessado por este
  agente (exige login; ver `.design-sync/NOTES.md` quando este pacote for sincronizado).

## Componentes

| Grupo | Componentes |
|---|---|
| Layout institucional | `GovBrHeader`, `Breadcrumb`, `PageHeader`, `Footer`, `SectionTitle`, `BrandBanner`, `GradientHero` |
| Conteúdo | `StatusPill`, `ModuleCard`, `AccordionRow`, `InfoCard`, `KpiCard`, `ChartCard` |
| Dados | `DataTable`, `Pagination`, `NotificationList` |
| Controles | `Button`, `Tabs`, `Select`, `SearchableSelect`, `SearchInput` |
| Gráficos (UBS Conectadas) | `DonutChart`, `ProgressFunnel`, `RankingBar`, `TimelineChart` |

Todos exportados de `src/index.ts`. Cada componente vive em `src/components/<Nome>/` com seu
próprio `.tsx` + `.css` (CSS puro, sem CSS-in-JS) — o build concatena tudo em `dist/index.css`.

## Build

```bash
npm install
npm run build   # gera dist/index.js, dist/index.css, dist/index.d.ts via tsup
node smoke-test.mjs   # renderiza todos os componentes via react-dom/server (sanity check sem browser)
```

## O que falta / próximos passos

- **CalendarTable** (tabela-calendário com linhas expansíveis por mês, vista em "Calendário
  CNES") não foi construída nesta rodada — é o componente mais complexo das capturas e ficou
  fora do escopo inicial por tempo.
- **Logo oficial gov.br**: `GovBrHeader` reproduz a marca "gov.br" tipograficamente (sem o
  arquivo oficial da logo/brasão) — troque pelo SVG oficial quando disponível.
- Nenhuma tela foi visualmente conferida num navegador real (ambiente sem Chromium disponível)
  — apenas testada via `smoke-test.mjs` (renderização sem exceções) e inspeção do `.d.ts`
  gerado. Recomenda-se abrir `dist/.review.html` (gerado pelo `/design-sync`) ou montar uma
  página de exemplo antes de considerar o visual definitivo.
- Para publicar em claude.ai/design, rode a skill `/design-sync` a partir da raiz deste
  pacote (`design-system/`) — ela detecta automaticamente o shape "package" (sem Storybook).
