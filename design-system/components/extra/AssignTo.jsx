// figma node: 2748:16066 Assign to (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "name=" + __venc(p.name);

export function AssignTo(_p = {}) {
  const props = { ..._p, name: _p.name ?? "aman" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "rgb(252,217,104)",
      }} />
      <div className="fig-asset-7e50924fb4cbcd43" style={{
        position: "absolute",
        left: 3.125,
        top: 3.125,
        width: 93.75,
        height: 93.75,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "rgb(224,111,119)",
      }} />
      <div className="fig-asset-fe402ed83deae4bc" style={{
        position: "absolute",
        left: 8.125,
        top: -5,
        width: 93.75,
        height: 93.75,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "rgb(120,66,209)",
      }} />
      <div className="fig-asset-a609575985bad908" style={{
        position: "absolute",
        left: 3.75,
        top: 8.375,
        width: 93.75,
        height: 93.75,
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "rgb(232,65,185)",
      }} />
      <div className="fig-asset-399a18b1fe75cdf5" style={{
        position: "absolute",
        left: 9.552,
        top: -3.371,
        width: 93.75,
        height: 93.75,
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "rgb(66,82,209)",
      }} />
      <div className="fig-asset-b64d4a4d7b473592" style={{
        position: "absolute",
        left: 3.125,
        top: 3.125,
        width: 93.75,
        height: 93.75,
      }} />
    </div>
  );
  const __impls = {
    // figma: Name=Aman
    "name=aman": __body0,
    // figma: Name=Sarah
    "name=sarah": __body1,
    // figma: Name=John
    "name=john": __body2,
    // figma: Name=Emily
    "name=emily": __body3,
    // figma: Name=David
    "name=david": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AssignTo;
