import * as React from 'react';
export interface Divider3Props {
  className?: string;
  style?: React.CSSProperties;
  position?: "separator horizontal" | "separator vertical";
  state?: "fundo-escuro" | "fundo-claro";
  style2?: "tracejado" | "linha";
  large?: "1" | "2" | "4";
}
export declare const Divider3: React.FC<Divider3Props>;
export default Divider3;
