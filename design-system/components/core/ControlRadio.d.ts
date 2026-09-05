import * as React from 'react';
export interface ControlRadioProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hover" | "default" | "selected" | "focused" | "danger" | "sucess" | "disabled";
}
export declare const ControlRadio: React.FC<ControlRadioProps>;
export default ControlRadio;
