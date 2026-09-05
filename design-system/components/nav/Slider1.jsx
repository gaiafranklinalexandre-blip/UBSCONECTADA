// figma node: 2890:12390 Slider 1
export function Slider1(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 340,
      height: 57,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 93,
        top: 35,
        width: 312,
        height: 6,
        borderRadius: 50,
        backgroundColor: "rgb(246,246,246)",
      }} />
      <div style={{
        position: "absolute",
        left: 93,
        top: 33,
        width: 159,
        height: 6,
        borderRadius: 50,
        backgroundColor: "rgb(0,211,0)",
      }} />
      <div style={{
        position: "absolute",
        left: 240,
        top: 26,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgb(244,209,68)",
        boxShadow: "0px 10px 18.900px 0px rgba(2,89,248,0.35)",
      }} />
      <div style={{
        position: "absolute",
        left: 392,
        top: 28,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgb(193,193,193)",
        boxShadow: "0px 10px 18.900px 0px rgba(2,89,248,0.35)",
      }} />
      <div style={{
        position: "absolute",
        left: 85,
        top: 25,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgb(22,136,33)",
        boxShadow: "0px 10px 18.900px 0px rgba(2,89,248,0.35)",
      }} />
      <svg width={10} height={8} viewBox="0 0 10 8" fill="none" style={{
        position: "absolute",
        left: 5,
        top: 57,
        color: "rgb(255,255,255)",
      }}>
        <path transform="translate(1 7) scale(8 -8)" d="M 0.338 0.016 L 0.014 0.34 C -0.006 0.359 -0.006 0.393 0.014 0.412 L 0.084 0.482 C 0.104 0.502 0.135 0.502 0.154 0.482 L 0.375 0.264 L 0.844 0.732 C 0.863 0.752 0.895 0.752 0.914 0.732 L 0.984 0.662 C 1.004 0.643 1.004 0.609 0.984 0.59 L 0.41 0.016 C 0.391 -0.004 0.357 -0.004 0.338 0.016 Z" fill="currentColor" />
      </svg>
    </div>
  );
}
export default Slider1;
