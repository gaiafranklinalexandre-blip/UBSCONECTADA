import { MessageFeedback3 } from './MessageFeedback3.jsx';

// figma node: 969:2606 .message (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Message(_p = {}) {
  const props = { ..._p, state: _p.state ?? "warning" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1045,
      height: 71,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1045,
        height: 71,
        backgroundColor: "rgb(212,229,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 1005,
        top: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
      }}>
        <div style={{
          position: "absolute",
          left: -4,
          top: -4,
          width: 40,
          height: 40,
          borderRadius: "50%",
        }} />
        <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
          position: "absolute",
          left: 6,
          top: 7,
          color: "rgb(21,91,203)",
        }}>
          <path transform="translate(4.500 15) scale(16 -16)" d="M 0.473 0.375 L 0.668 0.178 C 0.693 0.154 0.693 0.115 0.668 0.092 L 0.625 0.049 C 0.602 0.023 0.563 0.023 0.539 0.049 L 0.344 0.244 L 0.146 0.049 C 0.123 0.023 0.084 0.023 0.061 0.049 L 0.018 0.092 C -0.008 0.115 -0.008 0.154 0.018 0.178 L 0.213 0.375 L 0.018 0.57 C -0.008 0.594 -0.008 0.633 0.018 0.656 L 0.061 0.699 C 0.084 0.725 0.123 0.725 0.146 0.699 L 0.344 0.504 L 0.539 0.699 C 0.563 0.725 0.602 0.725 0.625 0.699 L 0.668 0.656 C 0.693 0.633 0.693 0.594 0.668 0.57 L 0.473 0.375 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
          position: "absolute",
          left: 16,
          top: 26,
          width: 16,
          height: 18,
        }}>{props.icon2 ?? <MessageFeedback3 type={"mensagem. icon"} state={"info"} />}</div>
      <span style={{
        position: "absolute",
        left: 48,
        top: 24,
        width: 937,
        height: 23,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16.799999237060547,
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        whiteSpace: "pre-wrap",
        display: "inline-block",
      }}><span style={{
  fontWeight: 600,
  fontSize: 16.8,
  textTransform: "none",
  fontVariant: "normal",
}}>{"Informação."}</span>{" Seus dados só serão salvos após o preenchimento do primeiro campo do formulário"}{"."}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1045,
      height: 71,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1045,
        height: 71,
        backgroundColor: "rgb(253,224,219)",
      }} />
      <div style={{
        position: "absolute",
        left: 1005,
        top: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
      }}>
        <div style={{
          position: "absolute",
          left: -4,
          top: -4,
          width: 40,
          height: 40,
          borderRadius: "50%",
        }} />
        <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
          position: "absolute",
          left: 6,
          top: 7,
          color: "rgb(230,0,0)",
        }}>
          <path transform="translate(4.500 15) scale(16 -16)" d="M 0.473 0.375 L 0.668 0.178 C 0.693 0.154 0.693 0.115 0.668 0.092 L 0.625 0.049 C 0.602 0.023 0.563 0.023 0.539 0.049 L 0.344 0.244 L 0.146 0.049 C 0.123 0.023 0.084 0.023 0.061 0.049 L 0.018 0.092 C -0.008 0.115 -0.008 0.154 0.018 0.178 L 0.213 0.375 L 0.018 0.57 C -0.008 0.594 -0.008 0.633 0.018 0.656 L 0.061 0.699 C 0.084 0.725 0.123 0.725 0.146 0.699 L 0.344 0.504 L 0.539 0.699 C 0.563 0.725 0.602 0.725 0.625 0.699 L 0.668 0.656 C 0.693 0.633 0.693 0.594 0.668 0.57 L 0.473 0.375 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
          position: "absolute",
          left: 16,
          top: 26,
          width: 16,
          height: 18,
        }}>{props.icon2 ?? <MessageFeedback3 type={"mensagem. icon"} state={"danger"} />}</div>
      <span style={{
        position: "absolute",
        left: 48,
        top: 24,
        width: 937,
        height: 23,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16.799999237060547,
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        whiteSpace: "pre-wrap",
        display: "inline-block",
      }}><span style={{
  fontWeight: 600,
  fontSize: 16.8,
  textTransform: "none",
  fontVariant: "normal",
}}>{"Erro."}</span>{" Desculpe, nenhum resultado encontrado. Veja se houve algum erro de digitação."}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1045,
      height: 71,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1045,
        height: 71,
        backgroundColor: "rgb(255,245,194)",
      }} />
      <div style={{
        position: "absolute",
        left: 1005,
        top: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
      }}>
        <div style={{
          position: "absolute",
          left: -4,
          top: -4,
          width: 40,
          height: 40,
          borderRadius: "50%",
        }} />
        <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
          position: "absolute",
          left: 6,
          top: 7,
          color: "rgb(51,51,51)",
        }}>
          <path transform="translate(4.500 15) scale(16 -16)" d="M 0.473 0.375 L 0.668 0.178 C 0.693 0.154 0.693 0.115 0.668 0.092 L 0.625 0.049 C 0.602 0.023 0.563 0.023 0.539 0.049 L 0.344 0.244 L 0.146 0.049 C 0.123 0.023 0.084 0.023 0.061 0.049 L 0.018 0.092 C -0.008 0.115 -0.008 0.154 0.018 0.178 L 0.213 0.375 L 0.018 0.57 C -0.008 0.594 -0.008 0.633 0.018 0.656 L 0.061 0.699 C 0.084 0.725 0.123 0.725 0.146 0.699 L 0.344 0.504 L 0.539 0.699 C 0.563 0.725 0.602 0.725 0.625 0.699 L 0.668 0.656 C 0.693 0.633 0.693 0.594 0.668 0.57 L 0.473 0.375 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
          position: "absolute",
          left: 16,
          top: 26,
          width: 19,
          height: 18,
        }}>{props.icon2 ?? <MessageFeedback3 type={"mensagem. icon"} state={"warning"} />}</div>
      <span style={{
        position: "absolute",
        left: 51,
        top: 24,
        width: 937,
        height: 23,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16.799999237060547,
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        whiteSpace: "pre-wrap",
        display: "inline-block",
      }}><span style={{
  fontWeight: 600,
  fontSize: 16.8,
  textTransform: "none",
  fontVariant: "normal",
}}>{"Atenção."}</span>{" Em caso de dúvida, não compartilhe sua senha com terceiros. Ligue para central de atendimento."}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1045,
      height: 71,
      backgroundColor: "rgb(227,245,225)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1045,
        height: 71,
        opacity: 0.15,
      }} />
      <div style={{
        position: "absolute",
        left: 1005,
        top: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
      }}>
        <div style={{
          position: "absolute",
          left: -4,
          top: -4,
          width: 40,
          height: 40,
          borderRadius: "50%",
        }} />
        <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
          position: "absolute",
          left: 6,
          top: 7,
          color: "rgb(22,136,33)",
        }}>
          <path transform="translate(4.500 15) scale(16 -16)" d="M 0.473 0.375 L 0.668 0.178 C 0.693 0.154 0.693 0.115 0.668 0.092 L 0.625 0.049 C 0.602 0.023 0.563 0.023 0.539 0.049 L 0.344 0.244 L 0.146 0.049 C 0.123 0.023 0.084 0.023 0.061 0.049 L 0.018 0.092 C -0.008 0.115 -0.008 0.154 0.018 0.178 L 0.213 0.375 L 0.018 0.57 C -0.008 0.594 -0.008 0.633 0.018 0.656 L 0.061 0.699 C 0.084 0.725 0.123 0.725 0.146 0.699 L 0.344 0.504 L 0.539 0.699 C 0.563 0.725 0.602 0.725 0.625 0.699 L 0.668 0.656 C 0.693 0.633 0.693 0.594 0.668 0.57 L 0.473 0.375 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
          position: "absolute",
          left: 16,
          top: 26,
          width: 16,
          height: 18,
        }}>{props.icon2 ?? <MessageFeedback3 type={"mensagem. icon"} state={"sucess"} />}</div>
      <span style={{
        position: "absolute",
        left: 48,
        top: 24,
        width: 937,
        height: 23,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16.799999237060547,
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        whiteSpace: "pre-wrap",
        display: "inline-block",
      }}><span style={{
  fontWeight: 600,
  fontSize: 16.8,
  textTransform: "none",
  fontVariant: "normal",
}}>{"Sucesso."}</span>{" Seus dados foram alterados conforme preenchimento do formulário."}</span>
    </div>
  );
  const __impls = {
    // figma: state=info
    "state=info": __body0,
    // figma: state=danger
    "state=danger": __body1,
    // figma: state=warning
    "state=warning": __body2,
    // figma: state=sucess
    "state=sucess": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Message;
