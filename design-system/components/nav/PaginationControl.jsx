import { AngleDoubleRight } from './AngleDoubleRight.jsx';
import { AngleLeft } from './AngleLeft.jsx';
import { AngleRight } from './AngleRight.jsx';
import { PaginatorCount } from './PaginatorCount.jsx';
import { PaginatorIcon } from './PaginatorIcon.jsx';

// figma node: 97:453 Pagination-Control (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "elavation=" + __venc(p.elavation);

export function PaginationControl(_p = {}) {
  const props = { ..._p, elavation: _p.elavation ?? "border" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--base-white)",
      borderTop: "1px solid var(--bluegray-bluegray-200)",
      borderRight: "1px solid var(--bluegray-bluegray-200)",
      borderBottom: "1px solid var(--bluegray-bluegray-200)",
      borderLeft: "1px solid var(--bluegray-bluegray-200)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PaginatorIcon state={"default"} type={"square"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PaginatorIcon icon1={<AngleLeft style={{ width: "100%", height: "100%" }} />} state={"default"} type={"square"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PaginatorCount state={"default"} type={"square"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PaginatorCount text1={"2"} state={"default"} type={"square"} />}</div>
      <PaginatorCount
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"4"}
        state={"default"}
        type={"square"}
      />
      <PaginatorCount
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"5"}
        state={"default"}
        type={"square"}
      />
      <PaginatorIcon
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        icon1={<AngleRight style={{ width: "100%", height: "100%" }} />}
        state={"default"}
        type={"square"}
      />
      <PaginatorIcon
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        icon1={<AngleDoubleRight style={{ width: "100%", height: "100%" }} />}
        state={"default"}
        type={"square"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--base-white)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <PaginatorIcon state={"default"} type={"square"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PaginatorIcon icon1={<AngleLeft style={{ width: "100%", height: "100%" }} />} state={"default"} type={"square"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <PaginatorCount state={"default"} type={"square"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <PaginatorCount text1={"2"} state={"default"} type={"square"} />}</div>
      <PaginatorCount
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"4"}
        state={"default"}
        type={"square"}
      />
      <PaginatorCount
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"5"}
        state={"default"}
        type={"square"}
      />
      <PaginatorIcon
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        icon1={<AngleRight style={{ width: "100%", height: "100%" }} />}
        state={"default"}
        type={"square"}
      />
      <PaginatorIcon
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        icon1={<AngleDoubleRight style={{ width: "100%", height: "100%" }} />}
        state={"default"}
        type={"square"}
      />
    </div>
  );
  const __impls = {
    // figma: Elavation=Border
    "elavation=border": __body0,
    // figma: Elavation=No-border
    "elavation=no-border": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PaginationControl;
