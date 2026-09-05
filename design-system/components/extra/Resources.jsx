import { Add } from './Add.jsx';

// figma node: 2816:12967 Resources (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "added=" + __venc(p.added);

export function Resources(_p = {}) {
  const props = { ..._p, added: _p.added ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgb(237,237,252)",
      outline: "1px dashed rgb(128,124,234)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "5px 5px 5px 5px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 14,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Add />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(233,237,245)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 7px 2px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(70,79,96)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "3"}</span>
    </div>
  );
  const __impls = {
    // figma: Added?=False
    "added=false": __body0,
    // figma: Added?=True
    "added=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Resources;
