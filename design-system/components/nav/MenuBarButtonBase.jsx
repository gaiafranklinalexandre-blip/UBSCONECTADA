import { ColorPickerListItem } from '../extra/ColorPickerListItem.jsx';
import { IcChevronDown } from './IcChevronDown.jsx';
import { IcTextAlignLeft } from '../extra/IcTextAlignLeft.jsx';

// figma node: 3220:3797 menu-bar__button--base
export function MenuBarButtonBase(_p = {}) {
  const props = { ..._p, text: _p.text ?? true, colorPicker: _p.colorPicker ?? true, dropdown2: _p.dropdown2 ?? true, text2: _p.text2 ?? "text", icon2: _p.icon2 ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 28,
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.text && (
      <span style={{
        position: "relative",
        fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        color: "rgb(33,37,41)",
        flexShrink: 0,
      }}>{props.text2}</span>
      )}
      {props.icon2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <IcTextAlignLeft style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.colorPicker && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>
        <ColorPickerListItem
          style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }}
          state={"default"}
        />
      </div>
      )}
      {props.dropdown2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.dropdown ?? <IcChevronDown style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
}
export default MenuBarButtonBase;
