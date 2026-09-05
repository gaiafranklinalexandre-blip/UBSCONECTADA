import * as React from 'react';
export interface ColumnHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "no sorting" | "hover" | "selected";
  /** Text content; defaults to "name". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ColumnHeader: React.FC<ColumnHeaderProps>;
export default ColumnHeader;
