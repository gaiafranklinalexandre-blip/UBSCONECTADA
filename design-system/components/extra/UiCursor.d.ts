import * as React from 'react';
export interface UiCursorProps {
  className?: string;
  style?: React.CSSProperties;
  property?: "not-allowed" | "pointer" | "grab" | "grabbing" | "default" | "copy";
}
export declare const UiCursor: React.FC<UiCursorProps>;
export default UiCursor;
