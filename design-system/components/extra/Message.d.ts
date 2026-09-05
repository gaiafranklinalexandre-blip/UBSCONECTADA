import * as React from 'react';
export interface MessageProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "warning" | "danger" | "info" | "sucess";
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Message: React.FC<MessageProps>;
export default Message;
