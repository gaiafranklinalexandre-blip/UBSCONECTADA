// figma node: 2808:11031 dollar
export function Dollar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(134,143,160)",
      ...props.style,
    }}>
      <svg width={8} height={14} viewBox="0 0 8 14" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 1,
        width: 8,
        height: 14,
      }}>
        <path d={"M 3.517 14 L 4.504 14 L 4.509 12.77 C 6.73 12.6 8 11.277 8 9.505 C 8 7.487 6.273 6.705 4.908 6.355 L 4.525 6.251 L 4.535 2.74 C 5.517 2.877 6.189 3.445 6.289 4.342 L 7.853 4.342 C 7.811 2.674 6.488 1.427 4.541 1.263 L 4.546 0 L 3.559 0 L 3.554 1.274 C 1.669 1.471 0.289 2.696 0.289 4.463 C 0.289 6.021 1.36 6.934 3.087 7.421 L 3.538 7.547 L 3.528 11.271 C 2.504 11.14 1.711 10.56 1.627 9.505 L 0 9.505 C 0.1 11.391 1.407 12.605 3.522 12.77 L 3.517 14 Z M 4.514 11.271 L 4.525 7.831 C 5.591 8.137 6.394 8.542 6.394 9.488 C 6.394 10.445 5.627 11.118 4.514 11.271 Z M 3.543 5.977 C 2.761 5.737 1.9 5.305 1.906 4.364 C 1.906 3.544 2.53 2.904 3.549 2.745 L 3.543 5.977 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Dollar;
