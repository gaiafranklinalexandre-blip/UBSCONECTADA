// figma node: 97:504 circle-off
export function CircleOff(_p = {}) {
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
        left: 3,
        top: 3,
        width: 18,
        height: 18,
        overflow: "hidden",
      }}>
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 18,
        }}>
          <path d={"M 9 18 C 7.22 18 5.48 17.472 4 16.483 C 2.52 15.494 1.366 14.089 0.685 12.444 C 0.004 10.8 -0.174 8.99 0.173 7.244 C 0.52 5.498 1.377 3.895 2.636 2.636 C 3.895 1.377 5.498 0.52 7.244 0.173 C 8.99 -0.174 10.8 0.004 12.444 0.685 C 14.089 1.366 15.494 2.52 16.483 4 C 17.472 5.48 18 7.22 18 9 C 18 11.387 17.052 13.676 15.364 15.364 C 13.676 17.052 11.387 18 9 18 L 9 18 Z M 9 1.5 C 7.517 1.5 6.067 1.94 4.833 2.764 C 3.6 3.588 2.639 4.759 2.071 6.13 C 1.503 7.5 1.355 9.008 1.644 10.463 C 1.934 11.918 2.648 13.254 3.697 14.303 C 4.746 15.352 6.082 16.067 7.537 16.356 C 8.992 16.645 10.5 16.497 11.87 15.929 C 13.241 15.361 14.412 14.4 15.236 13.167 C 16.06 11.933 16.5 10.483 16.5 9 C 16.5 7.011 15.71 5.103 14.303 3.697 C 12.897 2.29 10.989 1.5 9 1.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default CircleOff;
