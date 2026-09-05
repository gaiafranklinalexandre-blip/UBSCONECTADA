import * as React from 'react';
export interface InputHighlightProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const InputHighlight: React.FC<InputHighlightProps>;
export default InputHighlight;
