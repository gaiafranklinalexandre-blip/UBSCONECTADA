// figma node: 2816:12964 add
export function Add(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(134,143,160)",
      ...props.style,
    }}>
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 12,
        height: 12,
      }}>
        <path d={"M 6 0 C 6.414 0 6.75 0.336 6.75 0.75 L 6.75 5.25 L 11.25 5.25 C 11.664 5.25 12 5.586 12 6 C 12 6.414 11.664 6.75 11.25 6.75 L 6.75 6.75 L 6.75 11.25 C 6.75 11.664 6.414 12 6 12 C 5.586 12 5.25 11.664 5.25 11.25 L 5.25 6.75 L 0.75 6.75 C 0.336 6.75 0 6.414 0 6 C 0 5.586 0.336 5.25 0.75 5.25 L 5.25 5.25 L 5.25 0.75 C 5.25 0.336 5.586 0 6 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Add;
