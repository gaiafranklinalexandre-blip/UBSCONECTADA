import * as React from 'react';
export interface ControlCheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "selected" | "hover" | "focused" | "danger" | "sucess" | "disabled" | "intermediate";
}
export declare const ControlCheckbox: React.FC<ControlCheckboxProps>;
export default ControlCheckbox;
