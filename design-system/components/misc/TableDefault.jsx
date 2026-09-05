import { Button2 } from '../core/Button2.jsx';
import { ControlCheckbox } from '../core/ControlCheckbox.jsx';
import { Divider2 } from '../core/Divider2.jsx';

// figma node: 86:412 .table/Default
export function TableDefault(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1004,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1004,
          height: 64,
          backgroundColor: "rgb(255,255,255)",
        }} />
        <span style={{
          position: "absolute",
          left: 18,
          top: 19,
          width: 882,
          height: 27,
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16.799999237060547,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
        }}>{props.text1 ?? "Título da Tabela"}</span>
        <div style={{
            position: "absolute",
            left: 916,
            top: 16,
            width: 32,
            height: 32,
          }}>{props.icon1 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
        <div style={{
            position: "absolute",
            left: 956,
            top: 16,
            width: 32,
            height: 32,
          }}>{props.icon2 ?? <Button2 type={"button circle"} emphasis={"tertiary"} state={"default"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 56,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 56,
              height: 56,
            }}>{props.icon3 ?? <ControlCheckbox state={"default"} style={{ transform: "scale(2.333, 2.333)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
          position: "relative",
          height: 56,
          backgroundColor: "rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "16px 12px 16px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 4px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(19,81,180)",
              flexShrink: 0,
            }}>Column</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 90,
          height: 56,
          backgroundColor: "rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "16px 12px 16px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 4px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(19,81,180)",
              flexShrink: 0,
            }}>Column</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 90,
          backgroundColor: "rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "16px 12px 16px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 4px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(19,81,180)",
              flexShrink: 0,
            }}>Column</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 56,
          background: "linear-gradient(rgba(19,81,180,0.16),rgba(19,81,180,0.16)), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "16px 12px 16px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            height: 19,
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 4px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(19,81,180)",
              flexShrink: 0,
            }}>Column</span>
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
        <div style={{
          position: "relative",
          width: 160,
          height: 56,
          backgroundColor: "rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "16px 12px 16px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 4px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(19,81,180)",
              flexShrink: 0,
            }}>Column</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
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
          height: 64,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 56,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                flexGrow: 1,
                alignSelf: "stretch",
                width: "auto",
                height: "auto",
              }}>{props.icon4 ?? <ControlCheckbox state={"default"} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "Lorem ipsum Delorium Spert"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 90,
            display: "flex",
            flexDirection: "row",
            padding: "22px 12px 22px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexGrow: 1,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text3 ?? "0%"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 90,
            display: "flex",
            flexDirection: "row",
            padding: "22px 12px 22px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexGrow: 1,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text4 ?? "0"}</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Lorem ipsum</span>
          </div>
          <div style={{
            position: "relative",
            width: 160,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 12px 0px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
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
      <div style={{
        position: "relative",
        overflow: "hidden",
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
          height: 64,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 56,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ControlCheckbox
              style={{
                position: "relative",
                flexGrow: 1,
                alignSelf: "stretch",
                width: "auto",
                height: "auto",
              }}
              state={"default"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Lorem ipsum Delorium Spert</span>
          </div>
          <div style={{
            position: "relative",
            width: 90,
            display: "flex",
            flexDirection: "row",
            padding: "22px 12px 22px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>0%</span>
          </div>
          <div style={{
            position: "relative",
            width: 90,
            display: "flex",
            flexDirection: "row",
            padding: "22px 12px 22px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>0</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Lorem ipsum</span>
          </div>
          <div style={{
            position: "relative",
            width: 160,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 12px 0px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
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
      <div style={{
        position: "relative",
        overflow: "hidden",
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
          height: 64,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 56,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ControlCheckbox
              style={{
                position: "relative",
                flexGrow: 1,
                alignSelf: "stretch",
                width: "auto",
                height: "auto",
              }}
              state={"default"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Lorem ipsum Delorium Spert</span>
          </div>
          <div style={{
            position: "relative",
            width: 90,
            display: "flex",
            flexDirection: "row",
            padding: "22px 12px 22px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>0%</span>
          </div>
          <div style={{
            position: "relative",
            width: 90,
            display: "flex",
            flexDirection: "row",
            padding: "22px 12px 22px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>0</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0px 12px 0px 12px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Lorem ipsum</span>
          </div>
          <div style={{
            position: "relative",
            width: 160,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 12px 0px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
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
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "16px 16px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 29,
          flexShrink: 0,
          alignSelf: "stretch",
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
            }}>Exibir</span>
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
              }}>
              <Divider2
                style={{ transform: "scale(0.133, 1)", transformOrigin: "0 0" }}
                position={"separator horizontal"}
                state={"fundo-claro"}
                style2={"linha"}
                large={"1"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
            }}>1-10 de 100 itens</span>
          </div>
          <div style={{
            position: "absolute",
            left: 739,
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
                }}>Página</span>
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
      </div>
    </div>
  );
}
export default TableDefault;
