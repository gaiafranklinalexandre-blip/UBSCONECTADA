import * as React from 'react';
export interface ControlOptionProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hover" | "selected" | "danger" | "sucess" | "disabled" | "focused" | "default";
}
export declare const ControlOption: React.FC<ControlOptionProps>;
export default ControlOption;
