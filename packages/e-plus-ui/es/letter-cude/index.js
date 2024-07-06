import { defineComponent as z, ref as v, computed as a, openBlock as s, createElementBlock as r, normalizeStyle as i, createElementVNode as c, Fragment as b, renderList as g, normalizeClass as y, toDisplayString as C } from "vue";
import { _ as h } from "../_plugin-vue_export-helper/index.js";
import { w as k } from "../utils/index.js";
const _ = { class: "cz-cube cz-panelLoad" }, E = k(h(z({ name: "EpLetterLoading", __name: "index", props: { size: { type: Number, default: 60 }, letters: { type: Array, default: () => ["Q", "C", "Y", "C", "M", "M"], validator: (t) => t.length === 6 }, bgColor: { type: String, default: "#41b883" } }, setup(t) {
  const e = t, p = v({ transform: `scale(${e.size / 2 / 75})`, "--cz-letter-bg-color": e.bgColor }), d = a(() => p.value), m = a(() => ({ width: `${e.size}px`, height: `${e.size}px` })), u = a(() => ["front", "back", "left", "right", "bottom", "top"].map((l, o) => ({ side: l, letter: e.letters[o] })));
  return (l, o) => (s(), r("div", { style: i(m.value), class: "cz-spinner cz-spinner--socker" }, [c("div", { style: i(d.value), class: "cz-spinner-inner" }, [c("div", _, [(s(!0), r(b, null, g(u.value, ({ side: n, letter: f }) => (s(), r("div", { key: n, class: y(`cz-cube-face cz-cube-face-${n}`) }, C(f), 3))), 128))])], 4)], 4));
} }), [["__scopeId", "data-v-fd573a74"]]));
export {
  E as default
};
