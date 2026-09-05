// figma node: 2748:16082 Status (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status);

export function Status(_p = {}) {
  const props = { ..._p, status: _p.status ?? "completed" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(253,233,233)",
      boxShadow: "inset 0 0 0 1px rgb(236,43,43)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 36px 20px 36px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Gilroy, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 36,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(236,43,43)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Not Started"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(255,246,231)",
      boxShadow: "inset 0 0 0 1px rgb(217,139,6)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 36px 20px 36px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Gilroy, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 36,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(217,139,6)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "In Progress"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(242,250,247)",
      boxShadow: "inset 0 0 0 1px rgb(0,165,89)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 36px 20px 36px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Gilroy, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 36,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,165,89)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Completed"}</span>
    </div>
  );
  const __impls = {
    // figma: Status=Not Started
    "status=not started": __body0,
    // figma: Status=In Progress
    "status=in progress": __body1,
    // figma: Status=Completed
    "status=completed": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Status;
