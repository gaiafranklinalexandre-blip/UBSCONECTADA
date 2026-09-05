# Gerência APS — Design System

Design system extracted from the "BAIXAR.fig" file for **Gerência APS**, the design
workspace behind Brazil's federal primary-care credentialing systems (Ministério da
Saúde / SISAB). The file covers the internal tooling municipal, state and federal health
managers use to accredit and maintain primary-care teams (eSF, eAP, eCR, eSB, CEO, UBS
fluvial, Academia da Saúde, etc.) under Brazil's Atenção Primária à Saúde (APS) policy —
credentialing ("Credenciamento"), habilitation ("Habilitação"), team/service updates,
adhesion, and transaction review flows for municipal, state and federal (CGFAP) users.

**Source:** attached Figma file "BAIXAR.fig" (mounted read-only), 17 pages / ~460 frames,
102 local + 63 page-scoped + 119 shared-library components. No codebase or slide deck was
attached — everything here is read from the Figma file's components, variables, and
screen content.

## Index

- `styles.css` — root stylesheet; imports everything below
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (hand-authored semantic layer)
- `components/fig-tokens.css`, `components/fig-typography.css` — raw Figma Variables export
- `components/core/` — buttons, form controls, feedback, navigation primitives
- `components/extra/` — data/content components (cards, lists, table headers, status)
- `components/nav/` — header, top nav, icon buttons, menu bar, pagination controls
- `components/misc/` — sign-in, stepper, table row, strategy card, remaining standalones
- `components/icons/` — `Icon.jsx` + `icon-data.js`, ~65 glyphs
- `assets/logo-govbr.png` — the only real logo/brand asset present in the source (gov.br mark)
- `guidelines/` — foundation specimen cards (color, type, spacing)
- `ui_kits/credenciamento/` — click-through recreation of the credentialing home + detail flow

## Components (113 files)

**core/**: Button, Button2, ButtonCircleInterativo, Check, Checkbox, ChevronDown,
CircleOff, ControlCheckbox, ControlRadio, Divider, Divider2, Dropdown, DropdownInput,
Hyperlink, Input, Listbox, Loading, MessageFeedback, Pagination, PaginationPage, Search,
Square, StepIndicator, Tag, Times, ToolTip

**extra/**: Add, AssignTo, BotO, Check2, ColorPickerListItem, ColumnHeader, ColumnSorting,
Component1 (balance/quota card), Component18, DropdownListItem, FontType, Grid,
IcCheckV143, IcTextAlignLeft, Icons8, Item, LegendaVariaveis, List, Message,
MessageFeedback3, More, More2, PM, Project, Rectangle, Resources, SignIn, Status, Steps,
TableHeader, Tag2, TextoDasLinhas, Type, UiCursor, UiImage, Upload, Warning

**nav/**: AngleDoubleLeft, AngleDoubleRight, AngleLeft, AngleRight, BotOCone, ButtonIcon,
ButtonWeb350p, CabeAlho (page header), ControlOption, Divider3, Dropdown2, DropdownList,
ElementButton, FontType2, IcChevronDown, IconGlyphSet, IconGlyphSetAlt, Icons, Icons3,
Link, MenuBarButton, MenuBarButtonBase, MenuBarColorPickerDropdown,
MenuBarTextAlignDropdown, MenuBarTextStyleDropdown, MessageFeedback2, PaginationControl,
PaginatorCount, PaginatorIcon, Radio, Slider1, Step, TableTitle, TagGray, TopNav

**misc/**: CardEstratGiasOpen1, Dollar, Down, Empty, FontType3, InputHighlight,
ListVertical, Notes, Right, Shortcut, Status2, Stepper, TableDefault, User

**icons/**: Icon (single component, `name` prop — see `icon-data.js` for the full list)

### Intentional additions
- `Icon.jsx` — a materializer-generated wrapper around the glyph set; the source has no
  single "Icon" component, only ~30 duplicated icon-variant component sets across pages.
- `IconGlyphSet` / `IconGlyphSetAlt` — renamed from the source's generic "Component 18"
  layer names (icon-swap helpers used inside TopNav / ButtonWeb350p) for readability.

### Not built
Three families were left out: `.table/Default` and `Card-Estratégias/Open/1` largely
duplicate `TableDefault`/`CardEstratGiasOpen1` already built from sibling nodes, and
`Stepper` (the literal name) collided with the already-built `Stepper` component from a
different node — the richer of the two duplicates was kept in each case.

## Content fundamentals

The product is written entirely in **formal Brazilian Portuguese**, third person, in the
register of federal administrative Portuguese ("o usuário deverá", "a Secretaria
Municipal de Saúde"). Example, verbatim from a help panel:

> "O Sisab foi instituído pela Portaria GM/MS nº 1.412, de 10 de julho de 2013, passando a
> ser o sistema de informação da Atenção Básica vigente para fins de financiamento e de
> adesão aos programas e estratégias..."

- No "you" address, no marketing tone, no contractions — this is regulatory/bureaucratic
  copy, citing specific *portarias* (ministerial ordinances) by number and date.
- Field labels are short nouns/noun phrases: "Área ou região de referência", "População a
  ser coberta", "Qtde. Credenciada", never conversational.
- Status/action vocabulary is domain-specific Portuguese: Deferido/Indeferido (approved/
  denied), Tramitação (processing), Habilitação, Credenciamento, Publicada.
- No emoji anywhere. No exclamation points. Numbers, dates, and legal citations are exact.
- Acronyms are used freely without expansion in-context (eSF, eAP, eCR, CNES, INE, CGFAP)
  — the audience is trained health-system administrators, not the general public.

## Visual foundations

- **Color**: dominant brand blue `rgb(19,81,180)` for text links, actions and active
  states, paired with near-black `rgb(51,51,51)` body text and light gray
  `rgb(240,240,240)` / `rgb(235,235,235)` surfaces and dividers. A second brighter blue
  `rgb(38,112,232)` and cyan `rgb(161,238,255)` appear in charts/progress accents. Status
  colors: green `rgb(22,136,33)` success, red `rgb(255,0,0)`/`rgb(236,34,31)` danger,
  yellow `rgb(255,205,7)` pending/partial. Backgrounds are flat white or `rgb(247,249,252)`
  — no gradients, no photography, no illustration anywhere in the product UI.
- **Type**: Rawline (the official gov.br governmental typeface) for nearly all UI text —
  Regular for body, SemiBold for labels/emphasis, Medium/Bold for headings. Raleway and
  Montserrat appear as secondary faces on a handful of marketing/cover frames (e.g. the
  "Capa Siaps" splash), not in the working application screens. Sizes are small and dense:
  12–16px body text is standard, 20px+ reserved for section titles.
- **Spacing**: tight, data-dense layouts — 8px is the base unit (the file's own `Space`
  variable = 8), most padding/gaps sit at 4/8/12/16px, rarely more. This is an
  administrative back-office tool, not a marketing surface: density over whitespace.
- **Backgrounds**: always flat solid fills. No full-bleed imagery, no illustration, no
  textures or patterns, no gradients — the one exception is the "Capa Siaps" cover/splash
  frame, which uses a blue blob-shape graphic purely as a title-page decoration.
- **Animation**: not defined in the source (Figma has no motion/prototype specs in scope);
  treat as none-specified — use simple opacity/color transitions only if needed.
- **Hover/press states**: components define explicit hover/pressed/actived/disabled
  variants — hovers generally darken or deepen the fill slightly rather than changing hue;
  pressed states darken further. Disabled states drop to a flat gray with reduced-contrast
  text.
- **Borders & radius**: mostly small radii (2–4px) on inputs/cards/tags; circular (50%)
  radius on avatar/icon-button chips. Borders are thin 1px solid grays
  (`rgb(235,235,235)`/`rgb(207,211,217)`), used more than shadows to separate surfaces.
- **Shadows**: a single soft drop shadow (`rgba(0,0,0,0.25)`) used sparingly, mainly on
  tooltips, dropdowns and floating menus — cards mostly rely on a border, not a shadow.
- **Transparency/blur**: minimal — a couple of translucent overlay tokens (`ui-secondary`
  at 24% opacity) for hover/scrim layers; no blur/glassmorphism anywhere.
- **Cards**: flat white surface, 1px light-gray border, small radius, no shadow by
  default — content-dense (labels + values + status tag), not decorative.

## Iconography

- The source uses **Font Awesome 5 Free (Solid)** as its icon font (630+ instances) plus a
  custom SVG icon-component set (~65 unique glyphs, materialized into
  `components/icons/icon-data.js` + `Icon.jsx`) for product chrome — search, edit, trash,
  save, filter, download, arrows, folders, locks, charts, etc.
  Because Font Awesome's own icon glyphs are font-embedded (not vector paths in the file),
  they weren't extractable as SVG; **Font Awesome 5 Free is loaded from cdnjs** in
  `tokens/typography.css` so those glyphs still render correctly wherever the product uses
  the Font Awesome icon font directly.
- No emoji, no unicode-character icons anywhere in the product.
- The only bitmap brand asset in the whole file is the official **gov.br** wordmark
  (`assets/logo-govbr.png`), used in every screen's header next to "Ministério da Saúde".
  There is no "Gerência APS" logo/wordmark in the source — render the name in Raleway/
  Rawline type wherever a mark is needed.

## Fonts

- **Rawline** — loaded live from the public Design System GOV.BR CDN
  (`cdngovbr-ds.estaleiro.serpro.gov.br/design-system/fonts/rawline/css/rawline.css`).
  This is the real official typeface (not a substitution).
- **Raleway**, **Montserrat** — loaded from Google Fonts (both are genuinely Google Fonts
  families and appear as secondary faces in the source, e.g. cover/splash frames).
- **Font Awesome 5 Free** — loaded from cdnjs for the icon-font glyphs the vector
  extractor couldn't capture.
- No substitutions were needed — every typeface in the source has a legitimate public CDN.
