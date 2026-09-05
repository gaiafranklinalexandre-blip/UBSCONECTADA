import * as React from 'react';
export interface ToolTipProps {
  className?: string;
  style?: React.CSSProperties;
  cor?: "amarelo" | "azul" | "verde" | "vermelho";
  arrow?: "up" | "down" | "left" | "right";
  showInfo?: boolean;
  tTulo?: string;
  info?: string;
}
export declare const ToolTip: React.FC<ToolTipProps>;
export default ToolTip;
