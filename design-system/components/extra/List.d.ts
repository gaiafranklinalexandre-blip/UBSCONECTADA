import * as React from 'react';
export interface ListProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "active" | "hover";
  /** Text content; defaults to "Option 1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const List: React.FC<ListProps>;
export default List;
