// figma node: 4932:11984 .loading (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Loading(_p = {}) {
  const props = { ..._p, type: _p.type ?? "inderteminate-small" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 134,
      height: 31.569,
      position: "relative",
      color: "rgb(19,81,180)",
      ...props.style,
    }}>
      <svg width={23.301} height={23} viewBox="0 0 23.301 23" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.866,-0.500,0.500,0.866,0,11.650)",
        transformOrigin: "0 0",
        width: 23.301,
        height: 23,
      }}>
        <path d={"M 13.154 1.166 L 13.154 1.919 C 13.154 2.436 13.483 2.86 13.952 3.001 C 17.617 4.036 20.294 7.377 20.294 11.33 C 20.294 16.13 16.395 19.988 11.651 19.988 C 6.859 19.988 3.007 16.13 3.007 11.33 C 3.007 9.843 3.379 8.442 4.039 7.219 C 4.309 6.717 4.797 6.119 5.405 5.579 C 5.976 5.072 6.502 4.584 6.201 3.908 L 5.788 3.382 C 4.81 2.405 4.243 2.378 3.57 2.969 C 2.39 4.006 1.709 5.227 1.51 5.579 C 0.533 7.303 -0.018 9.299 0 11.424 C 0 17.871 5.215 23.047 11.651 23 C 18.086 23 23.301 17.776 23.301 11.33 C 23.301 5.918 19.543 1.354 14.516 0.036 C 13.811 -0.152 13.154 0.413 13.154 1.166 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 48,
        top: 7.65,
        width: 86,
        height: 19,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "Carregando..."}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 86,
      height: 101,
      position: "relative",
      color: "rgb(19,81,180)",
      ...props.style,
    }}>
      <svg width={48.627} height={48} viewBox="0 0 48.627 48" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.866,-0.500,0.500,0.866,10,24.314)",
        transformOrigin: "0 0",
        width: 48.627,
        height: 48,
      }}>
        <path d={"M 27.451 2.433 L 27.451 4.004 C 27.451 5.085 28.138 5.968 29.118 6.263 C 36.765 8.423 42.353 15.396 42.353 23.645 C 42.353 33.662 34.216 41.714 24.314 41.714 C 14.314 41.714 6.275 33.662 6.275 23.645 C 6.275 20.542 7.052 17.619 8.429 15.065 C 8.993 14.018 10.012 12.769 11.28 11.644 C 12.472 10.586 13.57 9.566 12.941 8.157 L 12.078 7.059 C 10.039 5.02 8.855 4.962 7.451 6.196 C 4.989 8.36 3.567 10.908 3.151 11.644 C 1.113 15.241 -0.037 19.407 0.001 23.841 C 0.001 37.295 10.883 48.098 24.314 47.999 C 37.745 47.999 48.627 37.099 48.627 23.645 C 48.627 12.352 40.784 2.826 30.294 0.076 C 28.824 -0.317 27.451 0.862 27.451 2.433 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 0,
        top: 81,
        width: 86,
        height: 19,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "Carregando..."}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 120,
      height: 132,
      position: "relative",
      color: "rgb(19,81,180)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 12,
        top: 0,
        width: 84,
        height: 84,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 5px rgb(204,204,204)",
      }} />
      <svg width={84} height={84} viewBox="0 0 84 84" fill="none" style={{
        position: "absolute",
        left: 12,
        top: 0,
        width: 84,
        height: 84,
      }}>
        <path d={"M 84 42 C 83 14 61.5 0 42 0 C 40.5 2 40.5 3 42 5 C 45.5 4.5 78 9 78.5 42 C 78.5 62.297 62.294 78.671 42 79 C 25 79 6 66.5 5 42 C 3 40.5 2 40.5 0 42 C 0 69.5 23 84 42 84 C 64 84 83.5 66.5 84 42 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 27,
        top: 27,
        width: 55,
        height: 30,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20.15999984741211,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(19,81,180)",
      }}>{props.text1 ?? "75%"}</span>
      <div style={{
        position: "absolute",
        left: -6,
        top: 100,
        height: 39,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 24px 8px 24px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16.799999237060547,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(19,81,180)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Cancelar</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=inderteminate-small
    "type=inderteminate-small": __body0,
    // figma: type=inderteminate
    "type=inderteminate": __body1,
    // figma: type=default
    "type=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Loading;
