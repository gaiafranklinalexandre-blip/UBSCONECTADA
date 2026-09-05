import * as React from 'react';
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "interactive" | "status" | "text" | "icon" | "score";
  state?: "selected" | "default" | "hover" | "dragged" | "pressed" | "disabled";
  /** Text content; defaults to "Label". */
  text1?: string;
}
export declare const Tag: React.FC<TagProps>;
export default Tag;
