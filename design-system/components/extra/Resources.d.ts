import * as React from 'react';
export interface ResourcesProps {
  className?: string;
  style?: React.CSSProperties;
  added?: boolean;
  /** Text content; defaults to "3". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Resources: React.FC<ResourcesProps>;
export default Resources;
