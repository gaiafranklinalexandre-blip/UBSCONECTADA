// figma node: 2808:10908 Hyperlink (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size14px=" + __venc(p.size14px);

export function Hyperlink(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", size14px: _p.size14px ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.020em",
        color: "rgb(94,90,219)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Project name"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "0.030em",
        color: "rgb(94,90,219)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Project name"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.020em",
        color: "rgb(94,90,219)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Project name"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "0.030em",
        color: "rgb(94,90,219)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Project name"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default, Size 14px=False
    "state=default|size14px=false": __body0,
    // figma: State=Default, Size 14px=True
    "state=default|size14px=true": __body1,
    // figma: State=Hover, Size 14px=False
    "state=hover|size14px=false": __body2,
    // figma: State=Hover, Size 14px=True
    "state=hover|size14px=true": __body3,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Hyperlink;
