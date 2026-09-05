import React from 'react';
import './ChartCard.css';

export interface ChartCardProps {
  /** Título do card (aceita texto ou markup simples, ex: com emoji) */
  title: React.ReactNode;
  /** Subtítulo/descrição opcional abaixo do título */
  subtitle?: string;
  /** Ação exibida à direita do título (ex: um botão de download) */
  action?: React.ReactNode;
  children: React.ReactNode;
}

/** Card branco arredondado usado como container padrão para gráficos e tabelas. */
export function ChartCard({ title, subtitle, action, children }: ChartCardProps) {
  return (
    <div className="ds-chart-card">
      <div className="ds-chart-card__header">
        <span className="ds-chart-card__title">{title}</span>
        {action}
      </div>
      {subtitle && <div className="ds-chart-card__subtitle">{subtitle}</div>}
      <div className="ds-chart-card__body">{children}</div>
    </div>
  );
}
