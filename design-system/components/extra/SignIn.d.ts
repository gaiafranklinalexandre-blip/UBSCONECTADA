import * as React from 'react';
export interface SignInProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "internal" | "external" | "iconic";
  density?: "high" | "medium" | "low";
  version?: "alternative" | "standart";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "Imagem". */
  text2?: string;
}
export declare const SignIn: React.FC<SignInProps>;
export default SignIn;
