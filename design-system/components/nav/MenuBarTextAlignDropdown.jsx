import { MenuBarButtonBase } from './MenuBarButtonBase.jsx';

// figma node: 3220:3860 menu-bar__text-align-dropdown (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MenuBarTextAlignDropdown(_p = {}) {
  const props = { ..._p, state: _p.state ?? "hover" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 50,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <MenuBarButtonBase text={false} text2={"Normal text"} icon2={true} dropdown2={true} colorPicker={false} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 50,
      height: 28,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 28,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <MenuBarButtonBase text={false} text2={"Normal text"} icon2={true} dropdown2={true} colorPicker={false} />}</div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 32,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 104,
          display: "flex",
          flexDirection: "column",
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              height: 32,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }} data-external={"24564:27347"} />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 8px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }} data-external={"24549:27333"} />
            <span style={{
              position: "relative",
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: 1.25,
              color: "rgb(33,37,41)",
              flexShrink: 0,
            }}>center</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 8px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }} data-external={"24549:27335"} />
            <span style={{
              position: "relative",
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: 1.25,
              color: "rgb(33,37,41)",
              flexShrink: 0,
            }}>right</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 8px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }} data-external={"24549:27328"} />
            <span style={{
              position: "relative",
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: 1.25,
              color: "rgb(33,37,41)",
              flexShrink: 0,
            }}>justify</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: state=default
    "state=default": __body0,
    // figma: state=hover
    "state=hover": __body0,
    // figma: state=active
    "state=active": __body0,
    // figma: state=selected
    "state=selected": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MenuBarTextAlignDropdown;
