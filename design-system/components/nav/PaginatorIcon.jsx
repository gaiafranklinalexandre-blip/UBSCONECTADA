import { AngleDoubleLeft } from './AngleDoubleLeft.jsx';

// figma node: 97:416 Paginator-Icon (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "type=" + __venc(p.type);

export function PaginatorIcon(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", type: _p.type ?? "square" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--base-white)",
      borderTop: "1px solid var(--bluegray-bluegray-200)",
      borderRight: "1px solid var(--bluegray-bluegray-200)",
      borderBottom: "1px solid var(--bluegray-bluegray-200)",
      borderLeft: "1px solid var(--bluegray-bluegray-200)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AngleDoubleLeft />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 24,
      backgroundColor: "var(--base-white)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AngleDoubleLeft />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--bluegray-bluegray-50)",
      borderTop: "1px solid var(--bluegray-bluegray-200)",
      borderRight: "1px solid var(--bluegray-bluegray-200)",
      borderBottom: "1px solid var(--bluegray-bluegray-200)",
      borderLeft: "1px solid var(--bluegray-bluegray-200)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AngleDoubleLeft />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 24,
      backgroundColor: "var(--bluegray-bluegray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AngleDoubleLeft />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--base-white)",
      borderTop: "1px solid var(--blue-blue-500)",
      borderRight: "1px solid var(--blue-blue-500)",
      borderBottom: "1px solid var(--blue-blue-500)",
      borderLeft: "1px solid var(--blue-blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AngleDoubleLeft />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 24,
      backgroundColor: "var(--blue-blue-50)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AngleDoubleLeft />}</div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Type=Square
    "state=default|type=square": __body0,
    // figma: State=Default, Type=Circle
    "state=default|type=circle": __body1,
    // figma: State=Hover, Type=Square
    "state=hover|type=square": __body2,
    // figma: State=Hover, Type=Circle
    "state=hover|type=circle": __body3,
    // figma: State=Active, Type=Square
    "state=active|type=square": __body4,
    // figma: State=Active, Type=Circle
    "state=active|type=circle": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PaginatorIcon;
