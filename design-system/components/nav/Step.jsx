import { FontType2 } from './FontType2.jsx';
import { StepIndicator } from '../core/StepIndicator.jsx';

// figma node: 357:1625 .step (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Step(_p = {}) {
  const props = { ..._p, type: _p.type ?? "complex" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 740,
      height: 102,
      position: "relative",
      color: "rgb(19,81,180)",
      ...props.style,
    }}>
      <svg width={599} height={1} viewBox="0 -0.500 599 1" fill="none" style={{
        position: "absolute",
        left: 71,
        top: 20,
        width: 599,
        height: 1,
      }}>
        <path d={"M 0 0 L 599 0 L 599 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 103,
        height: 104,
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", left: 31.5, top: 0 }}>{props.icon1 ?? <StepIndicator type={"number"} state={"default"} />}</div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 54,
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
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
          }}>Exemplos de Rótulo</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 216.517,
        top: 0,
        width: 103,
        height: 104,
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", left: 31.5, top: 0 }}>{props.icon2 ?? <StepIndicator text1={"2"} type={"number"} state={"default"} />}</div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 54,
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
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
          }}>Exemplos de Rótulo</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 420.483,
        top: 0,
        width: 103,
        height: 104,
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", left: 31.5, top: 0 }}>{props.icon3 ?? <StepIndicator text1={"3"} type={"number"} state={"default"} />}</div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 54,
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
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
          }}>Exemplos de Rótulo</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 637,
        top: 0,
        width: 103,
        height: 104,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 31.5,
          top: 0,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(19,81,180)",
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
              color: "rgb(19,81,180)",
            }}>4</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 54,
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
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
          }}>Exemplos de Rótulo</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 72,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 1,
          width: 8,
          height: 8,
        }}>{props.icon1 ?? <StepIndicator type={"simple"} state={"default"} />}</div>
      <div style={{
          position: "absolute",
          left: 16,
          top: 1,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <StepIndicator type={"simple"} state={"actived"} />}</div>
      <div style={{
          position: "absolute",
          left: 32,
          top: 1,
          width: 8,
          height: 8,
        }}>{props.icon3 ?? <StepIndicator type={"simple"} state={"default"} />}</div>
      <div style={{
          position: "absolute",
          left: 48,
          top: 1,
          width: 8,
          height: 8,
        }}>{props.icon4 ?? <StepIndicator type={"simple"} state={"default"} />}</div>
      <StepIndicator
        style={{
          position: "absolute",
          left: 64,
          top: 1,
          width: 8,
          height: 8,
        }}
        type={"simple"}
        state={"default"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 22,
      height: 35,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 27,
        }}>{props.icon1 ?? <FontType2 text1={"1/5"} fontType={"paragraph"} />}</div>
    </div>
  );
  const __impls = {
    // figma: type=complex
    "type=complex": __body0,
    // figma: type=simple
    "type=simple": __body1,
    // figma: type=textual
    "type=textual": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Step;
