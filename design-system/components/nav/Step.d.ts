import * as React from 'react';
export interface StepProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "complex" | "simple" | "textual";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Step: React.FC<StepProps>;
export default Step;
