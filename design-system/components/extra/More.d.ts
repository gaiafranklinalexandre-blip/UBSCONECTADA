import * as React from 'react';
export interface MoreProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const More: React.FC<MoreProps>;
export default More;
