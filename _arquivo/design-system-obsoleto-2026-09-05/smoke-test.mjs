import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import * as DS from './dist/index.js';

const expected = [
  'GovBrHeader', 'Breadcrumb', 'PageHeader', 'Footer', 'SectionTitle', 'BrandBanner', 'GradientHero',
  'StatusPill', 'ModuleCard', 'AccordionRow', 'InfoCard', 'KpiCard', 'ChartCard',
  'DataTable', 'Pagination', 'NotificationList',
  'Button', 'Tabs', 'Select', 'SearchableSelect', 'SearchInput',
  'DonutChart', 'ProgressFunnel', 'RankingBar', 'TimelineChart',
];

let missing = expected.filter((name) => typeof DS[name] !== 'function');
if (missing.length) {
  console.error('FALTANDO NO BUNDLE:', missing);
  process.exit(1);
}
console.log(`Todos os ${expected.length} componentes exportados como funcao. OK.`);

function tryRender(name, el) {
  try {
    const html = renderToStaticMarkup(el);
    if (!html || html.length < 5) throw new Error('markup vazio');
    console.log(`OK  ${name} (${html.length} chars)`);
  } catch (e) {
    console.error(`FALHOU ${name}:`, e.message);
    process.exitCode = 1;
  }
}

const h = React.createElement;

tryRender('GovBrHeader', h(DS.GovBrHeader, { orgName: 'Ministério da Saúde', utilityLinks: [{ label: 'Link 1' }], userName: 'Gestor' }));
tryRender('Breadcrumb', h(DS.Breadcrumb, { items: [{ label: 'Gerencia APS', href: '#' }, { label: 'Credenciamento' }] }));
tryRender('PageHeader', h(DS.PageHeader, { title: 'Gerencia APS - Gestão Municipal', subtitle: 'Município - UF', breadcrumb: [{ label: 'Credenciamento' }] }));
tryRender('Footer', h(DS.Footer, { text: 'Ministério da Saúde | SAPS @2023' }));
tryRender('SectionTitle', h(DS.SectionTitle, null, 'Módulos'));
tryRender('BrandBanner', h(DS.BrandBanner, { title: 'Gerencia APS', description: 'Texto institucional de exemplo.' }));
tryRender('GradientHero', h(DS.GradientHero, { eyebrow: 'Siaps', title: 'Componente Qualidade' }));

tryRender('StatusPill-verde', h(DS.StatusPill, { tone: 'verde' }, 'Disponível'));
tryRender('StatusPill-vermelho', h(DS.StatusPill, { tone: 'vermelho' }, 'Sem saldo'));
tryRender('ModuleCard', h(DS.ModuleCard, { title: 'Credenciamento', description: 'Acesse para aderir às ações.' }));
tryRender('ModuleCard-disabled', h(DS.ModuleCard, { title: 'Em breve: Adesão', description: 'Acesse...', disabled: true }));
tryRender('AccordionRow', h(DS.AccordionRow, { tone: 'verde', label: 'eSF', status: h(DS.StatusPill, { tone: 'verde' }, 'Disponível'), defaultExpanded: true }, 'Conteúdo expandido'));
tryRender('InfoCard', h(DS.InfoCard, { title: 'Materiais de Apoio', description: 'Consulte os materiais de apoio.' }));
tryRender('KpiCard', h(DS.KpiCard, { label: 'Municípios elegíveis', value: '1.418', variant: 'azul', icon: '🏛️' }));
tryRender('ChartCard', h(DS.ChartCard, { title: 'Situação dos municípios' }, 'conteúdo'));

tryRender('DataTable', h(DS.DataTable, {
  columns: [{ key: 'uf', header: 'UF' }, { key: 'mun', header: 'Município' }],
  rows: [{ uf: 'SP', mun: 'São Paulo' }],
  rowKey: (r) => r.uf + r.mun,
}));
tryRender('DataTable-empty', h(DS.DataTable, { columns: [{ key: 'a', header: 'A' }], rows: [], rowKey: () => 'x' }));
tryRender('Pagination', h(DS.Pagination, { page: 1, totalPages: 3, onPageChange: () => {}, summary: 'Exibindo 1 a 5 de 5', pageSize: 50, pageSizeOptions: [10, 50] }));
tryRender('NotificationList', h(DS.NotificationList, { items: [{ tone: 'alerta', text: 'Credenciamento suspenso', periods: ['12/02/25 - 30/06/25'] }] }));

tryRender('Button', h(DS.Button, { variant: 'solido' }, 'Aplicar filtro'));
tryRender('Tabs', h(DS.Tabs, { tabs: [{ key: 'a', label: 'Credenciamento' }, { key: 'b', label: 'Adesão' }], activeKey: 'a', onChange: () => {} }));
tryRender('Select', h(DS.Select, { options: [{ value: 'sp', label: 'SP' }], value: 'sp', onChange: () => {}, label: 'UF' }));
tryRender('SearchableSelect', h(DS.SearchableSelect, { options: [{ value: '1', label: 'São Paulo', sublabel: 'SP' }], value: '', onChange: () => {} }));
tryRender('SearchInput', h(DS.SearchInput, { value: '', onChange: () => {} }));

tryRender('DonutChart', h(DS.DonutChart, {
  segments: [
    { label: 'Não aderiu', value: 312, color: '#E52207' },
    { label: 'Fase II pendente', value: 828, color: '#FFCD07' },
    { label: 'Fase II concluída', value: 278, color: '#168821' },
  ],
  centerValue: '1.418', centerLabel: 'municípios',
}));
tryRender('ProgressFunnel', h(DS.ProgressFunnel, {
  stages: [
    { label: 'Municípios elegíveis', value: 1418, color: '#1351B4' },
    { label: 'Aderiram', value: 1106, color: '#FFCD07', detail: '78% do total' },
    { label: 'Fase II concluída', value: 278, color: '#168821' },
  ],
}));
tryRender('RankingBar', h(DS.RankingBar, {
  rows: [
    { label: 'SP', segments: [{ value: 10, color: '#E52207' }, { value: 5, color: '#FFCD07' }, { value: 20, color: '#168821' }], totalLabel: '35 mun' },
  ],
}));
tryRender('TimelineChart', h(DS.TimelineChart, {
  series: [
    { name: 'Municípios', points: [{ label: '01/09', value: 100 }, { label: '02/09', value: 200 }], meta: 1418, color: '#1351B4' },
    { name: 'UBS', points: [{ label: '01/09', value: 300 }, { label: '02/09', value: 600 }], meta: 3815, color: '#6c3fc5' },
  ],
}));

console.log('\nSmoke test finalizado.');
