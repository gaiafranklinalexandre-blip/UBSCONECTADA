// figma node: 78:1079 .ui-image (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property=" + __venc(p.property) + '|' + "variant=" + __venc(p.variant);

export function UiImage(_p = {}) {
  const props = { ..._p, property: _p.property ?? "black", variant: _p.variant ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <svg width={25} height={20} viewBox="0 0 25 20" fill="none" style={{
        position: "absolute",
        left: 12,
        top: 14,
        color: "rgb(255,255,255)",
      }}>
        <path transform="translate(2.500 17.500) scale(20 -20)" d="M 0.906 0 C 0.957 0 1 0.041 1 0.094 L 1 0.656 C 1 0.707 0.957 0.75 0.906 0.75 L 0.094 0.75 C 0.041 0.75 0 0.707 0 0.656 L 0 0.094 C 0 0.041 0.041 0 0.094 0 L 0.906 0 Z M 0.219 0.641 C 0.277 0.641 0.328 0.59 0.328 0.531 C 0.328 0.471 0.277 0.422 0.219 0.422 C 0.158 0.422 0.109 0.471 0.109 0.531 C 0.109 0.59 0.158 0.641 0.219 0.641 Z M 0.125 0.125 L 0.125 0.219 L 0.264 0.357 C 0.273 0.367 0.287 0.367 0.297 0.357 L 0.406 0.25 L 0.67 0.514 C 0.68 0.523 0.693 0.523 0.703 0.514 L 0.875 0.344 L 0.875 0.125 L 0.125 0.125 Z" fill="currentColor" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        borderRadius: "50%",
        outline: "1px dashed rgb(255,255,255)",
        outlineOffset: "-1px",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 89,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 89,
        height: 48,
        outline: "1px dashed rgb(255,255,255)",
        outlineOffset: "-1px",
      }} />
      <svg width={25} height={20} viewBox="0 0 25 20" fill="none" style={{
        position: "absolute",
        left: 8,
        top: 14,
        color: "rgb(255,255,255)",
      }}>
        <path transform="translate(2.500 17.500) scale(20 -20)" d="M 0.906 0 C 0.957 0 1 0.041 1 0.094 L 1 0.656 C 1 0.707 0.957 0.75 0.906 0.75 L 0.094 0.75 C 0.041 0.75 0 0.707 0 0.656 L 0 0.094 C 0 0.041 0.041 0 0.094 0 L 0.906 0 Z M 0.219 0.641 C 0.277 0.641 0.328 0.59 0.328 0.531 C 0.328 0.471 0.277 0.422 0.219 0.422 C 0.158 0.422 0.109 0.471 0.109 0.531 C 0.109 0.59 0.158 0.641 0.219 0.641 Z M 0.125 0.125 L 0.125 0.219 L 0.264 0.357 C 0.273 0.367 0.287 0.367 0.297 0.357 L 0.406 0.25 L 0.67 0.514 C 0.68 0.523 0.693 0.523 0.703 0.514 L 0.875 0.344 L 0.875 0.125 L 0.125 0.125 Z" fill="currentColor" />
      </svg>
      <span style={{
        position: "absolute",
        left: 38,
        top: 10,
        width: 44,
        height: 28,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20.15999984741211,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? ".Img"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 127,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 127,
        height: 48,
        outline: "1px dashed rgb(255,255,255)",
        outlineOffset: "-1px",
      }} />
      <svg width={25} height={20} viewBox="0 0 25 20" fill="none" style={{
        position: "absolute",
        left: 8,
        top: 14,
        color: "rgb(255,255,255)",
      }}>
        <path transform="translate(2.500 17.500) scale(20 -20)" d="M 0.906 0 C 0.957 0 1 0.041 1 0.094 L 1 0.656 C 1 0.707 0.957 0.75 0.906 0.75 L 0.094 0.75 C 0.041 0.75 0 0.707 0 0.656 L 0 0.094 C 0 0.041 0.041 0 0.094 0 L 0.906 0 Z M 0.219 0.641 C 0.277 0.641 0.328 0.59 0.328 0.531 C 0.328 0.471 0.277 0.422 0.219 0.422 C 0.158 0.422 0.109 0.471 0.109 0.531 C 0.109 0.59 0.158 0.641 0.219 0.641 Z M 0.125 0.125 L 0.125 0.219 L 0.264 0.357 C 0.273 0.367 0.287 0.367 0.297 0.357 L 0.406 0.25 L 0.67 0.514 C 0.68 0.523 0.693 0.523 0.703 0.514 L 0.875 0.344 L 0.875 0.125 L 0.125 0.125 Z" fill="currentColor" />
      </svg>
      <span style={{
        position: "absolute",
        left: 41,
        top: 10,
        width: 79,
        height: 28,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20.15999984741211,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "Imagem"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <svg width={25} height={20} viewBox="0 0 25 20" fill="none" style={{
        position: "absolute",
        left: 12,
        top: 14,
        color: "rgb(51,51,51)",
      }}>
        <path transform="translate(2.500 17.500) scale(20 -20)" d="M 0.906 0 C 0.957 0 1 0.041 1 0.094 L 1 0.656 C 1 0.707 0.957 0.75 0.906 0.75 L 0.094 0.75 C 0.041 0.75 0 0.707 0 0.656 L 0 0.094 C 0 0.041 0.041 0 0.094 0 L 0.906 0 Z M 0.219 0.641 C 0.277 0.641 0.328 0.59 0.328 0.531 C 0.328 0.471 0.277 0.422 0.219 0.422 C 0.158 0.422 0.109 0.471 0.109 0.531 C 0.109 0.59 0.158 0.641 0.219 0.641 Z M 0.125 0.125 L 0.125 0.219 L 0.264 0.357 C 0.273 0.367 0.287 0.367 0.297 0.357 L 0.406 0.25 L 0.67 0.514 C 0.68 0.523 0.693 0.523 0.703 0.514 L 0.875 0.344 L 0.875 0.125 L 0.125 0.125 Z" fill="currentColor" />
      </svg>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        borderRadius: "50%",
        outline: "1px dashed rgb(51,51,51)",
        outlineOffset: "-1px",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 89,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 89,
        height: 48,
        outline: "1px dashed rgb(51,51,51)",
        outlineOffset: "-1px",
      }} />
      <svg width={25} height={20} viewBox="0 0 25 20" fill="none" style={{
        position: "absolute",
        left: 8,
        top: 14,
        color: "rgb(51,51,51)",
      }}>
        <path transform="translate(2.500 17.500) scale(20 -20)" d="M 0.906 0 C 0.957 0 1 0.041 1 0.094 L 1 0.656 C 1 0.707 0.957 0.75 0.906 0.75 L 0.094 0.75 C 0.041 0.75 0 0.707 0 0.656 L 0 0.094 C 0 0.041 0.041 0 0.094 0 L 0.906 0 Z M 0.219 0.641 C 0.277 0.641 0.328 0.59 0.328 0.531 C 0.328 0.471 0.277 0.422 0.219 0.422 C 0.158 0.422 0.109 0.471 0.109 0.531 C 0.109 0.59 0.158 0.641 0.219 0.641 Z M 0.125 0.125 L 0.125 0.219 L 0.264 0.357 C 0.273 0.367 0.287 0.367 0.297 0.357 L 0.406 0.25 L 0.67 0.514 C 0.68 0.523 0.693 0.523 0.703 0.514 L 0.875 0.344 L 0.875 0.125 L 0.125 0.125 Z" fill="currentColor" />
      </svg>
      <span style={{
        position: "absolute",
        left: 38,
        top: 10,
        width: 44,
        height: 28,
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20.15999984741211,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(51,51,51)",
      }}>{props.text1 ?? ".Img"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      outline: "1px dashed rgb(51,51,51)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      padding: "5px 34px 5px 34px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={23} viewBox="0 0 20 23" fill="none" style={{ position: "relative", flexShrink: 0, color: "rgb(51,51,51)" }}>
          <path transform="translate(0 19) scale(20 -20)" d="M 0.906 0 C 0.957 0 1 0.041 1 0.094 L 1 0.656 C 1 0.707 0.957 0.75 0.906 0.75 L 0.094 0.75 C 0.041 0.75 0 0.707 0 0.656 L 0 0.094 C 0 0.041 0.041 0 0.094 0 L 0.906 0 Z M 0.219 0.641 C 0.277 0.641 0.328 0.59 0.328 0.531 C 0.328 0.471 0.277 0.422 0.219 0.422 C 0.158 0.422 0.109 0.471 0.109 0.531 C 0.109 0.59 0.158 0.641 0.219 0.641 Z M 0.125 0.125 L 0.125 0.219 L 0.264 0.357 C 0.273 0.367 0.287 0.367 0.297 0.357 L 0.406 0.25 L 0.67 0.514 C 0.68 0.523 0.693 0.523 0.703 0.514 L 0.875 0.344 L 0.875 0.125 L 0.125 0.125 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      padding: "5px 34px 5px 34px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={23} viewBox="0 0 20 23" fill="none" style={{ position: "relative", flexShrink: 0, color: "rgb(255,255,255)" }}>
          <path transform="translate(0 19) scale(20 -20)" d="M 0.906 0 C 0.957 0 1 0.041 1 0.094 L 1 0.656 C 1 0.707 0.957 0.75 0.906 0.75 L 0.094 0.75 C 0.041 0.75 0 0.707 0 0.656 L 0 0.094 C 0 0.041 0.041 0 0.094 0 L 0.906 0 Z M 0.219 0.641 C 0.277 0.641 0.328 0.59 0.328 0.531 C 0.328 0.471 0.277 0.422 0.219 0.422 C 0.158 0.422 0.109 0.471 0.109 0.531 C 0.109 0.59 0.158 0.641 0.219 0.641 Z M 0.125 0.125 L 0.125 0.219 L 0.264 0.357 C 0.273 0.367 0.287 0.367 0.297 0.357 L 0.406 0.25 L 0.67 0.514 C 0.68 0.523 0.693 0.523 0.703 0.514 L 0.875 0.344 L 0.875 0.125 L 0.125 0.125 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 126,
      outline: "1px dashed rgb(51,51,51)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 7px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={23} viewBox="0 0 20 23" fill="none" style={{ position: "relative", flexShrink: 0, color: "rgb(51,51,51)" }}>
        <path transform="translate(0 19) scale(20 -20)" d="M 0.906 0 C 0.957 0 1 0.041 1 0.094 L 1 0.656 C 1 0.707 0.957 0.75 0.906 0.75 L 0.094 0.75 C 0.041 0.75 0 0.707 0 0.656 L 0 0.094 C 0 0.041 0.041 0 0.094 0 L 0.906 0 Z M 0.219 0.641 C 0.277 0.641 0.328 0.59 0.328 0.531 C 0.328 0.471 0.277 0.422 0.219 0.422 C 0.158 0.422 0.109 0.471 0.109 0.531 C 0.109 0.59 0.158 0.641 0.219 0.641 Z M 0.125 0.125 L 0.125 0.219 L 0.264 0.357 C 0.273 0.367 0.287 0.367 0.297 0.357 L 0.406 0.25 L 0.67 0.514 C 0.68 0.523 0.693 0.523 0.703 0.514 L 0.875 0.344 L 0.875 0.125 L 0.125 0.125 Z" fill="currentColor" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20.15999984741211,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(51,51,51)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Imagem"}</span>
    </div>
  );
  const __impls = {
    // figma: Property= white, variant=circle
    "property=white|variant=circle": __body0,
    // figma: Property= white, variant=small
    "property=white|variant=small": __body1,
    // figma: Property= white, variant=Default
    "property=white|variant=default": __body2,
    // figma: Property= black, variant=circle
    "property=black|variant=circle": __body3,
    // figma: Property= black, variant=small
    "property=black|variant=small": __body4,
    // figma: Property=black, variant=small.image
    "property=black|variant=small.image": __body5,
    // figma: Property=white, variant=small.image
    "property=white|variant=small.image": __body6,
    // figma: Property= black, variant=Default
    "property=black|variant=default": __body7,
  };
  return (__impls[__vkey(props)] ?? __body7)();
}
export default UiImage;
