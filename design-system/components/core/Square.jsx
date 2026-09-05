// figma node: 97:608 square
export function Square(_p = {}) {
  const props = _p;
  return (
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
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
}
export default Square;
