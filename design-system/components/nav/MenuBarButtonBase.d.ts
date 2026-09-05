import * as React from 'react';
export interface MenuBarButtonBaseProps {
  className?: string;
  style?: React.CSSProperties;
  dropdown?: React.ReactNode;
  text?: boolean;
  colorPicker?: boolean;
  dropdown2?: boolean;
  text2?: string;
  icon?: React.ReactNode;
  icon2?: boolean;
}
export declare const MenuBarButtonBase: React.FC<MenuBarButtonBaseProps>;
export default MenuBarButtonBase;
