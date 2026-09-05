import * as React from 'react';
export interface HyperlinkProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover";
  size14px?: boolean;
  /** Text content; defaults to "Project name". */
  text1?: string;
}
export declare const Hyperlink: React.FC<HyperlinkProps>;
export default Hyperlink;
