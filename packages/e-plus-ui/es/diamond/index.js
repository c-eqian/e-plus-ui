import { defineComponent as d, ref as r, computed as o, openBlock as p, createElementBlock as m, normalizeStyle as a, createElementVNode as t } from "vue";
import { _ as c } from "../_plugin-vue_export-helper/index.js";
import { w as u } from "../utils/index.js";
const h = u(c(d({ name: "EpDiamondLoading", __name: "index", props: { size: { type: Number, default: 40 }, bgColor: { type: String, default: "#41b883" } }, setup(l) {
  const e = l, n = r({ width: `${parseInt("" + e.size / 4, 10)}px`, height: `${parseInt("" + e.size / 4, 10)}px`, "--cz-diamond-bg-color": e.bgColor }), s = o(() => n.value), i = o(() => ({ width: `${e.size}px`, height: `${parseInt("" + e.size / 4, 10)}px` }));
  return (z, v) => (p(), m("div", { style: a(i.value), class: "cz-spinner cz-relative spinner--rotate-diamond" }, [t("div", { style: a(s.value), class: "cz-diamond" }, null, 4), t("div", { style: a(s.value), class: "cz-diamond" }, null, 4), t("div", { style: a(s.value), class: "cz-diamond" }, null, 4)], 4));
} }), [["__scopeId", "data-v-7039d37d"]]));
export {
  h as default
};
