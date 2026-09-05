import React from 'react';
import './DonutChart.css';

export interface DonutSegment {
  label: string;
  value: number;
  color: string;
  /** Detalhe secundário opcional exibido numa 2ª linha da legenda (ex: quebra por sub-status) */
  detail?: string;
}

export interface DonutChartProps {
  segments: DonutSegment[];
  /** Total usado para calcular as proporções — padrão: soma dos segmentos */
  total?: number;
  /** Valor em destaque no centro do anel (ex: "1.418") */
  centerValue: string;
  /** Rótulo abaixo do valor central (ex: "municípios") */
  centerLabel: string;
  /** Diâmetro do gráfico em pixels */
  size?: number;
}

function pct(value: number, total: number) {
  return total > 0 ? Math.round((1000 * value) / total) / 10 : 0;
}

/**
 * Gráfico de rosca (donut) via `<circle>` + `stroke-dasharray`/`stroke-dashoffset` — sem
 * biblioteca de gráficos. Extraído do painel UBS Conectadas (`renderDonutGenerico`).
 */
export function DonutChart({ segments, total, centerValue, centerLabel, size = 176 }: DonutChartProps) {
  const sum = total ?? segments.reduce((s, x) => s + x.value, 0);
  const r = 70;
  const cx = 90;
  const cy = 90;
  const circ = 2 * Math.PI * r;
  let acc = 0;

  return (
    <div className="ds-donut-chart">
      <svg viewBox="0 0 180 180" width={size} height={size} className="ds-donut-chart__svg">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--ds-gray-border)" strokeWidth={22} />
        {segments.map((seg) => {
          const fracao = sum > 0 ? seg.value / sum : 0;
          const len = fracao * circ;
          const dashoffset = -acc;
          acc += len;
          return (
            <circle
              key={seg.label}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth={22}
              strokeDasharray={`${len} ${Math.max(circ - len, 0)}`}
              strokeDashoffset={dashoffset}
              transform={`rotate(-90 ${cx} ${cy})`}
            >
              <title>{`${seg.label}: ${seg.value} (${pct(seg.value, sum)}%)`}</title>
            </circle>
          );
        })}
        <text x={cx} y={cy - 4} textAnchor="middle" className="ds-donut-chart__value">{centerValue}</text>
        <text x={cx} y={cy + 14} textAnchor="middle" className="ds-donut-chart__label">{centerLabel}</text>
      </svg>
      <div className="ds-donut-chart__legend">
        {segments.map((seg) => (
          <div key={seg.label} className="ds-donut-chart__legend-item">
            <span className="ds-donut-chart__legend-dot" style={{ background: seg.color }} />
            <span className="ds-donut-chart__legend-text">
              <b>{seg.value} ({pct(seg.value, sum)}%)</b>
              <span>{seg.label}</span>
              {seg.detail && <span className="ds-donut-chart__legend-detail">{seg.detail}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
