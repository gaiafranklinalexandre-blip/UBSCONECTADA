// figma node: 3220:3775 ic_chevron-down
export function IcChevronDown(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      position: "relative",
      color: "rgb(33,37,41)",
      ...props.style,
    }}>
      <svg width={20} height={11.400} viewBox="0 0 20 11.400" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 10.6,
        width: 20,
        height: 11.4,
      }}>
        <path d={"M 10 11.4 L 0 1.4 L 1.4 0 L 10 8.6 L 18.6 0 L 20 1.4 L 10 11.4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default IcChevronDown;
