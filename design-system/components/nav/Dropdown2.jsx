import { DropdownList } from './DropdownList.jsx';

// figma node: 3220:3836 dropdown
export function Dropdown2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 104,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}>{props.list ?? <DropdownList />}</div>
    </div>
  );
}
export default Dropdown2;
