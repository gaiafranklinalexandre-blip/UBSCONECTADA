import { Icons8 } from '../extra/Icons8.jsx';

// figma node: 11907:34086 Status (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "situaO=" + __venc(p.situaO);

export function Status2(_p = {}) {
  const props = { ..._p, situaO: _p.situaO ?? "preenchimento" };
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
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(228,23,23)",
        }}>{props.icon1 ?? <Icons8 icon={"error"} />}</div>
    </div>
  );
  const __body1 = () => (
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
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(56,140,31)",
        }}>{props.icon1 ?? <Icons8 icon={"check-alt"} />}</div>
    </div>
  );
  const __body2 = () => (
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
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(255,205,7)",
        }}>{props.icon1 ?? <Icons8 icon={"attention"} />}</div>
    </div>
  );
  const __body3 = () => (
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
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(19,81,180)",
        }}>{props.icon1 ?? <Icons8 icon={"read"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Situação=Indisponível
    "situaO=indisponível": __body0,
    // figma: Situação=Disponível
    "situaO=disponível": __body1,
    // figma: Situação=Preenchimento
    "situaO=preenchimento": __body2,
    // figma: Situação=Enviado
    "situaO=enviado": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Status2;
