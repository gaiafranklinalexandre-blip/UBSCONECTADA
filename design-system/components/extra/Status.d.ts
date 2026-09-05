import * as React from 'react';
export interface StatusProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "completed" | "not started" | "in progress";
  /** Text content; defaults to "Not Started". */
  text1?: string;
}
export declare const Status: React.FC<StatusProps>;
export default Status;
