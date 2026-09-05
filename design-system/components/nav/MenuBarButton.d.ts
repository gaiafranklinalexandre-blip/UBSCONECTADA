import * as React from 'react';
export interface MenuBarButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hover" | "default" | "active" | "selected";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MenuBarButton: React.FC<MenuBarButtonProps>;
export default MenuBarButton;
