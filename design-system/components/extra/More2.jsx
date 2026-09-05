// figma node: 2816:12974 more
export function More2(_p = {}) {
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
      <svg width={3} height={15} viewBox="0 0 3 15" fill="none" style={{
        position: "absolute",
        left: 6.5,
        top: 0.5,
        width: 3,
        height: 15,
      }}>
        <path d={"M 3 1.5 C 3 2.328 2.328 3 1.5 3 C 0.672 3 0 2.328 0 1.5 C 0 0.672 0.672 0 1.5 0 C 2.328 0 3 0.672 3 1.5 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 3 7.5 C 3 8.328 2.328 9 1.5 9 C 0.672 9 0 8.328 0 7.5 C 0 6.672 0.672 6 1.5 6 C 2.328 6 3 6.672 3 7.5 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 3 13.5 C 3 14.328 2.328 15 1.5 15 C 0.672 15 0 14.328 0 13.5 C 0 12.672 0.672 12 1.5 12 C 2.328 12 3 12.672 3 13.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default More2;
