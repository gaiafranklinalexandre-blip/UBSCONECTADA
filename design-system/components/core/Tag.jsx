// figma node: 357:1479 .tag (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function Tag(_p = {}) {
  const props = { ..._p, type: _p.type ?? "interactive", state: _p.state ?? "selected" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(19,81,180)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 19,
        height: 16,
        flexShrink: 0,
      }}>
        <svg width={17.100} height={16} viewBox="0 0 17.100 16" fill="none" style={{
          position: "absolute",
          left: 0.95,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(0.550 14) scale(16 -16)" d="M 0.975 0.531 C 0.99 0.531 1.002 0.516 0.998 0.502 L 0.986 0.455 C 0.984 0.443 0.975 0.438 0.965 0.438 L 0.924 0.438 C 0.951 0.414 0.969 0.381 0.969 0.344 L 0.969 0.25 C 0.969 0.217 0.955 0.189 0.938 0.168 L 0.938 0.063 C 0.938 0.027 0.908 0 0.875 0 L 0.813 0 C 0.777 0 0.75 0.027 0.75 0.063 L 0.75 0.125 L 0.25 0.125 L 0.25 0.063 C 0.25 0.027 0.221 0 0.188 0 L 0.125 0 C 0.09 0 0.063 0.027 0.063 0.063 L 0.063 0.168 C 0.043 0.189 0.031 0.217 0.031 0.25 L 0.031 0.344 C 0.031 0.381 0.047 0.414 0.074 0.438 L 0.035 0.438 C 0.023 0.438 0.014 0.443 0.012 0.455 L 0 0.502 C -0.004 0.516 0.008 0.531 0.023 0.531 L 0.139 0.531 L 0.172 0.611 C 0.205 0.695 0.285 0.75 0.375 0.75 L 0.623 0.75 C 0.713 0.75 0.793 0.695 0.826 0.611 L 0.859 0.531 L 0.975 0.531 Z M 0.287 0.564 L 0.25 0.469 L 0.75 0.469 L 0.711 0.564 C 0.695 0.602 0.662 0.625 0.623 0.625 L 0.375 0.625 C 0.336 0.625 0.303 0.602 0.287 0.564 Z M 0.188 0.25 C 0.225 0.25 0.281 0.244 0.281 0.281 C 0.281 0.318 0.225 0.375 0.188 0.375 C 0.148 0.375 0.125 0.35 0.125 0.313 C 0.125 0.273 0.148 0.25 0.188 0.25 Z M 0.813 0.25 C 0.85 0.25 0.875 0.273 0.875 0.313 C 0.875 0.35 0.85 0.375 0.813 0.375 C 0.773 0.375 0.719 0.318 0.719 0.281 C 0.719 0.244 0.773 0.25 0.813 0.25 Z" fill="currentColor" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
        position: "relative",
        width: 28,
        borderRadius: 16,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -6,
          top: -6,
          width: 40,
          height: 40,
          borderRadius: "50%",
        }} />
        <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
          position: "absolute",
          left: 4,
          top: 5,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(4.500 15) scale(16 -16)" d="M 0.473 0.375 L 0.668 0.178 C 0.693 0.154 0.693 0.115 0.668 0.092 L 0.625 0.049 C 0.602 0.023 0.563 0.023 0.539 0.049 L 0.344 0.244 L 0.146 0.049 C 0.123 0.023 0.084 0.023 0.061 0.049 L 0.018 0.092 C -0.008 0.115 -0.008 0.154 0.018 0.178 L 0.213 0.375 L 0.018 0.57 C -0.008 0.594 -0.008 0.633 0.018 0.656 L 0.061 0.699 C 0.084 0.725 0.123 0.725 0.146 0.699 L 0.344 0.504 L 0.539 0.699 C 0.563 0.725 0.602 0.725 0.625 0.699 L 0.668 0.656 C 0.693 0.633 0.693 0.594 0.668 0.57 L 0.473 0.375 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.45,
      borderRadius: 4,
      backgroundColor: "rgb(19,81,180)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 19,
        height: 16,
        flexShrink: 0,
      }}>
        <svg width={17.100} height={16} viewBox="0 0 17.100 16" fill="none" style={{
          position: "absolute",
          left: 0.95,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(0.550 14) scale(16 -16)" d="M 0.975 0.531 C 0.99 0.531 1.002 0.516 0.998 0.502 L 0.986 0.455 C 0.984 0.443 0.975 0.438 0.965 0.438 L 0.924 0.438 C 0.951 0.414 0.969 0.381 0.969 0.344 L 0.969 0.25 C 0.969 0.217 0.955 0.189 0.938 0.168 L 0.938 0.063 C 0.938 0.027 0.908 0 0.875 0 L 0.813 0 C 0.777 0 0.75 0.027 0.75 0.063 L 0.75 0.125 L 0.25 0.125 L 0.25 0.063 C 0.25 0.027 0.221 0 0.188 0 L 0.125 0 C 0.09 0 0.063 0.027 0.063 0.063 L 0.063 0.168 C 0.043 0.189 0.031 0.217 0.031 0.25 L 0.031 0.344 C 0.031 0.381 0.047 0.414 0.074 0.438 L 0.035 0.438 C 0.023 0.438 0.014 0.443 0.012 0.455 L 0 0.502 C -0.004 0.516 0.008 0.531 0.023 0.531 L 0.139 0.531 L 0.172 0.611 C 0.205 0.695 0.285 0.75 0.375 0.75 L 0.623 0.75 C 0.713 0.75 0.793 0.695 0.826 0.611 L 0.859 0.531 L 0.975 0.531 Z M 0.287 0.564 L 0.25 0.469 L 0.75 0.469 L 0.711 0.564 C 0.695 0.602 0.662 0.625 0.623 0.625 L 0.375 0.625 C 0.336 0.625 0.303 0.602 0.287 0.564 Z M 0.188 0.25 C 0.225 0.25 0.281 0.244 0.281 0.281 C 0.281 0.318 0.225 0.375 0.188 0.375 C 0.148 0.375 0.125 0.35 0.125 0.313 C 0.125 0.273 0.148 0.25 0.188 0.25 Z M 0.813 0.25 C 0.85 0.25 0.875 0.273 0.875 0.313 C 0.875 0.35 0.85 0.375 0.813 0.375 C 0.773 0.375 0.719 0.318 0.719 0.281 C 0.719 0.244 0.773 0.25 0.813 0.25 Z" fill="currentColor" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
        position: "relative",
        width: 28,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={25.200} height={28} viewBox="0 0 25.200 28" fill="none" style={{
          position: "absolute",
          left: 1.4,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(7.100 20) scale(16 -16)" d="M 0.473 0.375 L 0.668 0.178 C 0.693 0.154 0.693 0.115 0.668 0.092 L 0.625 0.049 C 0.602 0.023 0.563 0.023 0.539 0.049 L 0.344 0.244 L 0.146 0.049 C 0.123 0.023 0.084 0.023 0.061 0.049 L 0.018 0.092 C -0.008 0.115 -0.008 0.154 0.018 0.178 L 0.213 0.375 L 0.018 0.57 C -0.008 0.594 -0.008 0.633 0.018 0.656 L 0.061 0.699 C 0.084 0.725 0.123 0.725 0.146 0.699 L 0.344 0.504 L 0.539 0.699 C 0.563 0.725 0.602 0.725 0.625 0.699 L 0.668 0.656 C 0.693 0.633 0.693 0.594 0.668 0.57 L 0.473 0.375 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(19,81,180)",
      boxShadow: "inset 0 0 0 2px rgb(19,81,180), 0px 3px 6px 0px rgba(19,81,180,0.3)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 19,
        height: 16,
        flexShrink: 0,
      }}>
        <svg width={17.100} height={16} viewBox="0 0 17.100 16" fill="none" style={{
          position: "absolute",
          left: 0.95,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(0.550 14) scale(16 -16)" d="M 0.975 0.531 C 0.99 0.531 1.002 0.516 0.998 0.502 L 0.986 0.455 C 0.984 0.443 0.975 0.438 0.965 0.438 L 0.924 0.438 C 0.951 0.414 0.969 0.381 0.969 0.344 L 0.969 0.25 C 0.969 0.217 0.955 0.189 0.938 0.168 L 0.938 0.063 C 0.938 0.027 0.908 0 0.875 0 L 0.813 0 C 0.777 0 0.75 0.027 0.75 0.063 L 0.75 0.125 L 0.25 0.125 L 0.25 0.063 C 0.25 0.027 0.221 0 0.188 0 L 0.125 0 C 0.09 0 0.063 0.027 0.063 0.063 L 0.063 0.168 C 0.043 0.189 0.031 0.217 0.031 0.25 L 0.031 0.344 C 0.031 0.381 0.047 0.414 0.074 0.438 L 0.035 0.438 C 0.023 0.438 0.014 0.443 0.012 0.455 L 0 0.502 C -0.004 0.516 0.008 0.531 0.023 0.531 L 0.139 0.531 L 0.172 0.611 C 0.205 0.695 0.285 0.75 0.375 0.75 L 0.623 0.75 C 0.713 0.75 0.793 0.695 0.826 0.611 L 0.859 0.531 L 0.975 0.531 Z M 0.287 0.564 L 0.25 0.469 L 0.75 0.469 L 0.711 0.564 C 0.695 0.602 0.662 0.625 0.623 0.625 L 0.375 0.625 C 0.336 0.625 0.303 0.602 0.287 0.564 Z M 0.188 0.25 C 0.225 0.25 0.281 0.244 0.281 0.281 C 0.281 0.318 0.225 0.375 0.188 0.375 C 0.148 0.375 0.125 0.35 0.125 0.313 C 0.125 0.273 0.148 0.25 0.188 0.25 Z M 0.813 0.25 C 0.85 0.25 0.875 0.273 0.875 0.313 C 0.875 0.35 0.85 0.375 0.813 0.375 C 0.773 0.375 0.719 0.318 0.719 0.281 C 0.719 0.244 0.773 0.25 0.813 0.25 Z" fill="currentColor" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
        position: "relative",
        width: 28,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={25.200} height={28} viewBox="0 0 25.200 28" fill="none" style={{
          position: "absolute",
          left: 1.4,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(7.100 20) scale(16 -16)" d="M 0.473 0.375 L 0.668 0.178 C 0.693 0.154 0.693 0.115 0.668 0.092 L 0.625 0.049 C 0.602 0.023 0.563 0.023 0.539 0.049 L 0.344 0.244 L 0.146 0.049 C 0.123 0.023 0.084 0.023 0.061 0.049 L 0.018 0.092 C -0.008 0.115 -0.008 0.154 0.018 0.178 L 0.213 0.375 L 0.018 0.57 C -0.008 0.594 -0.008 0.633 0.018 0.656 L 0.061 0.699 C 0.084 0.725 0.123 0.725 0.146 0.699 L 0.344 0.504 L 0.539 0.699 C 0.563 0.725 0.602 0.725 0.625 0.699 L 0.668 0.656 C 0.693 0.633 0.693 0.594 0.668 0.57 L 0.473 0.375 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      background: "linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), linear-gradient(rgb(19,81,180),rgb(19,81,180))",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 19,
        height: 16,
        flexShrink: 0,
      }}>
        <svg width={17.100} height={16} viewBox="0 0 17.100 16" fill="none" style={{
          position: "absolute",
          left: 0.95,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(0.550 14) scale(16 -16)" d="M 0.975 0.531 C 0.99 0.531 1.002 0.516 0.998 0.502 L 0.986 0.455 C 0.984 0.443 0.975 0.438 0.965 0.438 L 0.924 0.438 C 0.951 0.414 0.969 0.381 0.969 0.344 L 0.969 0.25 C 0.969 0.217 0.955 0.189 0.938 0.168 L 0.938 0.063 C 0.938 0.027 0.908 0 0.875 0 L 0.813 0 C 0.777 0 0.75 0.027 0.75 0.063 L 0.75 0.125 L 0.25 0.125 L 0.25 0.063 C 0.25 0.027 0.221 0 0.188 0 L 0.125 0 C 0.09 0 0.063 0.027 0.063 0.063 L 0.063 0.168 C 0.043 0.189 0.031 0.217 0.031 0.25 L 0.031 0.344 C 0.031 0.381 0.047 0.414 0.074 0.438 L 0.035 0.438 C 0.023 0.438 0.014 0.443 0.012 0.455 L 0 0.502 C -0.004 0.516 0.008 0.531 0.023 0.531 L 0.139 0.531 L 0.172 0.611 C 0.205 0.695 0.285 0.75 0.375 0.75 L 0.623 0.75 C 0.713 0.75 0.793 0.695 0.826 0.611 L 0.859 0.531 L 0.975 0.531 Z M 0.287 0.564 L 0.25 0.469 L 0.75 0.469 L 0.711 0.564 C 0.695 0.602 0.662 0.625 0.623 0.625 L 0.375 0.625 C 0.336 0.625 0.303 0.602 0.287 0.564 Z M 0.188 0.25 C 0.225 0.25 0.281 0.244 0.281 0.281 C 0.281 0.318 0.225 0.375 0.188 0.375 C 0.148 0.375 0.125 0.35 0.125 0.313 C 0.125 0.273 0.148 0.25 0.188 0.25 Z M 0.813 0.25 C 0.85 0.25 0.875 0.273 0.875 0.313 C 0.875 0.35 0.85 0.375 0.813 0.375 C 0.773 0.375 0.719 0.318 0.719 0.281 C 0.719 0.244 0.773 0.25 0.813 0.25 Z" fill="currentColor" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
        position: "relative",
        width: 28,
        borderRadius: 16,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -6,
          top: -6,
          width: 40,
          height: 40,
          borderRadius: "50%",
        }} />
        <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
          position: "absolute",
          left: 4,
          top: 5,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(4.500 15) scale(16 -16)" d="M 0.473 0.375 L 0.668 0.178 C 0.693 0.154 0.693 0.115 0.668 0.092 L 0.625 0.049 C 0.602 0.023 0.563 0.023 0.539 0.049 L 0.344 0.244 L 0.146 0.049 C 0.123 0.023 0.084 0.023 0.061 0.049 L 0.018 0.092 C -0.008 0.115 -0.008 0.154 0.018 0.178 L 0.213 0.375 L 0.018 0.57 C -0.008 0.594 -0.008 0.633 0.018 0.656 L 0.061 0.699 C 0.084 0.725 0.123 0.725 0.146 0.699 L 0.344 0.504 L 0.539 0.699 C 0.563 0.725 0.602 0.725 0.625 0.699 L 0.668 0.656 C 0.693 0.633 0.693 0.594 0.668 0.57 L 0.473 0.375 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 4,
      background: "linear-gradient(rgba(255,255,255,0.65),rgba(255,255,255,0.65)), linear-gradient(rgb(19,81,180),rgb(19,81,180))",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 19,
        height: 16,
        flexShrink: 0,
      }}>
        <svg width={17.100} height={16} viewBox="0 0 17.100 16" fill="none" style={{
          position: "absolute",
          left: 0.95,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(0.550 14) scale(16 -16)" d="M 0.975 0.531 C 0.99 0.531 1.002 0.516 0.998 0.502 L 0.986 0.455 C 0.984 0.443 0.975 0.438 0.965 0.438 L 0.924 0.438 C 0.951 0.414 0.969 0.381 0.969 0.344 L 0.969 0.25 C 0.969 0.217 0.955 0.189 0.938 0.168 L 0.938 0.063 C 0.938 0.027 0.908 0 0.875 0 L 0.813 0 C 0.777 0 0.75 0.027 0.75 0.063 L 0.75 0.125 L 0.25 0.125 L 0.25 0.063 C 0.25 0.027 0.221 0 0.188 0 L 0.125 0 C 0.09 0 0.063 0.027 0.063 0.063 L 0.063 0.168 C 0.043 0.189 0.031 0.217 0.031 0.25 L 0.031 0.344 C 0.031 0.381 0.047 0.414 0.074 0.438 L 0.035 0.438 C 0.023 0.438 0.014 0.443 0.012 0.455 L 0 0.502 C -0.004 0.516 0.008 0.531 0.023 0.531 L 0.139 0.531 L 0.172 0.611 C 0.205 0.695 0.285 0.75 0.375 0.75 L 0.623 0.75 C 0.713 0.75 0.793 0.695 0.826 0.611 L 0.859 0.531 L 0.975 0.531 Z M 0.287 0.564 L 0.25 0.469 L 0.75 0.469 L 0.711 0.564 C 0.695 0.602 0.662 0.625 0.623 0.625 L 0.375 0.625 C 0.336 0.625 0.303 0.602 0.287 0.564 Z M 0.188 0.25 C 0.225 0.25 0.281 0.244 0.281 0.281 C 0.281 0.318 0.225 0.375 0.188 0.375 C 0.148 0.375 0.125 0.35 0.125 0.313 C 0.125 0.273 0.148 0.25 0.188 0.25 Z M 0.813 0.25 C 0.85 0.25 0.875 0.273 0.875 0.313 C 0.875 0.35 0.85 0.375 0.813 0.375 C 0.773 0.375 0.719 0.318 0.719 0.281 C 0.719 0.244 0.773 0.25 0.813 0.25 Z" fill="currentColor" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
        position: "relative",
        width: 28,
        borderRadius: 16,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -6,
          top: -6,
          width: 40,
          height: 40,
          borderRadius: "50%",
        }} />
        <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
          position: "absolute",
          left: 4,
          top: 5,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(4.500 15) scale(16 -16)" d="M 0.473 0.375 L 0.668 0.178 C 0.693 0.154 0.693 0.115 0.668 0.092 L 0.625 0.049 C 0.602 0.023 0.563 0.023 0.539 0.049 L 0.344 0.244 L 0.146 0.049 C 0.123 0.023 0.084 0.023 0.061 0.049 L 0.018 0.092 C -0.008 0.115 -0.008 0.154 0.018 0.178 L 0.213 0.375 L 0.018 0.57 C -0.008 0.594 -0.008 0.633 0.018 0.656 L 0.061 0.699 C 0.084 0.725 0.123 0.725 0.146 0.699 L 0.344 0.504 L 0.539 0.699 C 0.563 0.725 0.602 0.725 0.625 0.699 L 0.668 0.656 C 0.693 0.633 0.693 0.594 0.668 0.57 L 0.473 0.375 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 24,
        borderRadius: "50%",
        backgroundColor: "rgb(22,136,33)",
        boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(51,51,51)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        borderRadius: "50%",
        backgroundColor: "rgb(213,67,9)",
        boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      }} />
      <span style={{
        position: "absolute",
        left: 10,
        top: 4,
        width: 8,
        height: 19,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "9"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: "rgb(215,45,121)",
        boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        width: 16,
        height: 16,
      }}>
        <svg width={14.400} height={16} viewBox="0 0 14.400 16" fill="none" style={{
          position: "absolute",
          left: 0.8,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(-0.800 14) scale(16 -16)" d="M 0.975 0.531 C 0.99 0.531 1.002 0.516 0.998 0.502 L 0.986 0.455 C 0.984 0.443 0.975 0.438 0.965 0.438 L 0.924 0.438 C 0.951 0.414 0.969 0.381 0.969 0.344 L 0.969 0.25 C 0.969 0.217 0.955 0.189 0.938 0.168 L 0.938 0.063 C 0.938 0.027 0.908 0 0.875 0 L 0.813 0 C 0.777 0 0.75 0.027 0.75 0.063 L 0.75 0.125 L 0.25 0.125 L 0.25 0.063 C 0.25 0.027 0.221 0 0.188 0 L 0.125 0 C 0.09 0 0.063 0.027 0.063 0.063 L 0.063 0.168 C 0.043 0.189 0.031 0.217 0.031 0.25 L 0.031 0.344 C 0.031 0.381 0.047 0.414 0.074 0.438 L 0.035 0.438 C 0.023 0.438 0.014 0.443 0.012 0.455 L 0 0.502 C -0.004 0.516 0.008 0.531 0.023 0.531 L 0.139 0.531 L 0.172 0.611 C 0.205 0.695 0.285 0.75 0.375 0.75 L 0.623 0.75 C 0.713 0.75 0.793 0.695 0.826 0.611 L 0.859 0.531 L 0.975 0.531 Z M 0.287 0.564 L 0.25 0.469 L 0.75 0.469 L 0.711 0.564 C 0.695 0.602 0.662 0.625 0.623 0.625 L 0.375 0.625 C 0.336 0.625 0.303 0.602 0.287 0.564 Z M 0.188 0.25 C 0.225 0.25 0.281 0.244 0.281 0.281 C 0.281 0.318 0.225 0.375 0.188 0.375 C 0.148 0.375 0.125 0.35 0.125 0.313 C 0.125 0.273 0.148 0.25 0.188 0.25 Z M 0.813 0.25 C 0.85 0.25 0.875 0.273 0.875 0.313 C 0.875 0.35 0.85 0.375 0.813 0.375 C 0.773 0.375 0.719 0.318 0.719 0.281 C 0.719 0.244 0.773 0.25 0.813 0.25 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(38,112,232)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 19,
        height: 16,
        flexShrink: 0,
      }}>
        <svg width={17.100} height={16} viewBox="0 0 17.100 16" fill="none" style={{
          position: "absolute",
          left: 0.95,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(0.550 14) scale(16 -16)" d="M 0.975 0.531 C 0.99 0.531 1.002 0.516 0.998 0.502 L 0.986 0.455 C 0.984 0.443 0.975 0.438 0.965 0.438 L 0.924 0.438 C 0.951 0.414 0.969 0.381 0.969 0.344 L 0.969 0.25 C 0.969 0.217 0.955 0.189 0.938 0.168 L 0.938 0.063 C 0.938 0.027 0.908 0 0.875 0 L 0.813 0 C 0.777 0 0.75 0.027 0.75 0.063 L 0.75 0.125 L 0.25 0.125 L 0.25 0.063 C 0.25 0.027 0.221 0 0.188 0 L 0.125 0 C 0.09 0 0.063 0.027 0.063 0.063 L 0.063 0.168 C 0.043 0.189 0.031 0.217 0.031 0.25 L 0.031 0.344 C 0.031 0.381 0.047 0.414 0.074 0.438 L 0.035 0.438 C 0.023 0.438 0.014 0.443 0.012 0.455 L 0 0.502 C -0.004 0.516 0.008 0.531 0.023 0.531 L 0.139 0.531 L 0.172 0.611 C 0.205 0.695 0.285 0.75 0.375 0.75 L 0.623 0.75 C 0.713 0.75 0.793 0.695 0.826 0.611 L 0.859 0.531 L 0.975 0.531 Z M 0.287 0.564 L 0.25 0.469 L 0.75 0.469 L 0.711 0.564 C 0.695 0.602 0.662 0.625 0.623 0.625 L 0.375 0.625 C 0.336 0.625 0.303 0.602 0.287 0.564 Z M 0.188 0.25 C 0.225 0.25 0.281 0.244 0.281 0.281 C 0.281 0.318 0.225 0.375 0.188 0.375 C 0.148 0.375 0.125 0.35 0.125 0.313 C 0.125 0.273 0.148 0.25 0.188 0.25 Z M 0.813 0.25 C 0.85 0.25 0.875 0.273 0.875 0.313 C 0.875 0.35 0.85 0.375 0.813 0.375 C 0.773 0.375 0.719 0.318 0.719 0.281 C 0.719 0.244 0.773 0.25 0.813 0.25 Z" fill="currentColor" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
        position: "relative",
        width: 28,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={25.200} height={28} viewBox="0 0 25.200 28" fill="none" style={{
          position: "absolute",
          left: 1.4,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(4.600 20) scale(16 -16)" d="M 0.338 0.016 L 0.014 0.34 C -0.006 0.359 -0.006 0.393 0.014 0.412 L 0.084 0.482 C 0.104 0.502 0.135 0.502 0.154 0.482 L 0.375 0.264 L 0.844 0.732 C 0.863 0.752 0.895 0.752 0.914 0.732 L 0.984 0.662 C 1.004 0.643 1.004 0.609 0.984 0.59 L 0.41 0.016 C 0.391 -0.004 0.357 -0.004 0.338 0.016 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(113,30,108)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 19,
        height: 16,
        flexShrink: 0,
      }}>
        <svg width={17.100} height={16} viewBox="0 0 17.100 16" fill="none" style={{
          position: "absolute",
          left: 0.95,
          top: 0,
          color: "rgb(255,255,255)",
        }}>
          <path transform="translate(0.550 14) scale(16 -16)" d="M 0.975 0.531 C 0.99 0.531 1.002 0.516 0.998 0.502 L 0.986 0.455 C 0.984 0.443 0.975 0.438 0.965 0.438 L 0.924 0.438 C 0.951 0.414 0.969 0.381 0.969 0.344 L 0.969 0.25 C 0.969 0.217 0.955 0.189 0.938 0.168 L 0.938 0.063 C 0.938 0.027 0.908 0 0.875 0 L 0.813 0 C 0.777 0 0.75 0.027 0.75 0.063 L 0.75 0.125 L 0.25 0.125 L 0.25 0.063 C 0.25 0.027 0.221 0 0.188 0 L 0.125 0 C 0.09 0 0.063 0.027 0.063 0.063 L 0.063 0.168 C 0.043 0.189 0.031 0.217 0.031 0.25 L 0.031 0.344 C 0.031 0.381 0.047 0.414 0.074 0.438 L 0.035 0.438 C 0.023 0.438 0.014 0.443 0.012 0.455 L 0 0.502 C -0.004 0.516 0.008 0.531 0.023 0.531 L 0.139 0.531 L 0.172 0.611 C 0.205 0.695 0.285 0.75 0.375 0.75 L 0.623 0.75 C 0.713 0.75 0.793 0.695 0.826 0.611 L 0.859 0.531 L 0.975 0.531 Z M 0.287 0.564 L 0.25 0.469 L 0.75 0.469 L 0.711 0.564 C 0.695 0.602 0.662 0.625 0.623 0.625 L 0.375 0.625 C 0.336 0.625 0.303 0.602 0.287 0.564 Z M 0.188 0.25 C 0.225 0.25 0.281 0.244 0.281 0.281 C 0.281 0.318 0.225 0.375 0.188 0.375 C 0.148 0.375 0.125 0.35 0.125 0.313 C 0.125 0.273 0.148 0.25 0.188 0.25 Z M 0.813 0.25 C 0.85 0.25 0.875 0.273 0.875 0.313 C 0.875 0.35 0.85 0.375 0.813 0.375 C 0.773 0.375 0.719 0.318 0.719 0.281 C 0.719 0.244 0.773 0.25 0.813 0.25 Z" fill="currentColor" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __impls = {
    // figma: type=interactive, state=default
    "type=interactive|state=default": __body0,
    // figma: type=interactive, state=disabled
    "type=interactive|state=disabled": __body1,
    // figma: type=interactive, state=dragged
    "type=interactive|state=dragged": __body2,
    // figma: type=interactive, state=hover
    "type=interactive|state=hover": __body3,
    // figma: type=interactive, state=pressed
    "type=interactive|state=pressed": __body4,
    // figma: type=status, state=default
    "type=status|state=default": __body5,
    // figma: type=score, state=default
    "type=score|state=default": __body6,
    // figma: type=icon, state=default
    "type=icon|state=default": __body7,
    // figma: type=interactive, state=selected
    "type=interactive|state=selected": __body8,
    // figma: type=text, state=default
    "type=text|state=default": __body9,
  };
  return (__impls[__vkey(props)] ?? __body8)();
}
export default Tag;
