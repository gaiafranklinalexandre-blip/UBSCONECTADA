import * as React from 'react';
export interface MenuBarTextStyleDropdownProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hover" | "default" | "active" | "selected";
}
export declare const MenuBarTextStyleDropdown: React.FC<MenuBarTextStyleDropdownProps>;
export default MenuBarTextStyleDropdown;
