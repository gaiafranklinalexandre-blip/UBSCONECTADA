// figma node: 2816:12914 PM (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "name=" + __venc(p.name);

export function PM(_p = {}) {
  const props = { ..._p, name: _p.name ?? "roger vaccaro" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: 6,
        backgroundColor: "rgb(237,237,252)",
        boxShadow: "inset 0 0 0 1px rgba(210,213,220,0.5)",
      }} />
      <span style={{
        position: "absolute",
        left: 1,
        top: 4,
        width: 22,
        height: 16,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "16px",
        letterSpacing: "0.050em",
        color: "rgb(94,90,219)",
      }}>{props.text1 ?? "RV"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-681f6a8edc68e857-b8c03b63" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: 6,
        boxShadow: "inset 0 0 0 1px rgba(210,213,220,0.5)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-3cd7c89f3a5fe6a7-16a4e6cb" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: 6,
        boxShadow: "inset 0 0 0 1px rgba(210,213,220,0.5)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Name=Roger Vaccaro
    "name=roger vaccaro": __body0,
    // figma: Name=Leo Gouse
    "name=leo gouse": __body1,
    // figma: Name=Tatiana Dias
    "name=tatiana dias": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PM;
