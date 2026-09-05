import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "button circle";
  emphasis?: "primary" | "secundary" | "tertiary";
  state?: "default" | "hover" | "pressed" | "actived" | "disabled" | "progress";
  /** Text content; defaults to "Button". */
  text1?: string;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
