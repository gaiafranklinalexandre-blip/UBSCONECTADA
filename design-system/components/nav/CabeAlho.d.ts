import * as React from 'react';
export interface CabeAlhoProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "MInistério da Saúde". */
  text1?: string;
  /** Text content; defaults to "Link de acesso 1". */
  text2?: string;
  /** Text content; defaults to "Link de acesso 3". */
  text3?: string;
  /** Text content; defaults to "Link de acesso 2". */
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
export declare const CabeAlho: React.FC<CabeAlhoProps>;
export default CabeAlho;
