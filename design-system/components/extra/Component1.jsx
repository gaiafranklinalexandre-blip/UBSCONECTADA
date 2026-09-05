import { BotO } from './BotO.jsx';
import { Component18 } from './Component18.jsx';
import { Divider2 } from '../core/Divider2.jsx';

// figma node: 155:954 Component 1 (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "card=" + __venc(p.card) + '|' + "saldo=" + __venc(p.saldo);

export function Component1(_p = {}) {
  const props = { ..._p, card: _p.card ?? "collapsed", saldo: _p.saldo ?? "disponivel", programa: _p.programa ?? "Nome da estratégia a solicitar" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 420,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "0px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 14,
          backgroundColor: "var(--disp)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>{props.programa}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 63,
              backgroundColor: "rgba(36,124,39,0.15)",
              boxShadow: "inset 0 0 0 1px rgb(36,124,39)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "6px 10px 6px 10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(36,124,39)",
                flexShrink: 0,
              }}>{props.text1 ?? "Disponível"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <Component18 icon={"arrow-up"} />}</div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "Teto"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>{props.text3 ?? "0"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text4 ?? "Qtde. Credenciada"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>0</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>Qtde. Solicitada</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>0</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>Saldo</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>1</span>
        </div>
      </div>
      <BotO
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        botOTexto={"Iniciar solicitação"}
        icon={false}
        type={"solid"}
        status={"active"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 420,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "0px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 14,
          backgroundColor: "var(--preench)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "12px 12px 12px 12px",
          justifyContent: "space-between",
          alignItems: "center",
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
            lineHeight: "20px",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>{props.programa}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 63,
              backgroundColor: "rgba(255,205,7,0.15)",
              boxShadow: "inset 0 0 0 1px rgb(161,109,53)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "6px 10px 6px 10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(161,109,53)",
                flexShrink: 0,
              }}>{props.text1 ?? "Em preenchimento"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <Component18 icon={"arrow-up"} />}</div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "Teto"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>{props.text3 ?? "0"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text4 ?? "Qtde. Credenciada"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>0</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>Qtde. Solicitada</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>0</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>Saldo</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>1</span>
        </div>
      </div>
      <BotO
        style={{
          position: "relative",
          height: 50,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        botOTexto={"Continuar solicitação"}
        icon={false}
        type={"solid"}
        status={"active"}
      />
      <BotO
        style={{
          position: "relative",
          height: 50,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        botOTexto={"Excluir solicitação"}
        type={"simple"}
        status={"active"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 420,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "0px 0px 6px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 14,
          backgroundColor: "var(--indisp)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>{props.programa}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 63,
              backgroundColor: "rgba(255,0,0,0.15)",
              boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "6px 10px 6px 10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(255,0,0)",
                flexShrink: 0,
              }}>{props.text1 ?? "Sem saldo"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <Component18 icon={"arrow-up"} />}</div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "Teto"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>{props.text3 ?? "0"}</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text4 ?? "Qtde. Credenciada"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>0</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>Qtde. Solicitada</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>0</span>
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
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>Saldo</span>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(51,51,51)",
            flexShrink: 0,
          }}>1</span>
        </div>
      </div>
      <BotO
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        botOTexto={"Saldo indisponível"}
        icon={false}
        type={"solid"}
        status={"disabled"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 420,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 14,
          backgroundColor: "var(--disp)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>{props.programa}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 63,
              backgroundColor: "rgba(36,124,39,0.15)",
              boxShadow: "inset 0 0 0 1px rgb(36,124,39)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "6px 10px 6px 10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(36,124,39)",
                flexShrink: 0,
              }}>{props.text1 ?? "Disponível"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <Component18 icon={"arrow-down"} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 420,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 14,
          backgroundColor: "var(--preench)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>{props.programa}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 63,
              backgroundColor: "rgba(255,205,7,0.15)",
              boxShadow: "inset 0 0 0 1px rgb(161,109,53)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "6px 10px 6px 10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(161,109,53)",
                flexShrink: 0,
              }}>{props.text1 ?? "Em preenchimento"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <Component18 icon={"arrow-down"} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 420,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 14,
          backgroundColor: "var(--indisp)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 12px 12px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(51,51,51)",
            flexGrow: 1,
          }}>{props.programa}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 63,
              backgroundColor: "rgba(255,0,0,0.15)",
              boxShadow: "inset 0 0 0 1px rgb(255,0,0)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "6px 10px 6px 10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "rgb(255,0,0)",
                flexShrink: 0,
              }}>{props.text1 ?? "Sem saldo"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <Component18 icon={"arrow-down"} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: card=full, Saldo=Disponivel
    "card=full|saldo=disponivel": __body0,
    // figma: card=full, Saldo=preench
    "card=full|saldo=preench": __body1,
    // figma: card=full, Saldo=indisp
    "card=full|saldo=indisp": __body2,
    // figma: card=collapsed, Saldo=Disponivel
    "card=collapsed|saldo=disponivel": __body3,
    // figma: card=collapsed, Saldo=preench
    "card=collapsed|saldo=preench": __body4,
    // figma: card=collapsed, Saldo=indisp
    "card=collapsed|saldo=indisp": __body5,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Component1;
