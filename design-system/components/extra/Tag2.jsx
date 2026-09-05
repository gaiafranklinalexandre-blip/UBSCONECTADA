// figma node: 2808:10926 Tag (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color);

export function Tag2(_p = {}) {
  const props = { ..._p, color: _p.color ?? "green" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgba(3,168,114,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "1px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: 10,
        backgroundColor: "rgb(56,160,108)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "pre-wrap",
        lineHeight: "18px",
        letterSpacing: "0.030em",
        color: "rgb(20,128,74)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}><span style={{ color: "rgb(3,168,114)", fontSize: 12 }}>{"Ótimo"}</span><span style={{ color: "rgb(70,79,96)", fontSize: 12 }}>{" - Score 3,00"}</span></span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgba(1,99,168,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "1px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: 10,
        backgroundColor: "rgb(1,99,168)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "pre-wrap",
        lineHeight: "18px",
        letterSpacing: "0.030em",
        color: "rgb(170,91,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}><span style={{ color: "rgb(1,99,168)" }}>{"Bom"}</span><span style={{ color: "rgb(70,79,96)" }}>{" - Score 2,25"}</span></span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgba(199,160,2,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "1px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: 10,
        backgroundColor: "rgb(199,160,2)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "pre-wrap",
        lineHeight: "18px",
        letterSpacing: "0.030em",
        color: "rgb(209,41,61)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}><span style={{ color: "rgb(199,160,2)" }}>{"Satisfatório"}</span><span style={{ color: "rgb(70,79,96)" }}>{" - Score 1,50"}</span></span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgba(196,101,0,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "1px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: 10,
        backgroundColor: "rgb(196,101,0)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "pre-wrap",
        lineHeight: "18px",
        letterSpacing: "0.030em",
        color: "rgb(94,90,219)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}><span style={{ color: "rgb(196,101,0)" }}>{"Regular"}</span><span style={{ color: "rgb(70,79,96)" }}>{" - 0,75"}</span></span>
    </div>
  );
  const __impls = {
    // figma: Color=Green
    "color=green": __body0,
    // figma: Color=Orange
    "color=orange": __body1,
    // figma: Color=Red
    "color=red": __body2,
    // figma: Color=Indigo
    "color=indigo": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Tag2;
