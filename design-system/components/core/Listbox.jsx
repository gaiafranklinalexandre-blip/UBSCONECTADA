import { Checkbox } from './Checkbox.jsx';
import { Input } from './Input.jsx';
import { Search } from './Search.jsx';
import { Square } from './Square.jsx';
import { Times } from './Times.jsx';

// figma node: 97:610 Listbox (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "elevation=" + __venc(p.elevation);

export function Listbox(_p = {}) {
  const props = { ..._p, elevation: _p.elevation ?? "raised", multiSelect: _p.multiSelect ?? true, header: _p.header ?? true, placeholder: _p.placeholder ?? false, headerClose: _p.headerClose ?? true, headerSearch: _p.headerSearch ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 321,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.header && (
      <div style={{
        position: "relative",
        backgroundColor: "var(--bluegray-bluegray-50)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Checkbox state={"default"} />}</div>
        )}
        {props.headerSearch && (
        <Input
          style={{
            position: "relative",
            height: 64,
            flexGrow: 1,
            width: "auto",
          }}
          preIcon={false}
          icon2={<Search style={{ width: "100%", height: "100%" }} />}
          type={"default"}
          state={"default"}
          size={"normal"}
        />
        )}
        {props.headerClose && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <Times />}</div>
        )}
      </div>
      )}
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <Checkbox state={"default"} />}</div>
        )}
        {props.placeholder && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon4 ?? <Square />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>{props.text1 ?? "Dropdown menu item"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <Checkbox
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
        />
        )}
        {props.placeholder && (
        <Square style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>{props.text2 ?? "Dropdown menu item"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <Checkbox
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
        />
        )}
        {props.placeholder && (
        <Square style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>{props.text3 ?? "Dropdown menu item"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <Checkbox
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
        />
        )}
        {props.placeholder && (
        <Square style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>{props.text4 ?? "Dropdown menu item"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <Checkbox
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
        />
        )}
        {props.placeholder && (
        <Square style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>Dropdown menu item</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 321,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px var(--bluegray-bluegray-200)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.header && (
      <div style={{
        position: "relative",
        backgroundColor: "var(--bluegray-bluegray-50)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Checkbox state={"default"} />}</div>
        )}
        {props.headerSearch && (
        <Input
          style={{
            position: "relative",
            height: 64,
            flexGrow: 1,
            width: "auto",
          }}
          preIcon={false}
          icon2={<Search style={{ width: "100%", height: "100%" }} />}
          type={"default"}
          state={"default"}
          size={"normal"}
        />
        )}
        {props.headerClose && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <Times />}</div>
        )}
      </div>
      )}
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <Checkbox state={"default"} />}</div>
        )}
        {props.placeholder && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon4 ?? <Square />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>{props.text1 ?? "Dropdown menu item"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <Checkbox
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
        />
        )}
        {props.placeholder && (
        <Square style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>{props.text2 ?? "Dropdown menu item"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <Checkbox
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
        />
        )}
        {props.placeholder && (
        <Square style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>{props.text3 ?? "Dropdown menu item"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <Checkbox
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
        />
        )}
        {props.placeholder && (
        <Square style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>{props.text4 ?? "Dropdown menu item"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 16px 12px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.multiSelect && (
        <Checkbox
          style={{ position: "relative", flexShrink: 0 }}
          state={"default"}
        />
        )}
        {props.placeholder && (
        <Square style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }} />
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-800)",
          flexShrink: 0,
        }}>Dropdown menu item</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Elevation=Raised
    "elevation=raised": __body0,
    // figma: Elevation=Border
    "elevation=border": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Listbox;
