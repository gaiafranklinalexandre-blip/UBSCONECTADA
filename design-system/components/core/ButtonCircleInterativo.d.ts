import * as React from 'react';
export interface ButtonCircleInterativoProps {
  className?: string;
  style?: React.CSSProperties;
  tertiary?: "progress-tertiary" | "interativo-tertiary" | ".hover-tertiary" | ".pressed-tertiary" | ".actived-tertiary" | ".disabled-tertiary";
  secundary?: "progress-secundary" | ".interativo-secundary" | ".hover-secundary" | ".pressed-secundary" | ".actived-secundary" | ".disabled-secundary";
  primary?: "progress-primary" | "interativo-primary" | ".hover-primary" | ".pressed-primary" | ".actived-primary" | ".disabled-primary";
}
export declare const ButtonCircleInterativo: React.FC<ButtonCircleInterativoProps>;
export default ButtonCircleInterativo;
