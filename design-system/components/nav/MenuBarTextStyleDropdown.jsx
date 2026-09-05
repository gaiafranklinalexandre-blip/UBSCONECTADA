import { MenuBarButtonBase } from './MenuBarButtonBase.jsx';

// figma node: 3220:3842 menu-bar__text-style-dropdown (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MenuBarTextStyleDropdown(_p = {}) {
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
      <MenuBarButtonBase
        style={{
          position: "relative",
          width: 109,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text={true}
        text2={"Normal text"}
        icon2={false}
        dropdown2={true}
        colorPicker={false}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 109,
      height: 28,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <MenuBarButtonBase
        style={{
          position: "relative",
          height: 28,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text={true}
        text2={"Normal text"}
        icon2={false}
        dropdown2={true}
        colorPicker={false}
      />
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
          width: 137,
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
              height: 26,
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
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={15} height={18} viewBox="0 0 15 18" fill="none" style={{
                position: "absolute",
                left: 4.5,
                top: 3,
                width: 15,
                height: 18,
                color: "rgb(33,37,41)",
              }}>
                <path d={"M 4.5 1.5 L 15 1.5 L 15 3 L 4.5 3 L 4.5 1.5 Z M 4.5 6 L 12 6 L 12 7.5 L 4.5 7.5 L 4.5 6 Z M 4.5 10.5 L 15 10.5 L 15 12 L 4.5 12 L 4.5 10.5 Z M 4.5 15 L 12 15 L 12 16.5 L 4.5 16.5 L 4.5 15 Z M 0 0 L 1.5 0 L 1.5 18 L 0 18 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: 1.25,
              color: "rgb(33,37,41)",
              flexShrink: 0,
            }}>Heading 1</span>
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
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={15} height={18} viewBox="0 0 15 18" fill="none" style={{
                position: "absolute",
                left: 4.5,
                top: 3,
                width: 15,
                height: 18,
                color: "rgb(33,37,41)",
              }}>
                <path d={"M 4.5 1.5 L 15 1.5 L 15 3 L 4.5 3 L 4.5 1.5 Z M 4.5 6 L 12 6 L 12 7.5 L 4.5 7.5 L 4.5 6 Z M 4.5 10.5 L 15 10.5 L 15 12 L 4.5 12 L 4.5 10.5 Z M 4.5 15 L 12 15 L 12 16.5 L 4.5 16.5 L 4.5 15 Z M 0 0 L 1.5 0 L 1.5 18 L 0 18 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: 1.25,
              color: "rgb(33,37,41)",
              flexShrink: 0,
            }}>Heading 2</span>
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
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={15} height={18} viewBox="0 0 15 18" fill="none" style={{
                position: "absolute",
                left: 4.5,
                top: 3,
                width: 15,
                height: 18,
                color: "rgb(33,37,41)",
              }}>
                <path d={"M 4.5 1.5 L 15 1.5 L 15 3 L 4.5 3 L 4.5 1.5 Z M 4.5 6 L 12 6 L 12 7.5 L 4.5 7.5 L 4.5 6 Z M 4.5 10.5 L 15 10.5 L 15 12 L 4.5 12 L 4.5 10.5 Z M 4.5 15 L 12 15 L 12 16.5 L 4.5 16.5 L 4.5 15 Z M 0 0 L 1.5 0 L 1.5 18 L 0 18 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: 1.25,
              color: "rgb(33,37,41)",
              flexShrink: 0,
            }}>Heading 3</span>
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
export default MenuBarTextStyleDropdown;
