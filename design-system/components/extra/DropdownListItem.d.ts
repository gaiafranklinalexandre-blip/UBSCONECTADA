import * as React from 'react';
export interface DropdownListItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active" | "selected";
  text?: string;
  icon?: boolean;
  icon2?: React.ReactNode;
}
export declare const DropdownListItem: React.FC<DropdownListItemProps>;
export default DropdownListItem;
