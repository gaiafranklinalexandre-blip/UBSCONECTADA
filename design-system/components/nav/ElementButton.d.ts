import * as React from 'react';
export interface ElementButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "action Button". */
  text1?: string;
}
export declare const ElementButton: React.FC<ElementButtonProps>;
export default ElementButton;
