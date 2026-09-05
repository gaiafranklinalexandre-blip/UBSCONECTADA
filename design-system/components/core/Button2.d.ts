import * as React from 'react';
export interface Button2Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "button circle";
  emphasis?: "primary" | "secundary" | "tertiary";
  state?: "default" | "hover" | "pressed" | "actived" | "disabled" | "progress";
  /** Text content; defaults to "Button". */
  text1?: string;
}
export declare const Button2: React.FC<Button2Props>;
export default Button2;
