import React from 'react';
import './TimelineChart.css';

export interface TimelinePoint {
  label: string;
  value: number;
}

export interface TimelineSeries {
  name: string;
  points: TimelinePoint[];
  /** Meta (100%) desta série — os pontos são normalizados como % da própria meta */
  meta: number;
  color: string;
}

export interface TimelineChartProps {
  /** Séries plotadas juntas — todas compartilham o mesmo eixo X (mesmas datas) e são
   * normalizadas em % da própria meta, já que costumam ter escalas brutas muito diferentes. */
  series: TimelineSeries[];
}

function pct(value: number, total: number) {
  return total > 0 ? Math.round((1000 * value) / total) / 10 : 0;
}

/**
 * Linha do tempo com histórico acumulado (linha sólida) e projeção tracejada até a meta
 * (100%) — inspirado numa planilha de controle de metas do usuário. Cada série é
 * normalizada independentemente para caber no mesmo eixo Y de 0–100%.
 */
export function TimelineChart({ series }: TimelineChartProps) {
  const validas = series.filter((s) => s.points.length > 0 && s.meta > 0);

  if (validas.length === 0) {
    return <div className="ds-timeline-chart__empty">Sem dados para exibir.</div>;
  }

  const W = 640;
  const H = 240;
  const padL = 10;
  const padR = 66;
  const padT = 26;
  const padB = 26;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const n = validas[0].points.length;
  const xStep = n > 1 ? plotW / n : plotW / 2;
  const xAt = (i: number) => padL + i * xStep;
  const yAt = (p: number) => padT + plotH - (Math.min(p, 100) / 100) * plotH;
  const xMeta = xAt(n);
  const yMeta = yAt(100);

  const idxLabels = n <= 5 ? validas[0].points.map((_, i) => i) : [0, Math.floor((n - 1) / 2), n - 1];

  return (
    <div className="ds-timeline-chart">
      <div className="ds-timeline-chart__legend">
        {validas.map((serie) => {
          const ultimo = serie.points[serie.points.length - 1].value;
          return (
            <div key={serie.name} className="ds-timeline-chart__legend-item">
              <span className="ds-timeline-chart__legend-dot" style={{ background: serie.color }} />
              <b>{serie.name}</b>
              <span>{ultimo.toLocaleString('pt-BR')} de {serie.meta.toLocaleString('pt-BR')} ({pct(ultimo, serie.meta)}%)</span>
            </div>
          );
        })}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="ds-timeline-chart__svg">
        {[0, 50, 100].map((f) => (
          <React.Fragment key={f}>
            <line x1={padL} y1={yAt(f)} x2={xMeta + 10} y2={yAt(f)} stroke="var(--ds-gray-border)" strokeWidth={1} />
            <text x={padL} y={yAt(f) - 4} className="ds-timeline-chart__axis">{f}%</text>
          </React.Fragment>
        ))}
        <text x={xMeta} y={H - 8} textAnchor="middle" className="ds-timeline-chart__meta-label">Meta</text>
        {idxLabels.map((i) => (
          <text key={i} x={xAt(i)} y={H - 8} textAnchor="middle" className="ds-timeline-chart__axis">
            {validas[0].points[i].label}
          </text>
        ))}
        {validas.map((serie) => {
          const coords = serie.points.map((p, i) => [xAt(i), yAt((100 * p.value) / serie.meta)] as const);
          const pathD = coords.map((c, i) => `${i === 0 ? 'M' : 'L'}${c[0]} ${c[1]}`).join(' ');
          const [lx, ly] = coords[coords.length - 1];
          const ultimoPct = Math.round((100 * serie.points[serie.points.length - 1].value) / serie.meta);
          return (
            <React.Fragment key={serie.name}>
              <path d={pathD} fill="none" stroke={serie.color} strokeWidth={2.5} />
              <line x1={lx} y1={ly} x2={xMeta} y2={yMeta} stroke={serie.color} strokeWidth={2} strokeDasharray="6 5" opacity={0.7} />
              <circle cx={lx} cy={ly} r={4} fill={serie.color} />
              <text x={lx} y={ly - 10} textAnchor="middle" className="ds-timeline-chart__value" fill={serie.color}>{ultimoPct}%</text>
            </React.Fragment>
          );
        })}
        <circle cx={xMeta} cy={yMeta} r={4} fill="var(--ds-text-mid)" />
      </svg>
    </div>
  );
}
