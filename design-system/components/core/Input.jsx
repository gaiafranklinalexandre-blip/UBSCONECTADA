import { CircleOff } from './CircleOff.jsx';

// figma node: 97:512 Input (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function Input(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", state: _p.state ?? "default", size: _p.size ?? "normal", helpTextError: _p.helpTextError ?? false, preIcon: _p.preIcon ?? true, helpTextDefault: _p.helpTextDefault ?? false, postIcon: _p.postIcon ?? true, label: _p.label ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 202,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--bluegray-bluegray-300)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--bluegray-bluegray-300)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          lineHeight: "28px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--blue-blue-500)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          lineHeight: "28px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 250,
      opacity: 0.6,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--bluegray-bluegray-300)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          lineHeight: "28px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--red-red-500)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          lineHeight: "28px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 202,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--bluegray-bluegray-300)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 202,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--blue-blue-500)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 202,
      opacity: 0.6,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--bluegray-bluegray-300)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 202,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--red-red-500)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 202,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--red-red-500)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff />}</div>
        )}
      </div>
      {props.helpTextError && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--red-red-500)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 202,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--blue-blue-500)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 202,
      opacity: 0.6,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--base-white)",
        boxShadow: "inset 0 0 0 1px var(--bluegray-bluegray-300)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.preIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <CircleOff />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "var(--bluegray-bluegray-500)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Placeholder"}</span>
        {props.postIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <CircleOff />}</div>
        )}
      </div>
      {props.helpTextDefault && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--bluegray-bluegray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Placeholder"}</span>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 202,
      borderRadius: 4,
      backgroundColor: "var(--base-white)",
      boxShadow: "inset 0 0 0 1px var(--bluegray-bluegray-300)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-500)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 202,
      opacity: 0.6,
      borderRadius: 4,
      backgroundColor: "var(--base-white)",
      boxShadow: "inset 0 0 0 1px var(--bluegray-bluegray-300)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--bluegray-bluegray-500)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 202,
      height: 48,
      borderRadius: 4,
      backgroundColor: "var(--base-white)",
      boxShadow: "inset 0 0 0 2px var(--blue-blue-500)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 12,
        top: -20,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--bluegray-bluegray-500)",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 202,
      height: 48,
      borderRadius: 4,
      backgroundColor: "var(--base-white)",
      boxShadow: "inset 0 0 0 2px var(--red-red-500)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 12,
        top: -20,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--bluegray-bluegray-500)",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Placeholder"}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Default, State=Default, Size=Normal
    "type=default|state=default|size=normal": __body0,
    // figma: Type=Default, State=Default, Size=Large
    "type=default|state=default|size=lg": __body1,
    // figma: Type=Default, State=Active, Size=Large
    "type=default|state=active|size=lg": __body2,
    // figma: Type=Default, State=Disabled, Size=Large
    "type=default|state=disabled|size=lg": __body3,
    // figma: Type=Default, State=Error, Size=Large
    "type=default|state=error|size=lg": __body4,
    // figma: Type=Default, State=Default, Size=Small
    "type=default|state=default|size=sm": __body5,
    // figma: Type=Default, State=Active, Size=Small
    "type=default|state=active|size=sm": __body6,
    // figma: Type=Default, State=Disabled, Size=Small
    "type=default|state=disabled|size=sm": __body7,
    // figma: Type=Default, State=Error, Size=Small
    "type=default|state=error|size=sm": __body8,
    // figma: Type=Default, State=Error, Size=Normal
    "type=default|state=error|size=normal": __body9,
    // figma: Type=Default, State=Active, Size=Normal
    "type=default|state=active|size=normal": __body10,
    // figma: Type=Default, State=Disabled, Size=Normal
    "type=default|state=disabled|size=normal": __body11,
    // figma: Type=Floating-label, State=Default, Size=Normal
    "type=floating-label|state=default|size=normal": __body12,
    // figma: Type=Floating-label, State=Disabled, Size=Normal
    "type=floating-label|state=disabled|size=normal": __body13,
    // figma: Type=Floating-label, State=Active, Size=Normal
    "type=floating-label|state=active|size=normal": __body14,
    // figma: Type=Floating-label, State=Error, Size=Normal
    "type=floating-label|state=error|size=normal": __body15,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Input;
