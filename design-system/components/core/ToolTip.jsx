// figma node: 260:2196 tool-tip (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "cor=" + __venc(p.cor) + '|' + "arrow=" + __venc(p.arrow);

export function ToolTip(_p = {}) {
  const props = { ..._p, cor: _p.cor ?? "amarelo", arrow: _p.arrow ?? "up", showInfo: _p.showInfo ?? true, tTulo: _p.tTulo ?? "Título", info: _p.info ?? "Informação" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--blueaccent)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--blueaccent)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
            position: "relative",
            transform: "matrix(-1,0,0,-1,0,0)",
            width: 13.856,
            height: 6,
            flexShrink: 0,
          }}>
            <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--disp)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--disp)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
            position: "relative",
            transform: "matrix(-1,0,0,-1,0,0)",
            width: 13.856,
            height: 6,
            flexShrink: 0,
          }}>
            <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--indisp)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--indisp)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
            position: "relative",
            transform: "matrix(-1,0,0,-1,0,0)",
            width: 13.856,
            height: 6,
            flexShrink: 0,
          }}>
            <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--preench)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--preench)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
            position: "relative",
            transform: "matrix(-1,0,0,-1,0,0)",
            width: 13.856,
            height: 6,
            flexShrink: 0,
          }}>
            <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--blueaccent)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,-1,1,0,0,36.928)",
          transformOrigin: "0 0",
          width: 13.856,
          height: 6,
        }}>
          <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--blueaccent)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--disp)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,-1,1,0,0,36.928)",
          transformOrigin: "0 0",
          width: 13.856,
          height: 6,
        }}>
          <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--disp)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--indisp)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,-1,1,0,0,36.928)",
          transformOrigin: "0 0",
          width: 13.856,
          height: 6,
        }}>
          <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--indisp)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--preench)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,-1,1,0,0,36.928)",
          transformOrigin: "0 0",
          width: 13.856,
          height: 6,
        }}>
          <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--preench)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--blueaccent)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--blueaccent)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,6,23.072)",
          transformOrigin: "0 0",
          width: 13.856,
          height: 6,
        }}>
          <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--disp)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--disp)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,6,23.072)",
          transformOrigin: "0 0",
          width: 13.856,
          height: 6,
        }}>
          <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--indisp)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--indisp)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,6,23.072)",
          transformOrigin: "0 0",
          width: 13.856,
          height: 6,
        }}>
          <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--preench)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--preench)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,6,23.072)",
          transformOrigin: "0 0",
          width: 13.856,
          height: 6,
        }}>
          <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--blueaccent)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
            position: "relative",
            width: 13.856,
            height: 6,
            flexShrink: 0,
          }}>
            <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--blueaccent)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--disp)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
            position: "relative",
            width: 13.856,
            height: 6,
            flexShrink: 0,
          }}>
            <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--disp)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--indisp)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
            position: "relative",
            width: 13.856,
            height: 6,
            flexShrink: 0,
          }}>
            <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--indisp)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "9px 9px 6px 0px rgba(0,0,0,0.16)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--preench)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.856} height={6} viewBox="0 0 13.856 6" fill="none" style={{
            position: "relative",
            width: 13.856,
            height: 6,
            flexShrink: 0,
          }}>
            <path d={"M 6.928 0 L 13.856 6 L 0 6 L 6.928 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "var(--preench)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "12px 12px 12px 12px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.tTulo}</span>
          {props.showInfo && (
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "12px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.info}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 12px 0px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Cor=Azul, Arrow=Down
    "cor=azul|arrow=down": __body0,
    // figma: Cor=Verde, Arrow=Down
    "cor=verde|arrow=down": __body1,
    // figma: Cor=Vermelho, Arrow=Down
    "cor=vermelho|arrow=down": __body2,
    // figma: Cor=Amarelo, Arrow=Down
    "cor=amarelo|arrow=down": __body3,
    // figma: Cor=Azul, Arrow=Left
    "cor=azul|arrow=left": __body4,
    // figma: Cor=Verde, Arrow=Left
    "cor=verde|arrow=left": __body5,
    // figma: Cor=Vermelho, Arrow=Left
    "cor=vermelho|arrow=left": __body6,
    // figma: Cor=Amarelo, Arrow=Left
    "cor=amarelo|arrow=left": __body7,
    // figma: Cor=Azul, Arrow=Right
    "cor=azul|arrow=right": __body8,
    // figma: Cor=Verde, Arrow=Right
    "cor=verde|arrow=right": __body9,
    // figma: Cor=Vermelho, Arrow=Right
    "cor=vermelho|arrow=right": __body10,
    // figma: Cor=Amarelo, Arrow=Right
    "cor=amarelo|arrow=right": __body11,
    // figma: Cor=Azul, Arrow=Up
    "cor=azul|arrow=up": __body12,
    // figma: Cor=Verde, Arrow=Up
    "cor=verde|arrow=up": __body13,
    // figma: Cor=Vermelho, Arrow=Up
    "cor=vermelho|arrow=up": __body14,
    // figma: Cor=Amarelo, Arrow=Up
    "cor=amarelo|arrow=up": __body15,
  };
  return (__impls[__vkey(props)] ?? __body15)();
}
export default ToolTip;
