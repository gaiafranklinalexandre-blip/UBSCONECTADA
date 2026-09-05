import * as React from 'react';
export interface ProjectProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hovered" | "selected";
  /** Text content; defaults to "Nome do indicador". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Project: React.FC<ProjectProps>;
export default Project;
