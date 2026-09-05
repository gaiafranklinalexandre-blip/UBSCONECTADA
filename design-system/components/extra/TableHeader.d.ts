import * as React from 'react';
export interface TableHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "pressed" | "default" | "hover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TableHeader: React.FC<TableHeaderProps>;
export default TableHeader;
