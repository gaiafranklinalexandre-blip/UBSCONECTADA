import * as React from 'react';
export interface ListVerticalProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Titulo". */
  text1?: string;
}
export declare const ListVertical: React.FC<ListVerticalProps>;
export default ListVertical;
