import * as React from 'react';
export interface TableDefaultProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Título da Tabela". */
  text1?: string;
  /** Text content; defaults to "Lorem ipsum Delorium Spert". */
  text2?: string;
  /** Text content; defaults to "0%". */
  text3?: string;
  /** Text content; defaults to "0". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const TableDefault: React.FC<TableDefaultProps>;
export default TableDefault;
