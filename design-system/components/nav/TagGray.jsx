// figma node: 2808:11020 Tag/Gray
export function TagGray(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(233,237,245)",
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
        borderRadius: 2,
        backgroundColor: "rgb(104,113,130)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "0.030em",
        color: "rgb(90,99,118)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Inactive"}</span>
    </div>
  );
}
export default TagGray;
