import * as React from 'react';
export interface BotOProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "simple" | "solid" | "outline";
  status?: "active" | "disabled" | "hover" | "click" | "pressed" | "loading";
  botOTexto?: string;
  icon?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const BotO: React.FC<BotOProps>;
export default BotO;
