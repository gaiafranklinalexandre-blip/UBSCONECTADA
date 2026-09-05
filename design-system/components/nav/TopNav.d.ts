import * as React from 'react';
export interface TopNavProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Dados Sócio Demográficos:". */
  text1?: string;
  /** Text content; defaults to "UF". */
  text2?: string;
  /** Text content; defaults to "xx". */
  text3?: string;
  /** Text content; defaults to "População IBGE". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TopNav: React.FC<TopNavProps>;
export default TopNav;
