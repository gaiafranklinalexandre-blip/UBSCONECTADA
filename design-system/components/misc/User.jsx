// figma node: 2808:11033 user
export function User(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(134,143,160)",
      ...props.style,
    }}>
      <svg width={12.600} height={14} viewBox="0 0 12.600 14" fill="none" style={{
        position: "absolute",
        left: 1.7,
        top: 1,
        width: 12.6,
        height: 14,
      }}>
        <path d={"M 9.45 3.559 C 9.45 5.524 8.04 7.117 6.3 7.117 C 4.56 7.117 3.15 5.524 3.15 3.559 C 3.15 1.593 4.56 0 6.3 0 C 8.04 0 9.45 1.593 9.45 3.559 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 12.6 12.455 C 12.6 14.617 9.393 13.878 6.3 13.878 C 3.207 13.878 0 14.617 0 12.455 C 0 10.293 3.207 8.541 6.3 8.541 C 9.393 8.541 12.6 10.293 12.6 12.455 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default User;
