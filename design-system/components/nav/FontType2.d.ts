import * as React from 'react';
export interface FontType2Props {
  className?: string;
  style?: React.CSSProperties;
  fontType?: "h6" | "paragraph" | "h5" | "h4" | "h3" | "h2" | "h1" | "legend" | "input" | "label" | "placeholder" | "mark" | "code" | "h1-4col" | "h2-4col" | "h3-4col" | "h4-4col" | "h5-4col" | "h6-4col" | "paragraph-4col";
  /** Text content; defaults to "Label". */
  text1?: string;
}
export declare const FontType2: React.FC<FontType2Props>;
export default FontType2;
