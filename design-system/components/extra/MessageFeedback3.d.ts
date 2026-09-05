import * as React from 'react';
export interface MessageFeedback3Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "mensagem" | "mensagem. icon";
  state?: "danger" | "warning" | "sucess" | "info";
  /** Text content; defaults to "Campo informacional". */
  text1?: string;
}
export declare const MessageFeedback3: React.FC<MessageFeedback3Props>;
export default MessageFeedback3;
