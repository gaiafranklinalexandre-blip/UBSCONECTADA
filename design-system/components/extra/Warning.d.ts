import * as React from 'react';
export interface WarningProps {
  className?: string;
  style?: React.CSSProperties;
  ine?: "insuficiente" | "obrigatório" | "opcional";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Warning: React.FC<WarningProps>;
export default Warning;
