import * as React from 'react';
export interface PaginationProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "contextual";
  /** Text content; defaults to "Exibir". */
  text1?: string;
  /** Text content; defaults to "1-10 de 100 itens". */
  text2?: string;
  /** Text content; defaults to "Página". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
