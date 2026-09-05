import { Message } from './Message.jsx';
import { MessageFeedback3 } from './MessageFeedback3.jsx';

// figma node: 1188:12087 warning (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "ine=" + __venc(p.ine);

export function Warning(_p = {}) {
  const props = { ..._p, ine: _p.ine ?? "insuficiente" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1270,
      height: 71,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1270,
          height: 71,
        }}>
        <Message
          style={{ transform: "scale(1.215, 1)", transformOrigin: "0 0" }}
          state={"warning"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1270,
      height: 71,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1270,
          height: 71,
        }}>
        <Message
          style={{ transform: "scale(1.215, 1)", transformOrigin: "0 0" }}
          state={"info"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1526,
      height: 71,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1526,
        height: 71,
        backgroundColor: "rgb(253,224,219)",
      }} />
      <div style={{
          position: "absolute",
          left: 16,
          top: 26,
          width: 16,
          height: 18,
        }}>{props.icon1 ?? <MessageFeedback3 type={"mensagem. icon"} state={"danger"} />}</div>
      <span style={{
        position: "absolute",
        left: 48,
        top: 26,
        width: 1447,
        height: 20,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        lineHeight: "20px",
        color: "rgb(85,85,85)",
        whiteSpace: "pre-wrap",
        display: "inline-block",
      }}>{"Atenção: "}<span style={{ fontWeight: 500 }}>{"o município não possui número suficiente de INES cadastrados no CSNES para abrir uma solicitação. "}</span><span style={{ textDecoration: "underline" }}>{"Clique aqui"}</span><span style={{ fontWeight: 500 }}>{" para ver o passo-a-passo de como cadastrar um novo INE."}</span></span>
    </div>
  );
  const __impls = {
    // figma: ine=obrigatório
    "ine=obrigatório": __body0,
    // figma: ine=opcional
    "ine=opcional": __body1,
    // figma: ine=insuficiente
    "ine=insuficiente": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Warning;
