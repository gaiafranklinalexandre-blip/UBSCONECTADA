import * as React from 'react';
export interface UiImageProps {
  className?: string;
  style?: React.CSSProperties;
  property?: "black" | "white";
  variant?: "default" | "small" | "circle" | "small.image";
  /** Text content; defaults to ".Img". */
  text1?: string;
}
export declare const UiImage: React.FC<UiImageProps>;
export default UiImage;
