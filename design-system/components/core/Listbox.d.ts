import * as React from 'react';
export interface ListboxProps {
  className?: string;
  style?: React.CSSProperties;
  elevation?: "raised" | "border";
  multiSelect?: boolean;
  header?: boolean;
  placeholder?: boolean;
  headerClose?: boolean;
  headerSearch?: boolean;
  /** Text content; defaults to "Dropdown menu item". */
  text1?: string;
  /** Text content; defaults to "Dropdown menu item". */
  text2?: string;
  /** Text content; defaults to "Dropdown menu item". */
  text3?: string;
  /** Text content; defaults to "Dropdown menu item". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Listbox: React.FC<ListboxProps>;
export default Listbox;
