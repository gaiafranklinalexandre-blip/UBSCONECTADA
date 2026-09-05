// figma node: 87:2670 .message-feedback (7 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function MessageFeedback(_p = {}) {
  const props = { ..._p, type: _p.type ?? "mensagem", state: _p.state ?? "danger" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 18,
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} height={18} viewBox="0 0 16 18" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        color: "rgb(21,91,203)",
      }}>
        <path transform="translate(0 15) scale(16 -16)" d="M 0.5 0.859 C 0.232 0.859 0.016 0.641 0.016 0.375 C 0.016 0.107 0.232 -0.109 0.5 -0.109 C 0.766 -0.109 0.984 0.107 0.984 0.375 C 0.984 0.641 0.766 0.859 0.5 0.859 Z M 0.5 0.645 C 0.545 0.645 0.582 0.607 0.582 0.563 C 0.582 0.516 0.545 0.48 0.5 0.48 C 0.453 0.48 0.418 0.516 0.418 0.563 C 0.418 0.607 0.453 0.645 0.5 0.645 Z M 0.609 0.148 C 0.609 0.135 0.598 0.125 0.586 0.125 L 0.414 0.125 C 0.4 0.125 0.391 0.135 0.391 0.148 L 0.391 0.195 C 0.391 0.207 0.4 0.219 0.414 0.219 L 0.438 0.219 L 0.438 0.344 L 0.414 0.344 C 0.4 0.344 0.391 0.354 0.391 0.367 L 0.391 0.414 C 0.391 0.426 0.4 0.438 0.414 0.438 L 0.539 0.438 C 0.551 0.438 0.563 0.426 0.563 0.414 L 0.563 0.219 L 0.586 0.219 C 0.598 0.219 0.609 0.207 0.609 0.195 L 0.609 0.148 Z" fill="currentColor" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 19,
      height: 18,
      position: "relative",
      ...props.style,
    }}>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 0,
        color: "rgb(51,51,51)",
      }}>
        <path transform="translate(0 15) scale(16 -16)" d="M 1.111 0.014 L 0.643 0.828 C 0.607 0.889 0.516 0.891 0.48 0.828 L 0.012 0.014 C -0.023 -0.047 0.021 -0.125 0.094 -0.125 L 1.029 -0.125 C 1.102 -0.125 1.146 -0.049 1.111 0.014 Z M 0.563 0.184 C 0.611 0.184 0.652 0.143 0.652 0.094 C 0.652 0.043 0.611 0.004 0.563 0.004 C 0.512 0.004 0.473 0.043 0.473 0.094 C 0.473 0.143 0.512 0.184 0.563 0.184 Z M 0.477 0.506 C 0.475 0.52 0.486 0.531 0.5 0.531 L 0.623 0.531 C 0.637 0.531 0.648 0.52 0.646 0.506 L 0.633 0.24 C 0.631 0.227 0.621 0.219 0.609 0.219 L 0.514 0.219 C 0.502 0.219 0.492 0.227 0.49 0.24 L 0.477 0.506 Z" fill="currentColor" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 18,
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} height={18} viewBox="0 0 16 18" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        color: "rgb(22,136,33)",
      }}>
        <path transform="translate(0 15) scale(16 -16)" d="M 0.984 0.375 C 0.984 0.641 0.766 0.859 0.5 0.859 C 0.232 0.859 0.016 0.641 0.016 0.375 C 0.016 0.107 0.232 -0.109 0.5 -0.109 C 0.766 -0.109 0.984 0.107 0.984 0.375 Z M 0.443 0.117 C 0.432 0.105 0.41 0.105 0.398 0.117 L 0.195 0.32 C 0.184 0.332 0.184 0.354 0.195 0.365 L 0.24 0.408 C 0.252 0.422 0.271 0.422 0.283 0.408 L 0.422 0.271 L 0.715 0.564 C 0.727 0.578 0.746 0.578 0.758 0.564 L 0.803 0.521 C 0.814 0.51 0.814 0.488 0.803 0.477 L 0.443 0.117 Z" fill="currentColor" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 18,
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} height={18} viewBox="0 0 16 18" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        color: "rgb(229,34,7)",
      }}>
        <path transform="translate(0 15) scale(16 -16)" d="M 0.5 0.859 C 0.232 0.859 0.016 0.643 0.016 0.375 C 0.016 0.107 0.232 -0.109 0.5 -0.109 C 0.768 -0.109 0.984 0.107 0.984 0.375 C 0.984 0.643 0.768 0.859 0.5 0.859 Z M 0.736 0.246 C 0.746 0.238 0.746 0.223 0.736 0.213 L 0.66 0.137 C 0.65 0.127 0.635 0.127 0.627 0.137 L 0.5 0.266 L 0.371 0.137 C 0.363 0.127 0.348 0.127 0.338 0.137 L 0.262 0.215 C 0.252 0.223 0.252 0.238 0.262 0.248 L 0.391 0.375 L 0.262 0.502 C 0.252 0.51 0.252 0.525 0.262 0.535 L 0.34 0.611 C 0.348 0.621 0.363 0.621 0.373 0.611 L 0.5 0.484 L 0.627 0.611 C 0.635 0.621 0.65 0.621 0.66 0.611 L 0.736 0.535 C 0.746 0.525 0.746 0.51 0.736 0.502 L 0.609 0.375 L 0.736 0.246 Z" fill="currentColor" />
      </svg>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 23,
      backgroundColor: "rgb(21,91,203)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 19,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 20,
          top: 0,
          width: 139,
          height: 19,
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(252,252,252)",
        }}>{props.text1 ?? "Campo informacional"}</span>
        <svg width={16.294} height={18} viewBox="0 0 16.294 18" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 1,
          color: "rgb(252,252,252)",
        }}>
          <path transform="translate(0 15) scale(16 -16)" d="M 0.5 0.859 C 0.232 0.859 0.016 0.641 0.016 0.375 C 0.016 0.107 0.232 -0.109 0.5 -0.109 C 0.766 -0.109 0.984 0.107 0.984 0.375 C 0.984 0.641 0.766 0.859 0.5 0.859 Z M 0.5 0.645 C 0.545 0.645 0.582 0.607 0.582 0.563 C 0.582 0.516 0.545 0.48 0.5 0.48 C 0.453 0.48 0.418 0.516 0.418 0.563 C 0.418 0.607 0.453 0.645 0.5 0.645 Z M 0.609 0.148 C 0.609 0.135 0.598 0.125 0.586 0.125 L 0.414 0.125 C 0.4 0.125 0.391 0.135 0.391 0.148 L 0.391 0.195 C 0.391 0.207 0.4 0.219 0.414 0.219 L 0.438 0.219 L 0.438 0.344 L 0.414 0.344 C 0.4 0.344 0.391 0.354 0.391 0.367 L 0.391 0.414 C 0.391 0.426 0.4 0.438 0.414 0.438 L 0.539 0.438 C 0.551 0.438 0.563 0.426 0.563 0.414 L 0.563 0.219 L 0.586 0.219 C 0.598 0.219 0.609 0.207 0.609 0.195 L 0.609 0.148 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 23,
      backgroundColor: "rgb(255,205,7)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 22,
          top: 0,
          width: 132,
          height: 19,
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(51,51,51)",
        }}>{props.text1 ?? "Campo desabilitado"}</span>
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 1,
          color: "rgb(51,51,51)",
        }}>
          <path transform="translate(0 15) scale(16 -16)" d="M 1.111 0.014 L 0.643 0.828 C 0.607 0.889 0.516 0.891 0.48 0.828 L 0.012 0.014 C -0.023 -0.047 0.021 -0.125 0.094 -0.125 L 1.029 -0.125 C 1.102 -0.125 1.146 -0.049 1.111 0.014 Z M 0.563 0.184 C 0.611 0.184 0.652 0.143 0.652 0.094 C 0.652 0.043 0.611 0.004 0.563 0.004 C 0.512 0.004 0.473 0.043 0.473 0.094 C 0.473 0.143 0.512 0.184 0.563 0.184 Z M 0.477 0.506 C 0.475 0.52 0.486 0.531 0.5 0.531 L 0.623 0.531 C 0.637 0.531 0.648 0.52 0.646 0.506 L 0.633 0.24 C 0.631 0.227 0.621 0.219 0.609 0.219 L 0.514 0.219 C 0.502 0.219 0.492 0.227 0.49 0.24 L 0.477 0.506 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 24,
      backgroundColor: "rgb(22,136,33)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 20,
          top: 0,
          width: 96,
          height: 19,
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(252,252,252)",
        }}>{props.text1 ?? "Campo correto"}</span>
        <svg width={16} height={18} viewBox="0 0 16 18" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 2,
          color: "rgb(252,252,252)",
        }}>
          <path transform="translate(0 15) scale(16 -16)" d="M 0.984 0.375 C 0.984 0.641 0.766 0.859 0.5 0.859 C 0.232 0.859 0.016 0.641 0.016 0.375 C 0.016 0.107 0.232 -0.109 0.5 -0.109 C 0.766 -0.109 0.984 0.107 0.984 0.375 Z M 0.443 0.117 C 0.432 0.105 0.41 0.105 0.398 0.117 L 0.195 0.32 C 0.184 0.332 0.184 0.354 0.195 0.365 L 0.24 0.408 C 0.252 0.422 0.271 0.422 0.283 0.408 L 0.422 0.271 L 0.715 0.564 C 0.727 0.578 0.746 0.578 0.758 0.564 L 0.803 0.521 C 0.814 0.51 0.814 0.488 0.803 0.477 L 0.443 0.117 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=mensagem. icon, state=info
    "type=mensagem. icon|state=info": __body0,
    // figma: type=mensagem. icon, state=warning
    "type=mensagem. icon|state=warning": __body1,
    // figma: type=mensagem. icon, state=sucess
    "type=mensagem. icon|state=sucess": __body2,
    // figma: type=mensagem. icon, state=danger
    "type=mensagem. icon|state=danger": __body3,
    // figma: type=mensagem, state=info
    "type=mensagem|state=info": __body4,
    // figma: type=mensagem, state=warning
    "type=mensagem|state=warning": __body5,
    // figma: type=mensagem, state=sucess
    "type=mensagem|state=sucess": __body6,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MessageFeedback;
