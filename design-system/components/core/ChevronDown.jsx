// figma node: 97:473 chevron-down
export function ChevronDown(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--bluegray-bluegray-800)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 6.339,
        top: 8.857,
        width: 11.289,
        height: 6.393,
        overflow: "hidden",
      }}>
        <svg width={11.289} height={6.393} viewBox="0 0 11.289 6.393" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 11.289,
          height: 6.393,
        }}>
          <path d={"M 5.661 6.393 C 5.562 6.394 5.465 6.374 5.374 6.337 C 5.283 6.299 5.2 6.243 5.131 6.173 L 0.131 1.173 C 0.031 1.027 -0.014 0.851 0.004 0.675 C 0.021 0.499 0.101 0.335 0.227 0.212 C 0.354 0.089 0.52 0.015 0.697 0.002 C 0.873 -0.011 1.048 0.039 1.191 0.143 L 5.661 4.583 L 10.131 0.143 C 10.272 0.052 10.439 0.01 10.607 0.026 C 10.774 0.041 10.931 0.112 11.054 0.227 C 11.176 0.342 11.256 0.495 11.281 0.661 C 11.305 0.828 11.274 0.997 11.191 1.143 L 6.191 6.143 C 6.124 6.219 6.043 6.28 5.952 6.323 C 5.86 6.366 5.762 6.39 5.661 6.393 L 5.661 6.393 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default ChevronDown;
