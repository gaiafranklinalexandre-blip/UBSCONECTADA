import { IconGlyphSet } from './IconGlyphSet.jsx';

// figma node: 2808:10877 Top Nav
export function TopNav(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1521,
      height: 56,
      backgroundColor: "rgb(247,249,252)",
      borderTop: "1px solid rgb(38,112,232)",
      borderRight: "1px solid rgb(38,112,232)",
      borderBottom: "1px solid rgb(38,112,232)",
      borderLeft: "1px solid rgb(38,112,232)",
      position: "relative",
      color: "rgb(233,237,245)",
      ...props.style,
    }}>
      <svg width={1521} height={1} viewBox="0 -0.500 1521 1" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 56,
        width: 1521,
        height: 1,
      }}>
        <path d={"M 0 0.5 L 1521 0.5 L 1521 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 20,
        top: 13,
        height: 28,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(51,51,51)",
          flexShrink: 0,
        }}>{props.text1 ?? "Dados Sócio Demográficos:"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 224,
        top: 13,
        width: 102,
        height: 28,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.030em",
          color: "rgb(51,51,51)",
          flexShrink: 0,
        }}>{props.text2 ?? "UF"}</span>
        <div style={{
          position: "relative",
          borderRadius: 13,
          backgroundColor: "rgb(237,237,252)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 6px 2px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "0.030em",
            color: "rgb(0,110,194)",
            flexShrink: 0,
          }}>{props.text3 ?? "xx"}</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 338,
        top: 13,
        width: 181,
        height: 28,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.030em",
          color: "rgb(51,51,51)",
          flexShrink: 0,
        }}>{props.text4 ?? "População IBGE"}</span>
        <div style={{
          position: "relative",
          borderRadius: 13,
          backgroundColor: "rgb(237,237,252)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 6px 2px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "0.030em",
            color: "rgb(0,110,194)",
            flexShrink: 0,
          }}>xxxxx</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 531,
        top: 13,
        width: 212,
        height: 28,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.030em",
          color: "rgb(51,51,51)",
          flexShrink: 0,
        }}>Município</span>
        <div style={{
          position: "relative",
          borderRadius: 13,
          backgroundColor: "rgb(237,237,252)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 6px 2px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "0.030em",
            color: "rgb(0,110,194)",
            flexShrink: 0,
          }}>xxxxxxxxxxxxxx</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1045,
        top: 13,
        width: 246,
        height: 28,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.030em",
          color: "rgb(51,51,51)",
          flexShrink: 0,
        }}>Região de Saúde</span>
        <div style={{
          position: "relative",
          borderRadius: 13,
          backgroundColor: "rgb(237,237,252)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 6px 2px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "0.030em",
            color: "rgb(0,110,194)",
            flexShrink: 0,
          }}>xxxxxxxxxxxxxx</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 755,
        top: 13,
        width: 278,
        height: 28,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconGlyphSet icon={"info"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "0.030em",
          color: "rgb(51,51,51)",
          flexShrink: 0,
        }}>IVS do Município</span>
        <div style={{
          position: "relative",
          borderRadius: 13,
          backgroundColor: "rgb(237,237,252)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 6px 2px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Raleway, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "0.030em",
            color: "rgb(0,110,194)",
            flexShrink: 0,
          }}>xxxxxxxxxxxxxx</span>
        </div>
      </div>
    </div>
  );
}
export default TopNav;
