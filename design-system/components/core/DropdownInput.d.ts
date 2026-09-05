import * as React from 'react';
export interface DropdownInputProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Test". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const DropdownInput: React.FC<DropdownInputProps>;
export default DropdownInput;
