import * as React from 'react';
export interface PaginatorCountProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active";
  type?: "square" | "circle";
  /** Text content; defaults to "1". */
  text1?: string;
}
export declare const PaginatorCount: React.FC<PaginatorCountProps>;
export default PaginatorCount;
