import { Button2 } from '../core/Button2.jsx';
import { FontType } from './FontType.jsx';
import { Loading } from '../core/Loading.jsx';
import { MessageFeedback3 } from './MessageFeedback3.jsx';
import { UiCursor } from './UiCursor.jsx';

// figma node: 4932:11996 upload (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Upload(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 553,
      height: 287,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 23,
        width: 550,
        height: 43,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        outline: "1px dashed rgb(21,91,203)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 17,
        top: 36,
        width: 20,
        height: 16,
      }}>
        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" style={{
          position: "absolute",
          left: 1,
          top: 0,
          color: "rgb(21,91,203)",
        }}>
          <path transform="translate(1 14) scale(16 -16)" d="M 0.578 0.125 L 0.422 0.125 C 0.395 0.125 0.375 0.145 0.375 0.172 L 0.375 0.5 L 0.203 0.5 C 0.168 0.5 0.15 0.541 0.176 0.566 L 0.473 0.863 C 0.486 0.877 0.512 0.877 0.525 0.863 L 0.822 0.566 C 0.848 0.541 0.83 0.5 0.795 0.5 L 0.625 0.5 L 0.625 0.172 C 0.625 0.145 0.604 0.125 0.578 0.125 Z M 1 0.141 L 1 -0.078 C 1 -0.105 0.979 -0.125 0.953 -0.125 L 0.047 -0.125 C 0.02 -0.125 0 -0.105 0 -0.078 L 0 0.141 C 0 0.166 0.02 0.188 0.047 0.188 L 0.313 0.188 L 0.313 0.172 C 0.313 0.111 0.361 0.063 0.422 0.063 L 0.578 0.063 C 0.637 0.063 0.688 0.111 0.688 0.172 L 0.688 0.188 L 0.953 0.188 C 0.979 0.188 1 0.166 1 0.141 Z M 0.758 -0.031 C 0.758 -0.01 0.74 0.008 0.719 0.008 C 0.697 0.008 0.68 -0.01 0.68 -0.031 C 0.68 -0.053 0.697 -0.07 0.719 -0.07 C 0.74 -0.07 0.758 -0.053 0.758 -0.031 Z M 0.883 -0.031 C 0.883 -0.01 0.865 0.008 0.844 0.008 C 0.822 0.008 0.805 -0.01 0.805 -0.031 C 0.805 -0.053 0.822 -0.07 0.844 -0.07 C 0.865 -0.07 0.883 -0.053 0.883 -0.031 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 173,
        width: 550,
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(21,91,203)",
            flexGrow: 1,
          }}>nome-do-arquivo.pdf</span>
          <div style={{
            position: "relative",
            height: 16,
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 16px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16.799999237060547,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
            }}>Paragraph</span>
          </div>
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
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 550,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 117,
        width: 550,
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(21,91,203)",
            flexGrow: 1,
          }}>nome-do-arquivo.pdf</span>
          <div style={{
            position: "relative",
            height: 16,
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 16px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16.799999237060547,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
            }}>Paragraph</span>
          </div>
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
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 550,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 229,
        width: 550,
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(21,91,203)",
            flexGrow: 1,
          }}>nome-do-arquivo.pdf</span>
          <div style={{
            position: "relative",
            height: 16,
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 16px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16.799999237060547,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
            }}>Paragraph</span>
          </div>
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
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 550,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 53,
        top: 31,
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(21,91,203)",
          flexShrink: 0,
        }}>Selecione o(s) arquivo(s)</span>
      </div>
      <FontType
        style={{
          position: "absolute",
          left: 1,
          top: -2,
          width: 117,
        }}
        text1={"Envio de arquivos"}
        fontType={"label"}
      />
      <FontType
        style={{
          position: "absolute",
          left: 1,
          top: 72,
          width: 197,
        }}
        text1={"Função de prevenir erros."}
        fontType={"paragraph"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 553,
      height: 287,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 23,
        width: 550,
        height: 43,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        outline: "1px dashed rgb(21,91,203)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 1,
        top: 23,
        width: 550,
        height: 43,
        opacity: 0.3,
        borderRadius: 6,
        backgroundColor: "rgb(19,81,180)",
        outline: "1px dashed rgb(21,91,203)",
        outlineOffset: "-1px",
      }} />
      <div style={{
          position: "absolute",
          left: 306,
          top: 51,
          width: 28,
          height: 27,
        }}>{props.icon1 ?? <UiCursor property={"copy"} />}</div>
      <div style={{
        position: "absolute",
        left: 17,
        top: 36,
        width: 20,
        height: 16,
      }}>
        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" style={{
          position: "absolute",
          left: 1,
          top: 0,
          color: "rgb(21,91,203)",
        }}>
          <path transform="translate(1 14) scale(16 -16)" d="M 0.578 0.125 L 0.422 0.125 C 0.395 0.125 0.375 0.145 0.375 0.172 L 0.375 0.5 L 0.203 0.5 C 0.168 0.5 0.15 0.541 0.176 0.566 L 0.473 0.863 C 0.486 0.877 0.512 0.877 0.525 0.863 L 0.822 0.566 C 0.848 0.541 0.83 0.5 0.795 0.5 L 0.625 0.5 L 0.625 0.172 C 0.625 0.145 0.604 0.125 0.578 0.125 Z M 1 0.141 L 1 -0.078 C 1 -0.105 0.979 -0.125 0.953 -0.125 L 0.047 -0.125 C 0.02 -0.125 0 -0.105 0 -0.078 L 0 0.141 C 0 0.166 0.02 0.188 0.047 0.188 L 0.313 0.188 L 0.313 0.172 C 0.313 0.111 0.361 0.063 0.422 0.063 L 0.578 0.063 C 0.637 0.063 0.688 0.111 0.688 0.172 L 0.688 0.188 L 0.953 0.188 C 0.979 0.188 1 0.166 1 0.141 Z M 0.758 -0.031 C 0.758 -0.01 0.74 0.008 0.719 0.008 C 0.697 0.008 0.68 -0.01 0.68 -0.031 C 0.68 -0.053 0.697 -0.07 0.719 -0.07 C 0.74 -0.07 0.758 -0.053 0.758 -0.031 Z M 0.883 -0.031 C 0.883 -0.01 0.865 0.008 0.844 0.008 C 0.822 0.008 0.805 -0.01 0.805 -0.031 C 0.805 -0.053 0.822 -0.07 0.844 -0.07 C 0.865 -0.07 0.883 -0.053 0.883 -0.031 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 117,
        width: 550,
        height: 168,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 550,
          height: 168,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 112,
            width: 550,
            height: 56,
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
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
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "100%",
                color: "rgb(21,91,203)",
                flexGrow: 1,
              }}>nome-do-arquivo.pdf</span>
              <div style={{
                position: "relative",
                height: 16,
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 16px 0px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16.799999237060547,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>Paragraph</span>
              </div>
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
            <div style={{
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 550,
                height: 1,
                backgroundColor: "rgb(204,204,204)",
              }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 56,
            width: 550,
            height: 56,
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
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
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "100%",
                color: "rgb(21,91,203)",
                flexGrow: 1,
              }}>nome-do-arquivo.pdf</span>
              <div style={{
                position: "relative",
                height: 16,
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 16px 0px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16.799999237060547,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>Paragraph</span>
              </div>
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
            <div style={{
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 550,
                height: 1,
                backgroundColor: "rgb(204,204,204)",
              }} />
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 550,
            height: 56,
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
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
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "100%",
                color: "rgb(21,91,203)",
                flexGrow: 1,
              }}>nome-do-arquivo.pdf</span>
              <div style={{
                position: "relative",
                height: 16,
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 16px 0px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16.799999237060547,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(0,0,0)",
                  flexShrink: 0,
                }}>Paragraph</span>
              </div>
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
            <div style={{
              position: "relative",
              height: 1,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 550,
                height: 1,
                backgroundColor: "rgb(204,204,204)",
              }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 53,
        top: 31,
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(21,91,203)",
          flexShrink: 0,
        }}>Selecione o(s) arquivo(s)</span>
      </div>
      <FontType
        style={{
          position: "absolute",
          left: 1,
          top: -2,
          width: 117,
        }}
        text1={"Envio de arquivos"}
        fontType={"label"}
      />
      <FontType
        style={{
          position: "absolute",
          left: 1,
          top: 72,
          width: 197,
        }}
        text1={"Função de prevenir erros."}
        fontType={"paragraph"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 550,
      height: 105,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 23,
        width: 550,
        height: 43,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        outline: "1px dashed rgb(21,91,203)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 16,
        top: 36,
        width: 20,
        height: 16,
      }}>
        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" style={{
          position: "absolute",
          left: 1,
          top: 0,
          color: "rgb(21,91,203)",
        }}>
          <path transform="translate(1 14) scale(16 -16)" d="M 0.578 0.125 L 0.422 0.125 C 0.395 0.125 0.375 0.145 0.375 0.172 L 0.375 0.5 L 0.203 0.5 C 0.168 0.5 0.15 0.541 0.176 0.566 L 0.473 0.863 C 0.486 0.877 0.512 0.877 0.525 0.863 L 0.822 0.566 C 0.848 0.541 0.83 0.5 0.795 0.5 L 0.625 0.5 L 0.625 0.172 C 0.625 0.145 0.604 0.125 0.578 0.125 Z M 1 0.141 L 1 -0.078 C 1 -0.105 0.979 -0.125 0.953 -0.125 L 0.047 -0.125 C 0.02 -0.125 0 -0.105 0 -0.078 L 0 0.141 C 0 0.166 0.02 0.188 0.047 0.188 L 0.313 0.188 L 0.313 0.172 C 0.313 0.111 0.361 0.063 0.422 0.063 L 0.578 0.063 C 0.637 0.063 0.688 0.111 0.688 0.172 L 0.688 0.188 L 0.953 0.188 C 0.979 0.188 1 0.166 1 0.141 Z M 0.758 -0.031 C 0.758 -0.01 0.74 0.008 0.719 0.008 C 0.697 0.008 0.68 -0.01 0.68 -0.031 C 0.68 -0.053 0.697 -0.07 0.719 -0.07 C 0.74 -0.07 0.758 -0.053 0.758 -0.031 Z M 0.883 -0.031 C 0.883 -0.01 0.865 0.008 0.844 0.008 C 0.822 0.008 0.805 -0.01 0.805 -0.031 C 0.805 -0.053 0.822 -0.07 0.844 -0.07 C 0.865 -0.07 0.883 -0.053 0.883 -0.031 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 52,
        top: 31,
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(21,91,203)",
          flexShrink: 0,
        }}>Selecione o(s) arquivo(s)</span>
      </div>
      <FontType
        style={{
          position: "absolute",
          left: 0,
          top: -2,
          width: 117,
        }}
        text1={"Envio de arquivos"}
        fontType={"label"}
      />
      <div style={{
          position: "absolute",
          left: 208,
          top: 74,
          width: 134,
          height: 31,
        }}>
        <Loading
          style={{ transform: "scale(1, 0.982)", transformOrigin: "0 0" }}
          type={"inderteminate-small"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 553,
      height: 287,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 23,
        width: 550,
        height: 43,
        borderRadius: 6,
        backgroundColor: "rgb(252,252,252)",
        outline: "1px dashed rgb(19,81,180)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 23,
        width: 550,
        height: 43,
        opacity: 0.45,
        borderRadius: 6,
        backgroundColor: "rgb(19,81,180)",
        outline: "1px dashed rgb(19,81,180)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 117,
        width: 551,
        height: 168,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 56,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 112,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 551,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 551,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 36,
        width: 20,
        height: 16,
      }}>
        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" style={{
          position: "absolute",
          left: 1,
          top: 0,
          color: "rgb(19,81,180)",
        }}>
          <path transform="translate(1 14) scale(16 -16)" d="M 0.578 0.125 L 0.422 0.125 C 0.395 0.125 0.375 0.145 0.375 0.172 L 0.375 0.5 L 0.203 0.5 C 0.168 0.5 0.15 0.541 0.176 0.566 L 0.473 0.863 C 0.486 0.877 0.512 0.877 0.525 0.863 L 0.822 0.566 C 0.848 0.541 0.83 0.5 0.795 0.5 L 0.625 0.5 L 0.625 0.172 C 0.625 0.145 0.604 0.125 0.578 0.125 Z M 1 0.141 L 1 -0.078 C 1 -0.105 0.979 -0.125 0.953 -0.125 L 0.047 -0.125 C 0.02 -0.125 0 -0.105 0 -0.078 L 0 0.141 C 0 0.166 0.02 0.188 0.047 0.188 L 0.313 0.188 L 0.313 0.172 C 0.313 0.111 0.361 0.063 0.422 0.063 L 0.578 0.063 C 0.637 0.063 0.688 0.111 0.688 0.172 L 0.688 0.188 L 0.953 0.188 C 0.979 0.188 1 0.166 1 0.141 Z M 0.758 -0.031 C 0.758 -0.01 0.74 0.008 0.719 0.008 C 0.697 0.008 0.68 -0.01 0.68 -0.031 C 0.68 -0.053 0.697 -0.07 0.719 -0.07 C 0.74 -0.07 0.758 -0.053 0.758 -0.031 Z M 0.883 -0.031 C 0.883 -0.01 0.865 0.008 0.844 0.008 C 0.822 0.008 0.805 -0.01 0.805 -0.031 C 0.805 -0.053 0.822 -0.07 0.844 -0.07 C 0.865 -0.07 0.883 -0.053 0.883 -0.031 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 52,
        top: 31,
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(19,81,180)",
          flexShrink: 0,
        }}>Selecione o(s) arquivo(s)</span>
      </div>
      <FontType
        style={{
          position: "absolute",
          left: 0,
          top: -2,
          width: 117,
        }}
        text1={"Envio de arquivos"}
        fontType={"label"}
      />
      <FontType
        style={{
          position: "absolute",
          left: 0,
          top: 72,
          width: 197,
        }}
        text1={"Função de prevenir erros."}
        fontType={"paragraph"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 552,
      height: 314,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 23,
        width: 550,
        height: 43,
        opacity: 0.45,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        outline: "1px dashed rgb(21,91,203)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 200,
        width: 550,
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(21,91,203)",
            flexGrow: 1,
          }}>nome-do-arquivo.pdf</span>
          <div style={{
            position: "relative",
            height: 16,
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 16px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16.799999237060547,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
            }}>Paragraph</span>
          </div>
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
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 550,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 144,
        width: 550,
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(21,91,203)",
            flexGrow: 1,
          }}>nome-do-arquivo.pdf</span>
          <div style={{
            position: "relative",
            height: 16,
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 16px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16.799999237060547,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
            }}>Paragraph</span>
          </div>
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
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 550,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 256,
        width: 550,
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
          <span style={{
            position: "relative",
            fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "100%",
            color: "rgb(21,91,203)",
            flexGrow: 1,
          }}>nome-do-arquivo.pdf</span>
          <div style={{
            position: "relative",
            height: 16,
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 16px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16.799999237060547,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,0,0)",
              flexShrink: 0,
            }}>Paragraph</span>
          </div>
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
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 550,
            height: 1,
            backgroundColor: "rgb(204,204,204)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 18,
        top: 36,
        width: 20,
        height: 16,
        opacity: 0.45,
      }}>
        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" style={{
          position: "absolute",
          left: 1,
          top: 0,
          color: "rgb(21,91,203)",
        }}>
          <path transform="translate(1 14) scale(16 -16)" d="M 0.578 0.125 L 0.422 0.125 C 0.395 0.125 0.375 0.145 0.375 0.172 L 0.375 0.5 L 0.203 0.5 C 0.168 0.5 0.15 0.541 0.176 0.566 L 0.473 0.863 C 0.486 0.877 0.512 0.877 0.525 0.863 L 0.822 0.566 C 0.848 0.541 0.83 0.5 0.795 0.5 L 0.625 0.5 L 0.625 0.172 C 0.625 0.145 0.604 0.125 0.578 0.125 Z M 1 0.141 L 1 -0.078 C 1 -0.105 0.979 -0.125 0.953 -0.125 L 0.047 -0.125 C 0.02 -0.125 0 -0.105 0 -0.078 L 0 0.141 C 0 0.166 0.02 0.188 0.047 0.188 L 0.313 0.188 L 0.313 0.172 C 0.313 0.111 0.361 0.063 0.422 0.063 L 0.578 0.063 C 0.637 0.063 0.688 0.111 0.688 0.172 L 0.688 0.188 L 0.953 0.188 C 0.979 0.188 1 0.166 1 0.141 Z M 0.758 -0.031 C 0.758 -0.01 0.74 0.008 0.719 0.008 C 0.697 0.008 0.68 -0.01 0.68 -0.031 C 0.68 -0.053 0.697 -0.07 0.719 -0.07 C 0.74 -0.07 0.758 -0.053 0.758 -0.031 Z M 0.883 -0.031 C 0.883 -0.01 0.865 0.008 0.844 0.008 C 0.822 0.008 0.805 -0.01 0.805 -0.031 C 0.805 -0.053 0.822 -0.07 0.844 -0.07 C 0.865 -0.07 0.883 -0.053 0.883 -0.031 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 54,
        top: 31,
        opacity: 0.45,
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(21,91,203)",
          flexShrink: 0,
        }}>Selecione o(s) arquivo(s)</span>
      </div>
      <FontType
        style={{
          position: "absolute",
          left: 2,
          top: -2,
          width: 117,
        }}
        text1={"Envio de arquivos"}
        fontType={"label"}
      />
      <FontType
        style={{
          position: "absolute",
          left: 2,
          top: 99,
          width: 197,
        }}
        text1={"Função de prevenir erros."}
        fontType={"paragraph"}
      />
      <MessageFeedback3
        style={{
          position: "absolute",
          left: 2,
          top: 74,
          height: 23,
        }}
        type={"mensagem"}
        state={"warning"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 554,
      height: 314,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 23,
        width: 550,
        height: 43,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        outline: "1px dashed rgb(22,136,33)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 2,
        top: 145,
        width: 550,
        height: 168,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 56,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 112,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 18,
        top: 36,
        width: 20,
        height: 16,
      }}>
        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" style={{
          position: "absolute",
          left: 1,
          top: 0,
          color: "rgb(21,91,203)",
        }}>
          <path transform="translate(1 14) scale(16 -16)" d="M 0.578 0.125 L 0.422 0.125 C 0.395 0.125 0.375 0.145 0.375 0.172 L 0.375 0.5 L 0.203 0.5 C 0.168 0.5 0.15 0.541 0.176 0.566 L 0.473 0.863 C 0.486 0.877 0.512 0.877 0.525 0.863 L 0.822 0.566 C 0.848 0.541 0.83 0.5 0.795 0.5 L 0.625 0.5 L 0.625 0.172 C 0.625 0.145 0.604 0.125 0.578 0.125 Z M 1 0.141 L 1 -0.078 C 1 -0.105 0.979 -0.125 0.953 -0.125 L 0.047 -0.125 C 0.02 -0.125 0 -0.105 0 -0.078 L 0 0.141 C 0 0.166 0.02 0.188 0.047 0.188 L 0.313 0.188 L 0.313 0.172 C 0.313 0.111 0.361 0.063 0.422 0.063 L 0.578 0.063 C 0.637 0.063 0.688 0.111 0.688 0.172 L 0.688 0.188 L 0.953 0.188 C 0.979 0.188 1 0.166 1 0.141 Z M 0.758 -0.031 C 0.758 -0.01 0.74 0.008 0.719 0.008 C 0.697 0.008 0.68 -0.01 0.68 -0.031 C 0.68 -0.053 0.697 -0.07 0.719 -0.07 C 0.74 -0.07 0.758 -0.053 0.758 -0.031 Z M 0.883 -0.031 C 0.883 -0.01 0.865 0.008 0.844 0.008 C 0.822 0.008 0.805 -0.01 0.805 -0.031 C 0.805 -0.053 0.822 -0.07 0.844 -0.07 C 0.865 -0.07 0.883 -0.053 0.883 -0.031 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 54,
        top: 31,
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(21,91,203)",
          flexShrink: 0,
        }}>Selecione o(s) arquivo(s)</span>
      </div>
      <FontType
        style={{
          position: "absolute",
          left: 2,
          top: -2,
          width: 117,
        }}
        text1={"Envio de arquivos"}
        fontType={"label"}
      />
      <FontType
        style={{
          position: "absolute",
          left: 2,
          top: 100,
          width: 197,
        }}
        text1={"Função de prevenir erros."}
        fontType={"paragraph"}
      />
      <MessageFeedback3
        style={{
          position: "absolute",
          left: 2,
          top: 74,
          height: 24,
          width: 127,
        }}
        type={"mensagem"}
        state={"sucess"}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 553,
      height: 315,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 23,
        width: 550,
        height: 43,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        outline: "1px dashed rgb(229,34,7)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 1,
        top: 145,
        width: 550,
        height: 168,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 56,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 112,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(230,0,0)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
          </div>
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 17,
        top: 36,
        width: 20,
        height: 16,
      }}>
        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" style={{
          position: "absolute",
          left: 1,
          top: 0,
          color: "rgb(21,91,203)",
        }}>
          <path transform="translate(1 14) scale(16 -16)" d="M 0.578 0.125 L 0.422 0.125 C 0.395 0.125 0.375 0.145 0.375 0.172 L 0.375 0.5 L 0.203 0.5 C 0.168 0.5 0.15 0.541 0.176 0.566 L 0.473 0.863 C 0.486 0.877 0.512 0.877 0.525 0.863 L 0.822 0.566 C 0.848 0.541 0.83 0.5 0.795 0.5 L 0.625 0.5 L 0.625 0.172 C 0.625 0.145 0.604 0.125 0.578 0.125 Z M 1 0.141 L 1 -0.078 C 1 -0.105 0.979 -0.125 0.953 -0.125 L 0.047 -0.125 C 0.02 -0.125 0 -0.105 0 -0.078 L 0 0.141 C 0 0.166 0.02 0.188 0.047 0.188 L 0.313 0.188 L 0.313 0.172 C 0.313 0.111 0.361 0.063 0.422 0.063 L 0.578 0.063 C 0.637 0.063 0.688 0.111 0.688 0.172 L 0.688 0.188 L 0.953 0.188 C 0.979 0.188 1 0.166 1 0.141 Z M 0.758 -0.031 C 0.758 -0.01 0.74 0.008 0.719 0.008 C 0.697 0.008 0.68 -0.01 0.68 -0.031 C 0.68 -0.053 0.697 -0.07 0.719 -0.07 C 0.74 -0.07 0.758 -0.053 0.758 -0.031 Z M 0.883 -0.031 C 0.883 -0.01 0.865 0.008 0.844 0.008 C 0.822 0.008 0.805 -0.01 0.805 -0.031 C 0.805 -0.053 0.822 -0.07 0.844 -0.07 C 0.865 -0.07 0.883 -0.053 0.883 -0.031 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 53,
        top: 31,
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(21,91,203)",
          flexShrink: 0,
        }}>Selecione o(s) arquivo(s)</span>
      </div>
      <FontType
        style={{
          position: "absolute",
          left: 1,
          top: -2,
          width: 117,
        }}
        text1={"Envio de arquivos"}
        fontType={"label"}
      />
      <FontType
        style={{
          position: "absolute",
          left: 1,
          top: 100,
          width: 197,
        }}
        text1={"Função de prevenir erros."}
        fontType={"paragraph"}
      />
      <MessageFeedback3
        style={{
          position: "absolute",
          left: 0,
          top: 74,
          height: 24,
        }}
        type={"mensagem"}
        state={"danger"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 551,
      height: 290,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 25,
        width: 550,
        height: 43,
        borderRadius: 6,
        backgroundColor: "rgb(252,252,252)",
        outline: "1px dashed rgb(21,91,203)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 25,
        width: 550,
        height: 43,
        opacity: 0.16,
        borderRadius: 6,
        backgroundColor: "rgb(19,81,180)",
        outline: "1px dashed rgb(21,91,203)",
        outlineOffset: "-1px",
      }} />
      <div style={{
        position: "absolute",
        left: 16,
        top: 38,
        width: 20,
        height: 16,
      }}>
        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" style={{
          position: "absolute",
          left: 1,
          top: 0,
          color: "rgb(21,91,203)",
        }}>
          <path transform="translate(1 14) scale(16 -16)" d="M 0.578 0.125 L 0.422 0.125 C 0.395 0.125 0.375 0.145 0.375 0.172 L 0.375 0.5 L 0.203 0.5 C 0.168 0.5 0.15 0.541 0.176 0.566 L 0.473 0.863 C 0.486 0.877 0.512 0.877 0.525 0.863 L 0.822 0.566 C 0.848 0.541 0.83 0.5 0.795 0.5 L 0.625 0.5 L 0.625 0.172 C 0.625 0.145 0.604 0.125 0.578 0.125 Z M 1 0.141 L 1 -0.078 C 1 -0.105 0.979 -0.125 0.953 -0.125 L 0.047 -0.125 C 0.02 -0.125 0 -0.105 0 -0.078 L 0 0.141 C 0 0.166 0.02 0.188 0.047 0.188 L 0.313 0.188 L 0.313 0.172 C 0.313 0.111 0.361 0.063 0.422 0.063 L 0.578 0.063 C 0.637 0.063 0.688 0.111 0.688 0.172 L 0.688 0.188 L 0.953 0.188 C 0.979 0.188 1 0.166 1 0.141 Z M 0.758 -0.031 C 0.758 -0.01 0.74 0.008 0.719 0.008 C 0.697 0.008 0.68 -0.01 0.68 -0.031 C 0.68 -0.053 0.697 -0.07 0.719 -0.07 C 0.74 -0.07 0.758 -0.053 0.758 -0.031 Z M 0.883 -0.031 C 0.883 -0.01 0.865 0.008 0.844 0.008 C 0.822 0.008 0.805 -0.01 0.805 -0.031 C 0.805 -0.053 0.822 -0.07 0.844 -0.07 C 0.865 -0.07 0.883 -0.053 0.883 -0.031 Z" fill="currentColor" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 52,
        top: 33,
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(21,91,203)",
          flexShrink: 0,
        }}>Selecione o(s) arquivo(s)</span>
      </div>
      <FontType
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 117,
        }}
        text1={"Envio de arquivos"}
        fontType={"label"}
      />
      <FontType
        style={{
          position: "absolute",
          left: 0,
          top: 74,
          width: 172,
        }}
        text1={"Função prevenir erros."}
        fontType={"paragraph"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 119,
        width: 551,
        height: 168,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 56,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 112,
          width: 550,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 550,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 551,
          height: 56,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
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
            <span style={{
              position: "relative",
              fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "100%",
              color: "rgb(21,91,203)",
              flexGrow: 1,
            }}>nome-do-arquivo.pdf</span>
            <div style={{
              position: "relative",
              height: 16,
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Rawline, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16.799999237060547,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(0,0,0)",
                flexShrink: 0,
              }}>Paragraph</span>
            </div>
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
          <div style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 551,
              height: 1,
              backgroundColor: "rgb(204,204,204)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: state=default
    "state=default": __body0,
    // figma: state=upload
    "state=upload": __body1,
    // figma: state=loading
    "state=loading": __body2,
    // figma: state=pressed
    "state=pressed": __body3,
    // figma: state=disabled
    "state=disabled": __body4,
    // figma: state=sucess
    "state=sucess": __body5,
    // figma: state=danger
    "state=danger": __body6,
    // figma: state=hover
    "state=hover": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Upload;
