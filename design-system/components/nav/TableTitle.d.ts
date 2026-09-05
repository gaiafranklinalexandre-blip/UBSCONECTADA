import * as React from 'react';
export interface TableTitleProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Task". */
  text1?: string;
  /** Text content; defaults to "Assigned to". */
  text2?: string;
  /** Text content; defaults to "Start Date". */
  text3?: string;
  /** Text content; defaults to "Due Date". */
  text4?: string;
}
export declare const TableTitle: React.FC<TableTitleProps>;
export default TableTitle;
