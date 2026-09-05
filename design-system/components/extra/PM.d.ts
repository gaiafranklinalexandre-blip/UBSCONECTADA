import * as React from 'react';
export interface PMProps {
  className?: string;
  style?: React.CSSProperties;
  name?: "roger vaccaro" | "leo gouse" | "tatiana dias";
  /** Text content; defaults to "RV". */
  text1?: string;
}
export declare const PM: React.FC<PMProps>;
export default PM;
