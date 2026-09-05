import { Button2 } from './Button2.jsx';
import { Divider2 } from './Divider2.jsx';
import { PaginationPage } from './PaginationPage.jsx';

// figma node: 86:295 .pagination (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Pagination(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon1 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 16px 0px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon2 ?? <PaginationPage state={"actived"} />}</div>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon3 ?? <PaginationPage text1={"2"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon4 ?? <PaginationPage text1={"3"} state={"default"} />}</div>
        <PaginationPage
          style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}
          text1={"4"}
          state={"default"}
        />
        <PaginationPage
          style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}
          text1={"5"}
          state={"default"}
        />
        <PaginationPage
          style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}
          text1={"6"}
          state={"default"}
        />
        <div style={{
          position: "relative",
          width: 40,
          borderRadius: 16,
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
            backgroundColor: "rgb(255,255,255)",
          }} />
          <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
            position: "absolute",
            left: 10,
            top: 11,
            color: "rgb(19,81,180)",
          }}>
            <path transform="translate(2 15) scale(16 -16)" d="M 0.641 0.375 C 0.641 0.297 0.576 0.234 0.5 0.234 C 0.422 0.234 0.359 0.297 0.359 0.375 C 0.359 0.451 0.422 0.516 0.5 0.516 C 0.576 0.516 0.641 0.451 0.641 0.375 Z M 0.844 0.516 C 0.92 0.516 0.984 0.451 0.984 0.375 C 0.984 0.297 0.92 0.234 0.844 0.234 C 0.766 0.234 0.703 0.297 0.703 0.375 C 0.703 0.451 0.766 0.516 0.844 0.516 Z M 0.156 0.516 C 0.232 0.516 0.297 0.451 0.297 0.375 C 0.297 0.297 0.232 0.234 0.156 0.234 C 0.078 0.234 0.016 0.297 0.016 0.375 C 0.016 0.451 0.078 0.516 0.156 0.516 Z" fill="currentColor" />
          </svg>
        </div>
        <PaginationPage
          style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}
          text1={"40"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>
        <Button2
          style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }}
          type={"button circle"}
          emphasis={"tertiary"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 520,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 264,
        height: 32,
        display: "flex",
        flexDirection: "row",
        gap: 16,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "Exibir"}</span>
        <div style={{
          position: "relative",
          width: 68,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 68,
            height: 32,
            borderRadius: 4,
            backgroundColor: "rgb(255,255,255)",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 0,
            width: 32,
            height: 32,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 32,
              height: 32,
              borderRadius: "50%",
            }} />
            <svg width={10} height={18} viewBox="0 0 10 18" fill="none" style={{
              position: "absolute",
              left: 11,
              top: 7,
              color: "rgb(19,81,180)",
            }}>
              <path transform="translate(0 15) scale(16 -16)" d="M 0.061 0.5 L 0.563 0.5 C 0.598 0.5 0.615 0.457 0.59 0.432 L 0.34 0.182 C 0.324 0.166 0.299 0.166 0.283 0.182 L 0.033 0.432 C 0.008 0.457 0.025 0.5 0.061 0.5 Z" fill="currentColor" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 7.5,
            top: 3,
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
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(19,81,180)",
              flexShrink: 0,
            }}>10</span>
          </div>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 32,
            height: 1,
            transform: "matrix(0,-1,1,0,136,32)",
            transformOrigin: "0 0",
          }}>{props.icon3 ?? <Divider2 position={"separator horizontal"} state={"fundo-claro"} style2={"linha"} large={"1"} style={{ transform: "scale(0.133, 1)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text2 ?? "1-10 de 100 itens"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 287,
        top: 0,
        width: 233,
        height: 32,
        display: "flex",
        flexDirection: "row",
        gap: 16,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 44,
          height: 19,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 44,
            height: 19,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 44,
              height: 19,
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
            }}>{props.text3 ?? "Página"}</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 68,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 68,
            height: 32,
            borderRadius: 4,
            backgroundColor: "rgb(255,255,255)",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 0,
            width: 32,
            height: 32,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 32,
              height: 32,
              borderRadius: "50%",
            }} />
            <svg width={10} height={18} viewBox="0 0 10 18" fill="none" style={{
              position: "absolute",
              left: 11,
              top: 7,
              color: "rgb(19,81,180)",
            }}>
              <path transform="translate(0 15) scale(16 -16)" d="M 0.061 0.5 L 0.563 0.5 C 0.598 0.5 0.615 0.457 0.59 0.432 L 0.34 0.182 C 0.324 0.166 0.299 0.166 0.283 0.182 L 0.033 0.432 C 0.008 0.457 0.025 0.5 0.061 0.5 Z" fill="currentColor" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 8.5,
            top: 3,
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
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(19,81,180)",
              flexShrink: 0,
            }}>12</span>
          </div>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 32,
            height: 1,
            transform: "matrix(0,-1,1,0,144,32)",
            transformOrigin: "0 0",
          }}>
          <Divider2
            style={{ transform: "scale(0.133, 1)", transformOrigin: "0 0" }}
            position={"separator horizontal"}
            state={"fundo-claro"}
            style2={"linha"}
            large={"1"}
          />
        </div>
        <div style={{
          position: "relative",
          width: 72,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 32,
              height: 32,
            }}>
            <Button2
              style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }}
              type={"button circle"}
              emphasis={"tertiary"}
              state={"default"}
            />
          </div>
          <div style={{
              position: "absolute",
              left: 40,
              top: 0,
              width: 32,
              height: 32,
            }}>
            <Button2
              style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }}
              type={"button circle"}
              emphasis={"tertiary"}
              state={"default"}
            />
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: state=default
    "state=default": __body0,
    // figma: state=contextual
    "state=contextual": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Pagination;
