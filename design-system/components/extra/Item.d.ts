import * as React from 'react';
export interface ItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hover" | "disabled" | "activated" | "selected" | "pressed" | "dragged" | "default";
  position?: "vertical" | "horizontal";
  /** Text content; defaults to "Sub-item". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Item: React.FC<ItemProps>;
export default Item;
