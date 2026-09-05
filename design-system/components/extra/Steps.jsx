import { StepIndicator } from '../core/StepIndicator.jsx';

// figma node: 1811:11632 Steps (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status);

export function Steps(_p = {}) {
  const props = { ..._p, status: _p.status ?? "active", nMero: _p.nMero ?? "1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 145,
      height: 95,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 40,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "rgb(12,50,111)",
            boxShadow: "inset 0 0 0 2px rgb(12,50,111)",
          }} />
          <span style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 36,
            height: 35,
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 24.190000534057617,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(255,255,255)",
          }}>1</span>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Informar quantidade"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 145,
      height: 95,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "rgb(250,250,250)",
            boxShadow: "inset 0 0 0 1px rgb(144,171,216)",
          }} />
          <span style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 36,
            height: 35,
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 24.190000534057617,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(144,171,216)",
          }}>1</span>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgba(85,85,85,0.6)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Informar quantidade"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 145,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 53px 0px 53px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 49,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <StepIndicator type={"number"} state={"complete"} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(19,81,180)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Informar quantidade"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 145,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 53px 0px 53px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            height: 49,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <StepIndicator type={"number"} state={"error"} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(19,81,180)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Informar quantidade"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 145,
      height: 95,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 145,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 53px 0px 53px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "relative",
            height: 49,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <StepIndicator type={"number"} state={"alert"} />}</div>
      </div>
      <span style={{
        position: "absolute",
        left: 0,
        top: 49,
        width: 145,
        height: 46,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16.799999237060547,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(19,81,180)",
      }}>{props.text1 ?? "Informar quantidade"}</span>
    </div>
  );
  const __impls = {
    // figma: Status=active
    "status=active": __body0,
    // figma: Status=next
    "status=next": __body1,
    // figma: Status=complete
    "status=complete": __body2,
    // figma: Status=error
    "status=error": __body3,
    // figma: Status=warning
    "status=warning": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Steps;
