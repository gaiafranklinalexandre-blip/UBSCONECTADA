import * as React from 'react';
export interface MenuBarColorPickerDropdownProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hover" | "default" | "active" | "selected";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MenuBarColorPickerDropdown: React.FC<MenuBarColorPickerDropdownProps>;
export default MenuBarColorPickerDropdown;
