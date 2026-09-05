import * as React from 'react';
export interface CardEstratGiasOpen1Props {
  className?: string;
  style?: React.CSSProperties;
  show1?: boolean;
  /** Text content; defaults to "Estratégia". */
  text1?: string;
  /** Text content; defaults to "Credenciamento". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const CardEstratGiasOpen1: React.FC<CardEstratGiasOpen1Props>;
export default CardEstratGiasOpen1;
