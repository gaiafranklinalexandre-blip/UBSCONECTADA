import { Button } from '../core/Button.jsx';
import { FontType3 } from './FontType3.jsx';

// figma node: 2757:10734 .input-highlight
export function InputHighlight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 385,
      height: 56,
      borderRadius: 8,
      backgroundColor: "rgb(248,248,248)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 16px 8px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <FontType3
        style={{
          position: "relative",
          height: 23,
          flexGrow: 1,
          width: "auto",
        }}
        text1={"O que você procura?"}
        fontType={"placeholder"}
      />
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon1 ?? <Button type={"button circle"} emphasis={"tertiary"} state={"default"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
}
export default InputHighlight;
