// figma node: 86:329 .pagination-page (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function PaginationPage(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: "rgb(255,255,255)",
      }} />
      <span style={{
        position: "absolute",
        left: 13,
        top: 3,
        width: 7,
        height: 23,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16.799999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(19,81,180)",
      }}>{props.text1 ?? "1"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: "rgb(252,252,252)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        opacity: 0.16,
        borderRadius: "50%",
        backgroundColor: "rgb(19,81,180)",
      }} />
      <span style={{
        position: "absolute",
        left: 13,
        top: 3,
        width: 7,
        height: 23,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16.799999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(19,81,180)",
      }}>{props.text1 ?? "1"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: "rgb(252,252,252)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        opacity: 0.45,
        borderRadius: "50%",
        backgroundColor: "rgb(19,81,180)",
      }} />
      <span style={{
        position: "absolute",
        left: 13,
        top: 3,
        width: 7,
        height: 23,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16.799999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(19,81,180)",
      }}>{props.text1 ?? "1"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: "rgb(12,50,111)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 3,
        width: 8,
        height: 23,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16.799999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "1"}</span>
    </div>
  );
  const __impls = {
    // figma: state=default
    "state=default": __body0,
    // figma: state=hover
    "state=hover": __body1,
    // figma: state=pressed
    "state=pressed": __body2,
    // figma: state=actived
    "state=actived": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PaginationPage;
