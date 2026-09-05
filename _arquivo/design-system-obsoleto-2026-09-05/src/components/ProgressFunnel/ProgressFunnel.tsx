import React from 'react';
import './ProgressFunnel.css';

export interface FunnelStage {
  /** Nome da etapa (ex: "Municípios elegíveis") */
  label: React.ReactNode;
  /** Valor da etapa — a largura da barra é proporcional a este valor sobre o valor da 1ª etapa */
  value: number;
  color: string;
  /** Texto auxiliar exibido ao lado do valor (ex: "78% do total") */
  detail?: React.ReactNode;
}

export interface ProgressFunnelProps {
  /** Etapas em ordem decrescente — a 1ª define a base de 100% de largura */
  stages: FunnelStage[];
}

/** Funil de progresso: barras horizontais decrescentes representando etapas de um processo. */
export function ProgressFunnel({ stages }: ProgressFunnelProps) {
  const base = stages[0]?.value || 0;
  return (
    <div className="ds-progress-funnel">
      {stages.map((stage, i) => {
        const largura = base > 0 ? Math.max(4, Math.round((100 * stage.value) / base)) : 0;
        return (
          <div key={i} className="ds-progress-funnel__stage">
            <div className="ds-progress-funnel__top">
              <span className="ds-progress-funnel__label">{stage.label}</span>
              <span className="ds-progress-funnel__value">
                <b>{stage.value.toLocaleString('pt-BR')}</b>
                {stage.detail && <> — {stage.detail}</>}
              </span>
            </div>
            <div className="ds-progress-funnel__track">
              <div className="ds-progress-funnel__bar" style={{ width: `${largura}%`, background: stage.color }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
