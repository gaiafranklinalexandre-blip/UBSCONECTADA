// figma node: 97:487 check
export function Check(_p = {}) {
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
        left: 3.128,
        top: 5.879,
        width: 17.5,
        height: 12.371,
        overflow: "hidden",
      }}>
        <svg width={17.500} height={12.371} viewBox="0 0 17.500 12.371" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 17.5,
          height: 12.371,
        }}>
          <path d={"M 5.872 12.371 C 5.771 12.367 5.672 12.343 5.581 12.3 C 5.49 12.257 5.409 12.196 5.342 12.121 L 0.342 7.121 C 0.247 7.059 0.167 6.976 0.108 6.879 C 0.049 6.782 0.013 6.672 0.003 6.559 C -0.007 6.446 0.008 6.332 0.049 6.226 C 0.089 6.12 0.153 6.024 0.235 5.946 C 0.318 5.868 0.417 5.81 0.526 5.776 C 0.634 5.742 0.749 5.733 0.861 5.75 C 0.974 5.767 1.081 5.809 1.174 5.873 C 1.268 5.937 1.346 6.022 1.402 6.121 L 5.872 10.561 L 16.342 0.121 C 16.483 0.029 16.651 -0.012 16.818 0.003 C 16.985 0.018 17.142 0.089 17.265 0.204 C 17.387 0.32 17.467 0.473 17.492 0.639 C 17.517 0.805 17.485 0.975 17.402 1.121 L 6.402 12.121 C 6.335 12.196 6.254 12.257 6.163 12.3 C 6.072 12.343 5.973 12.367 5.872 12.371 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default Check;
