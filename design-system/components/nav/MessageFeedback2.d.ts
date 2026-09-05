import * as React from 'react';
export interface MessageFeedback2Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "mensagem" | "mensagem. icon";
  state?: "danger" | "warning" | "sucess" | "info";
  /** Text content; defaults to "Campo informacional". */
  text1?: string;
}
export declare const MessageFeedback2: React.FC<MessageFeedback2Props>;
export default MessageFeedback2;
