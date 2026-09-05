import * as React from 'react';
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "floating-label";
  state?: "default" | "error" | "disabled" | "active";
  size?: "normal" | "sm" | "lg";
  helpTextError?: boolean;
  preIcon?: boolean;
  helpTextDefault?: boolean;
  postIcon?: boolean;
  label?: boolean;
  /** Text content; defaults to "Placeholder". */
  text1?: string;
  /** Text content; defaults to "Placeholder". */
  text2?: string;
  /** Text content; defaults to "Placeholder". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Input: React.FC<InputProps>;
export default Input;
