import { MenuBarButtonBase } from './MenuBarButtonBase.jsx';

// figma node: 3220:3805 menu-bar__button (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MenuBarButton(_p = {}) {
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
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <MenuBarButtonBase text={false} dropdown2={false} colorPicker={false} />}</div>
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
    "state=selected": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MenuBarButton;
