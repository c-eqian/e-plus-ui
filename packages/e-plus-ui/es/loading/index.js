import { defineComponent as l, computed as d, openBlock as o, createElementBlock as n, Fragment as r, renderList as i, createElementVNode as c, normalizeClass as p, createCommentVNode as m } from "vue";
import { _ as g } from "../_plugin-vue_export-helper/index.js";
import { w as u } from "../utils/index.js";
const f = { key: 0, class: "cz-loading-container" }, b = u(g(l({ name: "EpLoading", __name: "index", props: { loading: { type: Boolean, default: !1 }, loadingType: { type: String, default: "wave" } }, setup(t) {
  const e = t, s = d(() => e.loading);
  return (y, v) => s.value ? (o(), n("div", f, [(o(), n(r, null, i([1, 2, 3, 4], (a) => c("div", { key: a, class: p(["cz-loading-bar", `cz-loading-bar-${a} ${e.loadingType}`]) }, null, 2)), 64))])) : m("", !0);
} }), [["__scopeId", "data-v-6bdc6e27"]]));
export {
  b as default
};
