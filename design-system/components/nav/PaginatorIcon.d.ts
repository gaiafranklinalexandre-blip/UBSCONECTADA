import * as React from 'react';
export interface PaginatorIconProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active";
  type?: "square" | "circle";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PaginatorIcon: React.FC<PaginatorIconProps>;
export default PaginatorIcon;
