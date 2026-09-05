import * as React from 'react';
export interface IconGlyphSetProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "pdf" | "download" | "view-file" | "trash" | "menu" | "save" | "edit" | "filter" | "search" | "close" | "more" | "loading" | "info" | "arrow-up" | "arrow-down" | "arrow-right" | "arrow-left" | "refresh" | "open-tab" | "check" | "double-check";
}
export declare const IconGlyphSet: React.FC<IconGlyphSetProps>;
export default IconGlyphSet;
