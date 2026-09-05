import * as React from 'react';
export interface PaginationPageProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "actived" | "hover" | "pressed";
  /** Text content; defaults to "1". */
  text1?: string;
}
export declare const PaginationPage: React.FC<PaginationPageProps>;
export default PaginationPage;
