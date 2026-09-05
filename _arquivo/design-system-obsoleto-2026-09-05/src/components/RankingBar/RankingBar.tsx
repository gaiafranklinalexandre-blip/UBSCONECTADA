import React from 'react';
import './RankingBar.css';

export interface RankingSegment {
  value: number;
  color: string;
}

export interface RankingRow {
  /** Rótulo curto à esquerda (ex: sigla da UF) */
  label: string;
  segments: RankingSegment[];
  /** Texto exibido à direita da linha (ex: "312 mun · 575 UBS") */
  totalLabel: React.ReactNode;
  /** Texto do tooltip (title) da barra */
  title?: string;
}

export interface RankingBarProps {
  rows: RankingRow[];
  /** Escala compartilhada entre as linhas — padrão: maior soma de segmentos entre as linhas */
  maxTotal?: number;
}

/** Lista de barras horizontais empilhadas — usada para ranquear categorias (ex: UF) por composição de status. */
export function RankingBar({ rows, maxTotal }: RankingBarProps) {
  const totals = rows.map((r) => r.segments.reduce((s, seg) => s + seg.value, 0));
  const max = maxTotal ?? Math.max(1, ...totals);

  return (
    <div className="ds-ranking-bar">
      {rows.map((row, i) => {
        const total = totals[i];
        const larguraTotal = max > 0 ? (100 * total) / max : 0;
        return (
          <div key={row.label} className="ds-ranking-bar__row">
            <span className="ds-ranking-bar__label">{row.label}</span>
            <span className="ds-ranking-bar__track" style={{ width: `${larguraTotal}%` }} title={row.title}>
              {row.segments.map((seg, j) => {
                const largura = total > 0 ? (100 * seg.value) / total : 0;
                return <span key={j} className="ds-ranking-bar__seg" style={{ width: `${largura}%`, background: seg.color }} />;
              })}
            </span>
            <span className="ds-ranking-bar__total">{row.totalLabel}</span>
          </div>
        );
      })}
    </div>
  );
}
