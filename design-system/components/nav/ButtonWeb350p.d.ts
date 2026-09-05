import * as React from 'react';
export interface ButtonWeb350pProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "simple" | "solid" | "outline";
  status?: "active" | "disabled" | "hover" | "click" | "pressed" | "loading";
  botOTexto?: string;
  icon?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ButtonWeb350p: React.FC<ButtonWeb350pProps>;
export default ButtonWeb350p;
