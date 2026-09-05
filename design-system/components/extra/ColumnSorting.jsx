// figma node: 2808:11282 column-sorting
export function ColumnSorting(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(134,143,160)",
      ...props.style,
    }}>
      <svg width={8} height={5} viewBox="0 0 8 5" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 9,
        width: 8,
        height: 5,
        borderRadius: 0.5,
      }}>
        <path d={"M 4.39 4.512 C 4.19 4.762 3.81 4.762 3.61 4.512 L 0.65 0.812 C 0.388 0.485 0.621 0 1.04 0 L 6.96 0 C 7.379 0 7.612 0.485 7.35 0.812 L 4.39 4.512 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={8} height={5} viewBox="0 0 8 5" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 2,
        width: 8,
        height: 5,
        borderRadius: 0.5,
      }}>
        <path d={"M 4.39 0.488 C 4.19 0.238 3.81 0.238 3.61 0.488 L 0.65 4.188 C 0.388 4.515 0.621 5 1.04 5 L 6.96 5 C 7.379 5 7.612 4.515 7.35 4.188 L 4.39 0.488 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default ColumnSorting;
