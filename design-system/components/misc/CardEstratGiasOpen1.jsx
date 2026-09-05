import { IconGlyphSetAlt } from '../nav/IconGlyphSetAlt.jsx';
import { Status2 } from './Status2.jsx';

// figma node: 11907:34095 Card-Estratégias/Open/1
export function CardEstratGiasOpen1(_p = {}) {
  const props = { ..._p, show1: _p.show1 ?? true };
  return (
    <div className={props.className} style={{
      width: 483.333,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.25)",
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
        borderTop: "1px solid rgba(204,204,204,0.8)",
        borderRight: "1px solid rgba(204,204,204,0.8)",
        borderBottom: "1px solid rgba(204,204,204,0.8)",
        borderLeft: "1px solid rgba(204,204,204,0.8)",
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
          backgroundColor: "rgb(19,81,180)",
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
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Estratégia"}</span>
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
                width: 24,
                height: 24,
                flexShrink: 0,
                color: "rgb(19,81,180)",
              }}>{props.icon1 ?? <IconGlyphSetAlt icon={"arrow-up"} />}</div>
          </div>
        </div>
      </div>
      {props.show1 && (
      <div style={{
        position: "relative",
        height: 40,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(204,204,204)",
        borderRight: "1px solid rgb(204,204,204)",
        borderBottom: "1px solid rgb(204,204,204)",
        borderLeft: "1px solid rgb(204,204,204)",
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
          flexDirection: "row",
          gap: 8,
          padding: "12px 16px 12px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Status2 situaO={"disponível"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "14px",
              color: "rgb(51,51,51)",
              flexGrow: 1,
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "Credenciamento"}</span>
          </div>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 20,
              height: 20,
              transform: "matrix(0,1,-1,0,467.333,14)",
              transformOrigin: "0 0",
              color: "var(--labels-vibrant-controls-primary)",
            }}>{props.icon3 ?? <IconGlyphSetAlt icon={"arrow-up"} />}</div>
        </div>
      </div>
      )}
    </div>
  );
}
export default CardEstratGiasOpen1;
