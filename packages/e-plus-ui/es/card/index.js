import { defineComponent as v, computed as i, useSlots as f, openBlock as t, createElementBlock as r, normalizeClass as h, unref as s, createElementVNode as n, renderSlot as o, createTextVNode as u, toDisplayString as y, createCommentVNode as l } from "vue";
import { _ as w } from "../_plugin-vue_export-helper/index.js";
import { w as x } from "../utils/index.js";
const k = { key: 0, class: "cz-card-header" }, z = { class: "cz-card-header-title" }, _ = { key: 0, class: "cz-card-header-extra" }, $ = { class: "cz-card-body" }, C = { key: 1, class: "cz-card-footer" }, V = x(w(v({ name: "EpCard", __name: "index", props: { title: {}, shadow: { default: "hover" } }, setup(m) {
  const d = m, c = i(() => d.title), a = f(), p = i(() => ({ shadow: d.shadow === "always", "is-hover-shadow": d.shadow === "hover" }));
  return (e, b) => (t(), r("div", { class: h(["cz-card", p.value]) }, [s(a).title || c.value || s(a).extra ? (t(), r("div", k, [n("span", z, [o(e.$slots, "title", {}, () => [u(y(c.value), 1)], !0)]), s(a).extra ? (t(), r("span", _, [o(e.$slots, "extra", {}, void 0, !0)])) : l("", !0)])) : l("", !0), n("div", $, [s(a).body ? o(e.$slots, "body", { key: 0 }, void 0, !0) : o(e.$slots, "default", { key: 1 }, void 0, !0)]), s(a).footer ? (t(), r("div", C, [o(e.$slots, "footer", {}, void 0, !0)])) : l("", !0)], 2));
} }), [["__scopeId", "data-v-42c7868f"]]));
export {
  V as default
};
