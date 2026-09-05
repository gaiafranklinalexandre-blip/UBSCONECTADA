import * as React from 'react';
export interface BotOConeProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "simple" | "solid" | "outline";
  status?: "active" | "disabled" | "hover" | "click" | "pressed";
  botOTexto?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const BotOCone: React.FC<BotOConeProps>;
export default BotOCone;
