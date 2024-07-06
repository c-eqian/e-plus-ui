import { g as c, v as t } from "../_chunks/co-utils-vue/index.js";
const p = (n) => {
  const e = n;
  return e.install = (s) => {
    console.log(222, e.name), s.component(e.name, n);
  }, e;
};
function r(n) {
  return n.replace(/-(\w)/g, (e, s) => s ? s.toUpperCase() : "");
}
const o = (n) => c(n) && (n.includes("%") || n.includes("px")) ? n : t(n) ? +n + "px" : n;
export {
  r as c,
  o as p,
  p as w
};
