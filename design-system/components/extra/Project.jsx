import { Tag2 } from './Tag2.jsx';
import { TextoDasLinhas } from './TextoDasLinhas.jsx';

// figma node: 2808:10950 Project (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Project(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1368,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(233,237,245)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 111,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "0.020em",
              color: "rgb(70,79,96)",
              flexShrink: 0,
            }}>Nome do indicador</span>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>
              <svg width={14.000} height={14} viewBox="0 0 14.000 14" fill="none" style={{
                position: "absolute",
                left: 1,
                top: 1,
                width: 14,
                height: 14,
                color: "rgb(134,143,160)",
              }}>
                <path d={"M 7 0.75 C 7 0.336 7.336 0 7.75 0 L 13.25 0 C 13.664 0 14 0.336 14 0.75 L 14 6.253 C 14 6.667 13.664 7.003 13.25 7.003 C 12.836 7.003 12.5 6.667 12.5 6.253 L 12.5 2.561 L 7.53 7.53 C 7.237 7.823 6.763 7.823 6.47 7.53 C 6.177 7.237 6.177 6.763 6.47 6.47 L 11.439 1.5 L 7.75 1.5 C 7.336 1.5 7 1.164 7 0.75 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 5.25 1.5 C 5.664 1.5 6 1.836 6 2.25 C 6 2.664 5.664 3 5.25 3 L 2 3 C 1.724 3 1.5 3.224 1.5 3.5 L 1.5 12 C 1.5 12.276 1.724 12.5 2 12.5 L 10.5 12.5 C 10.776 12.5 11 12.276 11 12 L 11 8.75 C 11 8.336 11.336 8 11.75 8 C 12.164 8 12.5 8.336 12.5 8.75 L 12.5 12 C 12.5 13.105 11.605 14 10.5 14 L 2 14 C 0.895 14 0 13.105 0 12 L 0 3.5 C 0 2.395 0.895 1.5 2 1.5 L 5.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <svg height={1} viewBox="0 -0.500 918 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0.5 L 918 0.5 L 918 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{ position: "relative", width: 60, flexShrink: 0 }}>{props.icon1 ?? <Tag2 color={"green"} />}</div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
          width: 1,
        }}>Vector 110</div>
      </div>
      <div style={{
        position: "relative",
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgba(3,168,114,0.05)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "1px 8px 1px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: 10,
                backgroundColor: "rgb(56,160,108)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.030em",
                color: "rgb(20,128,74)",
                flexShrink: 0,
              }}>Valor</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
          width: 1,
        }}>Vector 110</div>
      </div>
      <div style={{
        position: "relative",
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgba(3,168,114,0.05)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "1px 8px 1px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: 10,
                backgroundColor: "rgb(56,160,108)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.030em",
                color: "rgb(20,128,74)",
                flexShrink: 0,
              }}>Valor</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
          width: 1,
        }}>Vector 110</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1368,
      backgroundColor: "rgb(247,249,252)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(233,237,245)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 92,
            height: 40,
            borderRadius: 6,
            flexShrink: 0,
          }}>
            <span style={{
              position: "absolute",
              left: 10,
              top: 10,
              width: 132,
              height: 20,
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "0.020em",
              color: "rgb(70,79,96)",
            }}>{props.text1 ?? "Nome do indicador"}</span>
          </div>
        </div>
        <svg height={1} viewBox="0 -0.500 918 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0.5 L 918 0.5 L 918 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgba(3,168,114,0.05)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "1px 8px 1px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: 10,
                backgroundColor: "rgb(56,160,108)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.030em",
                color: "rgb(20,128,74)",
                flexShrink: 0,
              }}>Valor</span>
            </div>
          </div>
        </div>
        <svg height={1} viewBox="0 -0.500 150 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0.5 L 150 0.5 L 150 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgba(3,168,114,0.05)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "1px 8px 1px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: 10,
                backgroundColor: "rgb(56,160,108)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.030em",
                color: "rgb(20,128,74)",
                flexShrink: 0,
              }}>Valor</span>
            </div>
          </div>
        </div>
        <svg height={1} viewBox="0 -0.500 150 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0.5 L 150 0.5 L 150 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgba(3,168,114,0.05)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "1px 8px 1px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: 10,
                backgroundColor: "rgb(56,160,108)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.030em",
                color: "rgb(20,128,74)",
                flexShrink: 0,
              }}>Valor</span>
            </div>
          </div>
        </div>
        <svg height={1} viewBox="0 -0.500 150 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0.5 L 150 0.5 L 150 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1368,
      backgroundColor: "rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(233,237,245)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <TextoDasLinhas
            style={{ position: "relative", width: 314, flexShrink: 0 }}
            text1={"Nome do indicador"}
            state={"default"}
          />
        </div>
        <svg height={1} viewBox="0 -0.500 918 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0.5 L 918 0.5 L 918 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgba(3,168,114,0.05)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "1px 8px 1px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: 10,
                backgroundColor: "rgb(56,160,108)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.030em",
                color: "rgb(20,128,74)",
                flexShrink: 0,
              }}>Valor</span>
            </div>
          </div>
        </div>
        <svg height={1} viewBox="0 -0.500 150 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0.5 L 150 0.5 L 150 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgba(3,168,114,0.05)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "1px 8px 1px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: 10,
                backgroundColor: "rgb(56,160,108)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.030em",
                color: "rgb(20,128,74)",
                flexShrink: 0,
              }}>Valor</span>
            </div>
          </div>
        </div>
        <svg height={1} viewBox="0 -0.500 150 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0.5 L 150 0.5 L 150 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "12px 10px 12px 10px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgba(3,168,114,0.05)",
              display: "flex",
              flexDirection: "row",
              gap: 6,
              padding: "1px 8px 1px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: 10,
                backgroundColor: "rgb(56,160,108)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                letterSpacing: "0.030em",
                color: "rgb(20,128,74)",
                flexShrink: 0,
              }}>Valor</span>
            </div>
          </div>
        </div>
        <svg height={1} viewBox="0 -0.500 150 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0.5 L 150 0.5 L 150 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Hovered
    "state=hovered": __body1,
    // figma: State=Selected
    "state=selected": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Project;
