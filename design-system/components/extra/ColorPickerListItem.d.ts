import * as React from 'react';
export interface ColorPickerListItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "selected";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ColorPickerListItem: React.FC<ColorPickerListItemProps>;
export default ColorPickerListItem;
