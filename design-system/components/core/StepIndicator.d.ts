import * as React from 'react';
export interface StepIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "simple" | "number" | "icon" | "empty";
  state?: "default" | "hover" | "actived" | "pressed" | "disabled" | "complete" | "alert" | "error";
  /** Text content; defaults to "1". */
  text1?: string;
}
export declare const StepIndicator: React.FC<StepIndicatorProps>;
export default StepIndicator;
