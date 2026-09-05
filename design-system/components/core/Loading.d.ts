import * as React from 'react';
export interface LoadingProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "inderteminate-small" | "inderteminate" | "default";
  /** Text content; defaults to "Carregando...". */
  text1?: string;
}
export declare const Loading: React.FC<LoadingProps>;
export default Loading;
