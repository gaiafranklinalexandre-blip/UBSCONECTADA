// figma node: 3662:38201 check
export function Check2(_p = {}) {
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
      <svg width={10.500} height={6.750} viewBox="0 0 10.500 6.750" fill="none" style={{
        position: "absolute",
        left: 2.75,
        top: 4.62,
        width: 10.5,
        height: 6.75,
      }}>
        <path d={"M 3.75 6.75 L 3.22 7.28 C 3.513 7.573 3.987 7.573 4.28 7.28 L 3.75 6.75 Z M 0.53 2.47 C 0.237 2.177 -0.237 2.177 -0.53 2.47 C -0.823 2.763 -0.823 3.237 -0.53 3.53 L 0.53 2.47 Z M 11.03 0.53 C 11.323 0.237 11.323 -0.237 11.03 -0.53 C 10.737 -0.823 10.263 -0.823 9.97 -0.53 L 11.03 0.53 Z M -0.53 3.53 L 3.22 7.28 L 4.28 6.22 L 0.53 2.47 L -0.53 3.53 Z M 4.28 7.28 L 11.03 0.53 L 9.97 -0.53 L 3.22 6.22 L 4.28 7.28 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Check2;
