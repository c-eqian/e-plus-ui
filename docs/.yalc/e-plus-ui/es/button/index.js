import { computed as i, inject as m, defineComponent as b, openBlock as o, createElementBlock as t, normalizeClass as a, normalizeStyle as y, createCommentVNode as s, createElementVNode as x, renderSlot as k } from "vue";
import { w as I } from "../utils/index.js";
const v = ["type"], $ = I(b({ name: "EpButton", __name: "index", props: { type: {}, size: {}, prefixIcon: {}, suffixIcon: {}, loadingIcon: { default: "ep-icon-loading-one" }, borderStyle: { default: "soild" }, border: {}, fluid: { type: Boolean, default: !1 }, radius: { type: Boolean, default: !1 }, loading: { type: Boolean, default: !1 }, disabled: { type: Boolean }, nativeType: { default: "button" } }, emits: { click: (l) => l instanceof MouseEvent }, setup(l, { emit: r }) {
  const n = l, { size: d } = function(e) {
    return { size: i(() => {
      const p = m("LayForm", {});
      return e.size || p.size || "md";
    }) };
  }(n), u = (e) => {
    n.disabled || n.loading || r("click", e);
  }, c = i(() => ({ border: `1px ${n.borderStyle}` })), f = i(() => [{ "ep-btn-fluid": n.fluid, "ep-btn-radius": n.radius, "ep-btn-disabled": n.disabled }, n.type ? `ep-btn-${n.type}` : "", d.value ? `ep-btn-${d.value}` : "", n.border ? `ep-border-${n.border}` : ""]);
  return (e, p) => (o(), t("button", { class: a(["ep-btn", f.value]), style: y(c.value), type: e.nativeType, onClick: u }, [e.prefixIcon ? (o(), t("i", { key: 0, class: a(`ep-icon ${e.prefixIcon}`) }, null, 2)) : s("", !0), e.loading ? (o(), t("i", { key: 1, class: a([e.loadingIcon, "ep-icon ep-anim ep-anim-rotate ep-anim-loop"]) }, null, 2)) : s("", !0), x("span", null, [k(e.$slots, "default")]), e.suffixIcon ? (o(), t("i", { key: 2, class: a(`ep-icon ${e.suffixIcon}`) }, null, 2)) : s("", !0)], 14, v));
} }));
export {
  $ as default
};
