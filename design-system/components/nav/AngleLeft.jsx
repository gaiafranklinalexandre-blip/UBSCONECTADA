// figma node: 97:429 angle-left
export function AngleLeft(_p = {}) {
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
        left: 9.501,
        top: 7.879,
        width: 4.999,
        height: 8.371,
        overflow: "hidden",
      }}>
        <svg width={4.999} height={8.371} viewBox="0 0 4.999 8.371" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 4.999,
          height: 8.371,
        }}>
          <path d={"M 4.249 8.371 C 4.151 8.371 4.053 8.352 3.962 8.314 C 3.871 8.276 3.789 8.221 3.719 8.151 L 0.219 4.651 C 0.079 4.51 0 4.319 0 4.121 C 0 3.922 0.079 3.731 0.219 3.591 L 3.719 0.121 C 3.86 0.029 4.028 -0.012 4.195 0.003 C 4.362 0.018 4.52 0.089 4.642 0.204 C 4.764 0.32 4.844 0.473 4.869 0.639 C 4.894 0.805 4.862 0.975 4.779 1.121 L 1.779 4.121 L 4.779 7.121 C 4.92 7.261 4.999 7.452 4.999 7.651 C 4.999 7.849 4.92 8.04 4.779 8.181 C 4.635 8.311 4.444 8.38 4.249 8.371 L 4.249 8.371 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default AngleLeft;
