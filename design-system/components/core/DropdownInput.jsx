import { ChevronDown } from './ChevronDown.jsx';

// figma node: 97:476 Dropdown-Input
export function DropdownInput(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 360,
      borderRadius: 4,
      backgroundColor: "var(--base-white)",
      boxShadow: "inset 0 0 0 2px var(--blue-blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Test"}</span>
        </div>
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ChevronDown />}</div>
    </div>
  );
}
export default DropdownInput;
