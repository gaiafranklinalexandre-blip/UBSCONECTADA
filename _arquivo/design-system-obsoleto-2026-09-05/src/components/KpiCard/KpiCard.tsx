import React from 'react';
import './KpiCard.css';

export type KpiVariant = 'azul' | 'verde' | 'amarelo' | 'vermelho' | 'roxo';

export interface KpiCardProps {
  /** Rótulo pequeno em maiúsculas acima do valor */
  label: string;
  /** Valor principal em destaque (ex: "1.418" ou "78%") */
  value: string | number;
  /** Variante de cor do card, alinhada ao farol do sistema */
  variant?: KpiVariant;
  /** Badge percentual opcional exibido abaixo do valor (ex: "78%") */
  pct?: string;
  /** Texto auxiliar opcional abaixo do valor/badge */
  sub?: string;
  /** Emoji grande exibido esmaecido no canto do card */
  icon?: string;
}

/** Card de indicador (KPI) — número em destaque, rótulo, badge percentual e texto auxiliar. */
export function KpiCard({ label, value, variant = 'azul', pct, sub, icon }: KpiCardProps) {
  return (
    <div className={`ds-kpi-card ds-kpi-card--${variant}`}>
      <div className="ds-kpi-card__label">{label}</div>
      <div className="ds-kpi-card__value">{value}</div>
      {pct && <div className="ds-kpi-card__pct">{pct}</div>}
      {sub && <div className="ds-kpi-card__sub">{sub}</div>}
      {icon && <div className="ds-kpi-card__icon" aria-hidden="true">{icon}</div>}
    </div>
  );
}
