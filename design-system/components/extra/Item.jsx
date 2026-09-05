import { Button2 } from '../core/Button2.jsx';
import { Divider2 } from '../core/Divider2.jsx';

// figma node: 87:1399 .item (14 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "position=" + __venc(p.position);

export function Item(_p = {}) {
  const props = { ..._p, state: _p.state ?? "hover", position: _p.position ?? "vertical" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(255,255,255)",
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <Divider2
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        position={"separator horizontal"}
        state={"fundo-claro"}
        style2={"linha"}
        large={"1"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Divider2 position={"separator vertical"} state={"fundo-claro"} style2={"linha"} large={"1"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      opacity: 0.85,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px 0px rgba(19,81,180,0.16)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        boxShadow: "inset 0 0 0 2px rgb(19,81,180)",
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <Divider2
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        position={"separator horizontal"}
        state={"fundo-claro"}
        style2={"linha"}
        large={"1"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      opacity: 0.85,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px 0px rgba(19,81,180,0.16)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        boxShadow: "inset 0 0 0 2px rgb(19,81,180)",
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Divider2 position={"separator vertical"} state={"fundo-claro"} style2={"linha"} large={"1"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(12,50,111)",
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
          color: "rgb(255,255,255)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <Divider2
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        position={"separator horizontal"}
        state={"fundo-escuro"}
        style2={"linha"}
        large={"1"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(12,50,111)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
          color: "rgb(255,255,255)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Divider2 position={"separator vertical"} state={"fundo-escuro"} style2={"linha"} large={"1"} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(38,112,232)",
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
          color: "rgb(255,255,255)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <Divider2
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        position={"separator horizontal"}
        state={"fundo-escuro"}
        style2={"linha"}
        large={"1"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(38,112,232)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
          color: "rgb(255,255,255)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Divider2 position={"separator vertical"} state={"fundo-escuro"} style2={"linha"} large={"1"} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      opacity: 0.45,
      backgroundColor: "rgb(255,255,255)",
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <Divider2
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        position={"separator horizontal"}
        state={"fundo-claro"}
        style2={"linha"}
        large={"1"}
      />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      opacity: 0.45,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Divider2 position={"separator vertical"} state={"fundo-claro"} style2={"linha"} large={"1"} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgba(51,51,51,0.45)",
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <Divider2
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        position={"separator horizontal"}
        state={"fundo-claro"}
        style2={"linha"}
        large={"1"}
      />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgba(51,51,51,0.45)",
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
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
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Divider2 position={"separator vertical"} state={"fundo-claro"} style2={"linha"} large={"1"} />}</div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgba(51,51,51,0.16)",
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
        <div style={{
          position: "relative",
          width: 44.888,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 44.888,
            height: 32,
            opacity: 0,
            backgroundColor: "rgb(255,255,255)",
          }} />
        </div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <Divider2
        style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        position={"separator horizontal"}
        state={"fundo-claro"}
        style2={"linha"}
        large={"1"}
      />
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 57,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgba(51,51,51,0.16)",
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Sub-item"}</span>
        <div style={{
          position: "relative",
          width: 44.888,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 44.888,
            height: 32,
            opacity: 0,
            backgroundColor: "rgb(255,255,255)",
          }} />
        </div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} />}</div>
      </div>
      <div style={{
          position: "relative",
          width: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Divider2 position={"separator vertical"} state={"fundo-claro"} style2={"linha"} large={"1"} />}</div>
    </div>
  );
  const __impls = {
    // figma: state=default, position=vertical
    "state=default|position=vertical": __body0,
    // figma: state=default, position=horizontal
    "state=default|position=horizontal": __body1,
    // figma: state=dragged, position=vertical
    "state=dragged|position=vertical": __body2,
    // figma: state=dragged, position=horizontal
    "state=dragged|position=horizontal": __body3,
    // figma: state=activated, position=vertical
    "state=activated|position=vertical": __body4,
    // figma: state=activated, position=horizontal
    "state=activated|position=horizontal": __body5,
    // figma: state=selected, position=vertical
    "state=selected|position=vertical": __body6,
    // figma: state=selected, position=horizontal
    "state=selected|position=horizontal": __body7,
    // figma: state=disabled, position=vertical
    "state=disabled|position=vertical": __body8,
    // figma: state=disabled, position=horizontal
    "state=disabled|position=horizontal": __body9,
    // figma: state=pressed, position=vertical
    "state=pressed|position=vertical": __body10,
    // figma: state=pressed, position=horizontal
    "state=pressed|position=horizontal": __body11,
    // figma: state=hover, position=vertical
    "state=hover|position=vertical": __body12,
    // figma: state=hover, position=horizontal
    "state=hover|position=horizontal": __body13,
  };
  return (__impls[__vkey(props)] ?? __body12)();
}
export default Item;
