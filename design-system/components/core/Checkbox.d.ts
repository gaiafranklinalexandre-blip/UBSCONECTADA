import * as React from 'react';
export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "active";
  label?: boolean;
  /** Text content; defaults to "Option 1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
