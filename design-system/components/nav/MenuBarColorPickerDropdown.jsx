import { Dropdown2 } from './Dropdown2.jsx';
import { MenuBarButtonBase } from './MenuBarButtonBase.jsx';

// figma node: 3220:3929 menu-bar__color-picker-dropdown (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MenuBarColorPickerDropdown(_p = {}) {
  const props = { ..._p, state: _p.state ?? "hover" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 50,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <MenuBarButtonBase text={false} text2={"Normal text"} icon2={false} dropdown2={true} colorPicker={true} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 28,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 28,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <MenuBarButtonBase text={false} text2={"Normal text"} icon2={false} dropdown2={true} colorPicker={true} />}</div>
      <Dropdown2 style={{
          position: "absolute",
          left: 0,
          top: 32,
          width: 70,
        }} />
    </div>
  );
  const __impls = {
    // figma: state=default
    "state=default": __body0,
    // figma: state=hover
    "state=hover": __body0,
    // figma: state=active
    "state=active": __body0,
    // figma: state=selected
    "state=selected": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MenuBarColorPickerDropdown;
