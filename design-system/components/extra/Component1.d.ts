import * as React from 'react';
export interface Component1Props {
  className?: string;
  style?: React.CSSProperties;
  card?: "collapsed" | "full";
  saldo?: "disponivel" | "indisp" | "preench";
  programa?: string;
  /** Text content; defaults to "Disponível". */
  text1?: string;
  /** Text content; defaults to "Teto". */
  text2?: string;
  /** Text content; defaults to "0". */
  text3?: string;
  /** Text content; defaults to "Qtde. Credenciada". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Component1: React.FC<Component1Props>;
export default Component1;
