import * as React from 'react';
export interface PaginationControlProps {
  className?: string;
  style?: React.CSSProperties;
  elavation?: "border" | "no-border";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const PaginationControl: React.FC<PaginationControlProps>;
export default PaginationControl;
