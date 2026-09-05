import { Button2 } from '../core/Button2.jsx';

// figma node: 86:246 .table-header (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TableHeader(_p = {}) {
  const props = { ..._p, state: _p.state ?? "pressed" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 266,
      height: 55,
      background: "linear-gradient(rgba(19,81,180,0.45),rgba(19,81,180,0.45)), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 12px 16px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 4px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(19,81,180)",
          flexShrink: 0,
        }}>Label</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 266,
      height: 56,
      background: "linear-gradient(rgba(19,81,180,0.16),rgba(19,81,180,0.16)), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 12px 16px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 19,
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(19,81,180)",
          flexShrink: 0,
        }}>Label</span>
      </div>
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon1 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 266,
      backgroundColor: "rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 12px 16px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 4px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(19,81,180)",
          flexShrink: 0,
        }}>Label</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: state=pressed
    "state=pressed": __body0,
    // figma: state= hover
    "state=hover": __body1,
    // figma: state = default
    "state=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TableHeader;
