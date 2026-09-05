import { Button2 } from '../core/Button2.jsx';

// figma node: 87:1862 .list/vertical
export function ListVertical(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 579,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 56,
        boxShadow: "0px 1px 0px 0px rgb(204,204,204)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 579,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 16.04,
          top: 20,
          width: 33.083,
          height: 16,
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 33.083,
            height: 16,
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 11.670000076293945,
            lineHeight: "100%",
            color: "rgb(0,0,0)",
          }}>{props.text1 ?? "Titulo"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 57,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11.670000076293945,
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>RÓTULO 02</span>
          <div style={{
            position: "relative",
            width: 50,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 32,
              opacity: 0,
              backgroundColor: "rgb(255,255,255)",
            }} />
          </div>
          <Button2
            style={{
              position: "relative",
              width: 40,
              height: 40,
              flexShrink: 0,
            }}
            type={"button circle"}
            emphasis={"tertiary"}
            state={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 579,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 57,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 32,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={28.800} height={32} viewBox="0 0 28.800 32" fill="none" style={{
              position: "absolute",
              left: 1.6,
              top: 0,
              color: "rgb(51,51,51)",
            }}>
              <path transform="translate(6.400 22) scale(16 -16)" d="M 0.625 0.398 L 0.668 0.313 L 0.881 0.313 L 0.523 -0.053 C 0.51 -0.066 0.488 -0.066 0.475 -0.053 L 0.117 0.313 L 0.301 0.313 L 0.359 0.451 L 0.471 0.205 C 0.482 0.182 0.516 0.18 0.527 0.203 L 0.625 0.398 Z M 0.924 0.73 C 1.02 0.633 1.023 0.479 0.939 0.375 L 0.707 0.375 L 0.652 0.482 C 0.641 0.506 0.607 0.506 0.596 0.482 L 0.5 0.291 L 0.387 0.543 C 0.375 0.568 0.34 0.568 0.33 0.543 L 0.26 0.375 L 0.061 0.375 C -0.025 0.479 -0.021 0.633 0.074 0.73 L 0.078 0.734 C 0.18 0.838 0.344 0.838 0.445 0.734 L 0.5 0.68 L 0.553 0.734 C 0.654 0.838 0.818 0.838 0.92 0.734 L 0.924 0.73 Z" fill="currentColor" />
            </svg>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>ITEM</span>
          <div style={{
            position: "relative",
            width: 50,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 32,
              opacity: 0,
              backgroundColor: "rgb(255,255,255)",
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 579,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 32,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={28.800} height={32} viewBox="0 0 28.800 32" fill="none" style={{
              position: "absolute",
              left: 1.6,
              top: 0,
              color: "rgb(51,51,51)",
            }}>
              <path transform="translate(6.400 22) scale(16 -16)" d="M 0.625 0.398 L 0.668 0.313 L 0.881 0.313 L 0.523 -0.053 C 0.51 -0.066 0.488 -0.066 0.475 -0.053 L 0.117 0.313 L 0.301 0.313 L 0.359 0.451 L 0.471 0.205 C 0.482 0.182 0.516 0.18 0.527 0.203 L 0.625 0.398 Z M 0.924 0.73 C 1.02 0.633 1.023 0.479 0.939 0.375 L 0.707 0.375 L 0.652 0.482 C 0.641 0.506 0.607 0.506 0.596 0.482 L 0.5 0.291 L 0.387 0.543 C 0.375 0.568 0.34 0.568 0.33 0.543 L 0.26 0.375 L 0.061 0.375 C -0.025 0.479 -0.021 0.633 0.074 0.73 L 0.078 0.734 C 0.18 0.838 0.344 0.838 0.445 0.734 L 0.5 0.68 L 0.553 0.734 C 0.654 0.838 0.818 0.838 0.92 0.734 L 0.924 0.73 Z" fill="currentColor" />
            </svg>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>ITEM</span>
          <div style={{
            position: "relative",
            width: 50,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 32,
              opacity: 0,
              backgroundColor: "rgb(255,255,255)",
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 400,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 32,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={28.800} height={32} viewBox="0 0 28.800 32" fill="none" style={{
              position: "absolute",
              left: 1.6,
              top: 0,
              color: "rgb(51,51,51)",
            }}>
              <path transform="translate(6.400 22) scale(16 -16)" d="M 0.625 0.398 L 0.668 0.313 L 0.881 0.313 L 0.523 -0.053 C 0.51 -0.066 0.488 -0.066 0.475 -0.053 L 0.117 0.313 L 0.301 0.313 L 0.359 0.451 L 0.471 0.205 C 0.482 0.182 0.516 0.18 0.527 0.203 L 0.625 0.398 Z M 0.924 0.73 C 1.02 0.633 1.023 0.479 0.939 0.375 L 0.707 0.375 L 0.652 0.482 C 0.641 0.506 0.607 0.506 0.596 0.482 L 0.5 0.291 L 0.387 0.543 C 0.375 0.568 0.34 0.568 0.33 0.543 L 0.26 0.375 L 0.061 0.375 C -0.025 0.479 -0.021 0.633 0.074 0.73 L 0.078 0.734 C 0.18 0.838 0.344 0.838 0.445 0.734 L 0.5 0.68 L 0.553 0.734 C 0.654 0.838 0.818 0.838 0.92 0.734 L 0.924 0.73 Z" fill="currentColor" />
            </svg>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>ITEM</span>
          <div style={{
            position: "relative",
            width: 50,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 50,
              height: 32,
              opacity: 0,
              backgroundColor: "rgb(255,255,255)",
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 400,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
    </div>
  );
}
export default ListVertical;
