import * as React from 'react';
export interface Status2Props {
  className?: string;
  style?: React.CSSProperties;
  situaO?: "preenchimento" | "indisponível" | "disponível" | "enviado";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Status2: React.FC<Status2Props>;
export default Status2;
