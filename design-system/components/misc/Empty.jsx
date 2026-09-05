// figma node: 87:1397 .empty
export function Empty(_p = {}) {
  const props = _p;
  return (
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
        opacity: 0,
        backgroundColor: "rgb(252,252,252)",
      }} />
    </div>
  );
}
export default Empty;
