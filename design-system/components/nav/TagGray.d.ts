import * as React from 'react';
export interface TagGrayProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Inactive". */
  text1?: string;
}
export declare const TagGray: React.FC<TagGrayProps>;
export default TagGray;
