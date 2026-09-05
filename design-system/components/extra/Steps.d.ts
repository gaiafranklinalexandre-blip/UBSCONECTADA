import * as React from 'react';
export interface StepsProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "active" | "complete" | "next" | "error" | "warning";
  nMero?: string;
  /** Text content; defaults to "Informar quantidade". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Steps: React.FC<StepsProps>;
export default Steps;
