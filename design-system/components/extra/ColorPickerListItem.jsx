import { IcCheckV143 } from './IcCheckV143.jsx';

// figma node: 3220:3784 color-picker__list-item (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ColorPickerListItem(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: 4,
        backgroundColor: "rgb(33,37,41)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        opacity: 0.7,
        mixBlendMode: "multiply",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(33,37,41)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "rgb(33,37,41)",
        boxShadow: "0 0 0 2px rgb(208,235,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        opacity: 0.7,
        mixBlendMode: "multiply",
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 1px rgb(33,37,41)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: 4,
        backgroundColor: "rgb(33,37,41)",
        boxShadow: "0 0 0 2px rgb(208,235,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        opacity: 0.7,
        mixBlendMode: "multiply",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(33,37,41)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: 4,
        backgroundColor: "rgb(33,37,41)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        opacity: 0.7,
        mixBlendMode: "multiply",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgb(33,37,41)",
      }} />
      <div style={{
          position: "absolute",
          left: 6,
          top: 4,
          width: 16,
          height: 16,
          color: "rgb(255,255,255)",
        }}>{props.icon1 ?? <IcCheckV143 />}</div>
    </div>
  );
  const __impls = {
    // figma: state=default
    "state=default": __body0,
    // figma: state=hover
    "state=hover": __body1,
    // figma: state=selected
    "state=selected": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ColorPickerListItem;
