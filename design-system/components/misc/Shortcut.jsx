// figma node: 2808:11278 shortcut
export function Shortcut(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 4,
      backgroundColor: "rgb(233,237,245)",
      position: "relative",
      color: "rgb(134,143,160)",
      ...props.style,
    }}>
      <svg width={5} height={11} viewBox="0 0 5 11" fill="none" style={{
        position: "absolute",
        left: 5.5,
        top: 2.5,
        width: 5,
        height: 11,
      }}>
        <path d={"M 5 0 L 3.702 0 L 0 11 L 1.298 11 L 5 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Shortcut;
