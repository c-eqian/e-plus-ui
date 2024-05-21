import { computed as i, inject as m, defineComponent as y, openBlock as a, createElementBlock as l, normalizeClass as s, normalizeStyle as k, createCommentVNode as d, createElementVNode as x, renderSlot as B } from "vue";
const I = ["type"], v = ((o) => {
  const t = o;
  return t.install = (e) => {
    e.component(t.name, o);
  }, t;
})(y({ name: "EpButton", __name: "index", props: { type: {}, size: {}, prefixIcon: {}, suffixIcon: {}, loadingIcon: { default: "ep-icon-loading-one" }, borderStyle: { default: "soild" }, border: {}, fluid: { type: Boolean, default: !1 }, radius: { type: Boolean, default: !1 }, loading: { type: Boolean, default: !1 }, disabled: { type: Boolean }, nativeType: { default: "button" } }, emits: { click: (o) => o instanceof MouseEvent }, setup(o, { emit: t }) {
  const e = o, { size: p } = function(n) {
    return { size: i(() => {
      const r = m("LayForm", {});
      return n.size || r.size || "md";
    }) };
  }(e), c = (n) => {
    e.disabled || e.loading || t("click", n);
  }, f = i(() => ({ border: `1px ${e.borderStyle}` })), b = i(() => [{ "ep-btn-fluid": e.fluid, "ep-btn-radius": e.radius, "ep-btn-disabled": e.disabled }, e.type ? `ep-btn-${e.type}` : "", p.value ? `ep-btn-${p.value}` : "", e.border ? `ep-border-${e.border}` : ""]);
  return (n, r) => (a(), l("button", { class: s(["ep-btn", b.value]), style: k(f.value), type: n.nativeType, onClick: c }, [n.prefixIcon ? (a(), l("i", { key: 0, class: s(`ep-icon ${n.prefixIcon}`) }, null, 2)) : d("", !0), n.loading ? (a(), l("i", { key: 1, class: s([n.loadingIcon, "ep-icon ep-anim ep-anim-rotate ep-anim-loop"]) }, null, 2)) : d("", !0), x("span", null, [B(n.$slots, "default")]), n.suffixIcon ? (a(), l("i", { key: 2, class: s(`ep-icon ${n.suffixIcon}`) }, null, 2)) : d("", !0)], 14, I));
} })), u = { EpButton: v }, z = (o, t) => {
  for (const e of Object.keys(u))
    o.use(u[e], t);
}, g = { install: z };
export {
  v as EpButton,
  g as default,
  z as install
};
