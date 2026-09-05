import * as React from 'react';
export interface ButtonIconProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "simple" | "solid" | "outline";
  status?: "active" | "disabled" | "hover" | "click" | "pressed";
  botOTexto?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ButtonIcon: React.FC<ButtonIconProps>;
export default ButtonIcon;
