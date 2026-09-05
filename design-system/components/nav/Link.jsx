// figma node: 2808:10905 Link
export function Link(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(134,143,160)",
      ...props.style,
    }}>
      <svg width={14.000} height={14} viewBox="0 0 14.000 14" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 14,
        height: 14,
      }}>
        <path d={"M 7 0.75 C 7 0.336 7.336 0 7.75 0 L 13.25 0 C 13.664 0 14 0.336 14 0.75 L 14 6.253 C 14 6.667 13.664 7.003 13.25 7.003 C 12.836 7.003 12.5 6.667 12.5 6.253 L 12.5 2.561 L 7.53 7.53 C 7.237 7.823 6.763 7.823 6.47 7.53 C 6.177 7.237 6.177 6.763 6.47 6.47 L 11.439 1.5 L 7.75 1.5 C 7.336 1.5 7 1.164 7 0.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 5.25 1.5 C 5.664 1.5 6 1.836 6 2.25 C 6 2.664 5.664 3 5.25 3 L 2 3 C 1.724 3 1.5 3.224 1.5 3.5 L 1.5 12 C 1.5 12.276 1.724 12.5 2 12.5 L 10.5 12.5 C 10.776 12.5 11 12.276 11 12 L 11 8.75 C 11 8.336 11.336 8 11.75 8 C 12.164 8 12.5 8.336 12.5 8.75 L 12.5 12 C 12.5 13.105 11.605 14 10.5 14 L 2 14 C 0.895 14 0 13.105 0 12 L 0 3.5 C 0 2.395 0.895 1.5 2 1.5 L 5.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Link;
