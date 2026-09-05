import { IcTextAlignLeft } from './IcTextAlignLeft.jsx';

// figma node: 3220:3818 dropdown__list-item (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function DropdownListItem(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", text: _p.text ?? "text", icon: _p.icon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 104,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <IcTextAlignLeft />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.25,
        color: "rgb(33,37,41)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 104,
      backgroundColor: "rgb(231,245,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <IcTextAlignLeft />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.25,
        color: "rgb(33,37,41)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __impls = {
    // figma: state=default
    "state=default": __body0,
    // figma: state=hover
    "state=hover": __body1,
    // figma: state=active
    "state=active": __body1,
    // figma: state=selected
    "state=selected": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DropdownListItem;
