// figma node: 2808:10939 down
export function Down(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(134,143,160)",
      ...props.style,
    }}>
      <svg width={6} height={3} viewBox="0 0 6 3" fill="none" style={{
        position: "absolute",
        left: 5,
        top: 6.5,
        width: 6,
        height: 3,
      }}>
        <path d={"M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0.53 -0.53 Z M 3 3 L 2.47 3.53 C 2.763 3.823 3.237 3.823 3.53 3.53 L 3 3 Z M 6.53 0.53 C 6.823 0.237 6.823 -0.237 6.53 -0.53 C 6.237 -0.823 5.763 -0.823 5.47 -0.53 L 6.53 0.53 Z M -0.53 0.53 L 2.47 3.53 L 3.53 2.47 L 0.53 -0.53 L -0.53 0.53 Z M 3.53 3.53 L 6.53 0.53 L 5.47 -0.53 L 2.47 2.47 L 3.53 3.53 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Down;
