// figma node: 51:627 Element/Button
export function ElementButton(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 50,
      backgroundColor: "rgb(28,27,32)",
      display: "flex",
      flexDirection: "row",
      padding: "19px 32px 19px 32px",
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
        fontWeight: 700,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(254,254,254)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "action Button"}</span>
    </div>
  );
}
export default ElementButton;
