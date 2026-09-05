// figma node: 3662:38199 Rectangle
export function Rectangle(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 10,
        height: 10,
        borderRadius: 2,
        backgroundColor: "rgb(58,160,58)",
      }} />
    </div>
  );
}
export default Rectangle;
