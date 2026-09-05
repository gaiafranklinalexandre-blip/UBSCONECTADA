import * as React from 'react';
export interface MenuBarTextAlignDropdownProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hover" | "default" | "active" | "selected";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MenuBarTextAlignDropdown: React.FC<MenuBarTextAlignDropdownProps>;
export default MenuBarTextAlignDropdown;
