import { defineComponent as t, computed as a, openBlock as o, createElementBlock as c, createElementVNode as n, mergeProps as u, renderSlot as i } from "vue";
import { w as p } from "../utils/index.js";
const m = { class: "cz-relative cz-w-full cz-box-border cz-overflow-hidden cz-h-full" }, d = ["src"], v = p(t({ name: "EpImageHover", __name: "index", props: { url: { type: String, default: "" } }, setup(r) {
  const l = r, s = a(() => l.url);
  return (e, z) => (o(), c("div", m, [n("img", u({ src: s.value, alt: "图片", class: "cz-cursor-pointer cz-w-full cz-h-full cz-bg-cover cz-bg-center cz-bg-no-repeat hover:cz-scale-150", style: { transition: "all 0.5s ease 0.1s" } }, e.$attrs), null, 16, d), i(e.$slots, "default")]));
} }));
export {
  v as default
};
