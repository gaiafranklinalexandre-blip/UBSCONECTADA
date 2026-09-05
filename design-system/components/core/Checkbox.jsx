import { Check } from './Check.jsx';

// figma node: 97:490 Checkbox (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Checkbox(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", label: _p.label ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} viewBox="0 0 16 16" fill="none" style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "var(--base-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 12 0 C 14.209 0 16 1.791 16 4 L 16 12 C 16 14.209 14.209 16 12 16 L 4 16 C 1.791 16 0 14.209 0 12 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 2 L 12 2 L 12 -2 L 4 -2 L 4 2 Z M 14 4 L 14 12 L 18 12 L 18 4 L 14 4 Z M 12 14 L 4 14 L 4 18 L 12 18 L 12 14 Z M 2 12 L 2 4 L -2 4 L -2 12 L 2 12 Z M 4 14 C 2.895 14 2 13.105 2 12 L -2 12 C -2 15.314 0.686 18 4 18 L 4 14 Z M 14 12 C 14 13.105 13.105 14 12 14 L 12 18 C 15.314 18 18 15.314 18 12 L 14 12 Z M 12 2 C 13.105 2 14 2.895 14 4 L 18 4 C 18 0.686 15.314 -2 12 -2 L 12 2 Z M 4 -2 C 0.686 -2 -2 0.686 -2 4 L 2 4 C 2 2.895 2.895 2 4 2 L 4 -2 Z"} fill="rgb(203,213,225)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
      }}>{props.text1 ?? "Option 1"}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--blue-blue-500)",
        boxShadow: "inset 0 0 0 2px var(--blue-blue-500)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 10,
            height: 10,
          }}>{props.icon1 ?? <Check style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />}</div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
      }}>{props.text1 ?? "Option 1"}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Active
    "state=active": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Checkbox;
