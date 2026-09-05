import * as React from 'react';
export interface LegendaVariaveisProps {
  className?: string;
  style?: React.CSSProperties;
  tipo?: "closed" | "open";
  situaO?: "default" | "parcial" | "finalizado" | "processamento";
  /** Text content; defaults to "Demais estratégias da Atenção Primária à Saúde - Estadual". */
  text1?: string;
  /** Text content; defaults to "1/4". */
  text2?: string;
  /** Text content; defaults to "Estratégia". */
  text3?: string;
  /** Text content; defaults to "Quantidade". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const LegendaVariaveis: React.FC<LegendaVariaveisProps>;
export default LegendaVariaveis;
