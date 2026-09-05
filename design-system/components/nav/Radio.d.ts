import * as React from 'react';
export interface RadioProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Informações adicionais". */
  text1?: string;
  /** Text content; defaults to "Texto da opção". */
  text2?: string;
  /** Text content; defaults to "Texto da opção". */
  text3?: string;
  /** Text content; defaults to "Texto da opção". */
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
export declare const Radio: React.FC<RadioProps>;
export default Radio;
