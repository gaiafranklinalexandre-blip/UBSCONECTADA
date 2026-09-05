import * as React from 'react';
export interface AssignToProps {
  className?: string;
  style?: React.CSSProperties;
  name?: "aman" | "david" | "sarah" | "john" | "emily";
}
export declare const AssignTo: React.FC<AssignToProps>;
export default AssignTo;
