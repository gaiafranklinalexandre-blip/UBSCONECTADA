import * as React from 'react';
export interface UploadProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "disabled" | "pressed" | "loading" | "sucess" | "danger" | "upload";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Upload: React.FC<UploadProps>;
export default Upload;
