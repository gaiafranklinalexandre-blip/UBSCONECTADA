import * as React from 'react';
export interface TextoDasLinhasProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "selected";
  /** Text content; defaults to "1". */
  text1?: string;
}
export declare const TextoDasLinhas: React.FC<TextoDasLinhasProps>;
export default TextoDasLinhas;
