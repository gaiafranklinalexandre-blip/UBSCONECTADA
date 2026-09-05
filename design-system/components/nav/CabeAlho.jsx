import { Divider } from '../core/Divider.jsx';
import { Divider3 } from './Divider3.jsx';
import { FontType2 } from './FontType2.jsx';
import { Icons } from './Icons.jsx';

// figma node: 1039:7233 Cabeçalho
export function CabeAlho(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1526,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "40px 0px 16px 0px",
      justifyContent: "flex-end",
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
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 367,
          height: 42,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 1,
              transform: "matrix(0,1,-1,0,119,2)",
              transformOrigin: "0 0",
            }}>{props.icon1 ?? <Divider position={"separator horizontal"} state={"fundo-claro"} style2={"linha"} large={"1"} style={{ transform: "scale(0.167, 1)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "absolute",
            left: 127,
            top: 2,
            width: 240,
            height: 37,
            fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
          }}>{props.text1 ?? "MInistério da Saúde"}</span>
          <div className="fig-asset-b73ec788bab8da06" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 111,
            height: 40,
          }} />
        </div>
        <div style={{
          position: "relative",
          width: 694,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 591,
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 415,
              height: 16,
              flexShrink: 0,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 90.655,
                height: 16,
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 11.670000076293945,
                lineHeight: "100%",
                color: "rgb(19,81,180)",
              }}>{props.text2 ?? "Link de acesso 1"}</span>
              <span style={{
                position: "absolute",
                left: 215.558,
                top: 0,
                width: 92.67,
                height: 16,
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 11.670000076293945,
                lineHeight: "100%",
                color: "rgb(19,81,180)",
              }}>{props.text3 ?? "Link de acesso 3"}</span>
              <span style={{
                position: "absolute",
                left: 106.772,
                top: 0,
                width: 92.67,
                height: 16,
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 11.670000076293945,
                lineHeight: "100%",
                color: "rgb(19,81,180)",
              }}>{props.text4 ?? "Link de acesso 2"}</span>
              <span style={{
                position: "absolute",
                left: 322.33,
                top: 0,
                width: 92.67,
                height: 16,
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 11.670000076293945,
                lineHeight: "100%",
                color: "rgb(19,81,180)",
              }}>Link de acesso 4</span>
            </div>
            <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 32,
                height: 0,
                transform: "matrix(0,1,-1,0,429,0)",
                transformOrigin: "0 0",
              }}>
              <Divider3
                style={{ transform: "scale(0.133, 0)", transformOrigin: "0 0" }}
                position={"separator horizontal"}
                state={"fundo-claro"}
                style2={"linha"}
                large={"1"}
              />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 28,
                  height: 28,
                  flexShrink: 0,
                  color: "var(--textos-link)",
                }}>{props.icon2 ?? <Icons icon={"chart"} />}</div>
              <div style={{
                  position: "relative",
                  width: 28,
                  height: 28,
                  flexShrink: 0,
                  color: "var(--textos-link)",
                }}>{props.icon3 ?? <Icons icon={"call-center"} />}</div>
              <div style={{
                  position: "relative",
                  width: 28,
                  height: 28,
                  flexShrink: 0,
                  color: "var(--textos-link)",
                }}>{props.icon4 ?? <Icons icon={"speak"} />}</div>
              <Icons
                style={{
                  position: "relative",
                  width: 28,
                  height: 28,
                  flexShrink: 0,
                  color: "var(--textos-link)",
                }}
                icon={"mode"}
              />
            </div>
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 32,
              height: 0,
              transform: "matrix(0,1,-1,0,599,0)",
              transformOrigin: "0 0",
            }}>
            <Divider3
              style={{ transform: "scale(0.133, 0)", transformOrigin: "0 0" }}
              position={"separator horizontal"}
              state={"fundo-claro"}
              style2={"linha"}
              large={"1"}
            />
          </div>
          <div style={{
            position: "relative",
            width: 87,
            height: 32,
            borderRadius: 42,
            backgroundColor: "rgb(252,252,252)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "6px 16px 7px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <Icons
              style={{
                position: "relative",
                width: 28,
                height: 28,
                flexShrink: 0,
                color: "var(--textos-link)",
              }}
              icon={"user"}
            />
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(19,81,180)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Entrar</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 808,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
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
            <Icons
              style={{
                position: "relative",
                width: 28,
                height: 28,
                flexShrink: 0,
                color: "var(--textos-link)",
              }}
              icon={"menu"}
            />
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 30.190000534057617,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
            }}>Gerencia APS -AC -  Acredlândia</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 48px 0px 48px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(85,85,85)",
              flexShrink: 0,
            }}>Credenciamento</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 385,
          height: 56,
          borderRadius: 8,
          backgroundColor: "rgb(248,248,248)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 16px 8px 24px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <FontType2
            style={{
              position: "relative",
              height: 23,
              flexGrow: 1,
              width: "auto",
            }}
            text1={"O que você procura?"}
            fontType={"placeholder"}
          />
          <Icons
            style={{
              position: "relative",
              width: 28,
              height: 28.003,
              flexShrink: 0,
              color: "var(--textos-link)",
            }}
            icon={"search"}
          />
        </div>
      </div>
    </div>
  );
}
export default CabeAlho;
