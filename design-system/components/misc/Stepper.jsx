import { Steps } from '../extra/Steps.jsx';

// figma node: 1811:11793 Stepper
export function Stepper(_p = {}) {
  const props = { ..._p, showSteps6: _p.showSteps6 ?? true, showSteps7: _p.showSteps7 ?? true, showSteps8: _p.showSteps8 ?? true, showSteps9: _p.showSteps9 ?? true, showSteps5: _p.showSteps5 ?? true, showSteps4: _p.showSteps4 ?? true, showSteps10: _p.showSteps10 ?? true, showSteps3: _p.showSteps3 ?? true };
  return (
    <div className={props.className} style={{
      width: 1526,
      height: 130,
      position: "relative",
      color: "rgb(19,81,180)",
      ...props.style,
    }}>
      <svg width={1381} height={1} viewBox="0 -0.500 1381 1" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,1,1454,41)",
        transformOrigin: "0 0",
        width: 1381,
        height: 1,
      }}>
        <path d={"M 0 0 L 1381 0 L 1381 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 11,
        width: 1526,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <Steps
          style={{
            position: "relative",
            width: 145,
            height: 95,
            flexShrink: 0,
          }}
          status={"next"}
        />
        <div style={{
          position: "relative",
          width: 145,
          height: 95,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Informar quantidade</span>
        </div>
        {props.showSteps3 && (
        <div style={{
          position: "relative",
          width: 145,
          height: 95,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Informar quantidade</span>
        </div>
        )}
        {props.showSteps4 && (
        <div style={{
          position: "relative",
          width: 145,
          height: 95,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Informar quantidade</span>
        </div>
        )}
        {props.showSteps5 && (
        <div style={{
          position: "relative",
          width: 145,
          height: 95,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Informar quantidade</span>
        </div>
        )}
        {props.showSteps6 && (
        <div style={{
          position: "relative",
          width: 145,
          height: 95,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Informar quantidade</span>
        </div>
        )}
        {props.showSteps7 && (
        <div style={{
          position: "relative",
          width: 145,
          height: 95,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Informar quantidade</span>
        </div>
        )}
        {props.showSteps8 && (
        <div style={{
          position: "relative",
          width: 145,
          height: 95,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Informar quantidade</span>
        </div>
        )}
        {props.showSteps9 && (
        <div style={{
          position: "relative",
          width: 145,
          height: 95,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Informar quantidade</span>
        </div>
        )}
        {props.showSteps10 && (
        <div style={{
          position: "relative",
          width: 145,
          height: 95,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Informar quantidade</span>
        </div>
        )}
      </div>
    </div>
  );
}
export default Stepper;
