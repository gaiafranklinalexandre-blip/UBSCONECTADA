import * as React from 'react';
export interface GridProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "12col" | "8col" | "4col" | "tv12col";
}
export declare const Grid: React.FC<GridProps>;
export default Grid;
