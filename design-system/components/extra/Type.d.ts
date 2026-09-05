import * as React from 'react';
export interface TypeProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "resolved" | "to do" | "bug" | "tbd" | "tbc" | "remarks" | "comments" | "pros" | "cons";
  /** Text content; defaults to "Cons". */
  text1?: string;
}
export declare const Type: React.FC<TypeProps>;
export default Type;
