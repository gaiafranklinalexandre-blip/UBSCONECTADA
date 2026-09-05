import { DropdownInput } from './DropdownInput.jsx';
import { Listbox } from './Listbox.jsx';

// figma node: 97:661 Dropdown (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Dropdown(_p = {}) {
  const props = { ..._p, state: _p.state ?? "active" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 360,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <DropdownInput style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      <Listbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        multiSelect={true}
        headerClose={true}
        elevation={"raised"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 360,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <DropdownInput style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
    </div>
  );
  const __impls = {
    // figma: State=Active
    "state=active": __body0,
    // figma: State=Default
    "state=default": __body1,
    // figma: State=Error
    "state=error": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Dropdown;
