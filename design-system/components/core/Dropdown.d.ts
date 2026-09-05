import * as React from 'react';
export interface DropdownProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "active" | "default" | "error";
}
export declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
