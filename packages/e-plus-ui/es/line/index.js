import { defineComponent as z, useSlots as h, computed as i, openBlock as m, createElementBlock as v, normalizeStyle as g, createElementVNode as s, normalizeClass as c, renderSlot as x } from "vue";
import { p as n, w as _ } from "../utils/index.js";
const y = _(z({ name: "EpLine", __name: "index", props: { direction: { default: "horizontal" }, position: { default: "center" }, borderWidth: { default: "1px" }, dashed: { type: Boolean }, offset: {}, color: {}, margin: { default: "8px" }, linear: { type: Boolean } }, setup(d) {
  const e = d, t = h(), a = i(() => {
    var o, l;
    if (t.default) {
      const r = (o = t.default) == null ? void 0 : o.call(t);
      if (r)
        return !!(r[0].children !== "v-if" && ((l = r[0].children) != null && l.length));
    }
    return !1;
  }), f = i(() => e.offset ? n(e.offset) : e.position === "left" || e.position === "right" ? "5%" : "50%"), p = i(() => ({ "--cz-line-offset": f.value, "--cz-line-margin": e.direction === "horizontal" ? `${n(e.margin)} 0` : `0 ${n(e.margin)}`, "--cz-line-border-width": n(e.borderWidth), "--cz-line-border-color": e.color || "var(--global-neutral-color-5)" })), u = i(() => ({ "cz-line-text__right": e.position === "right", "cz-line-text__left": e.position === "left", "cz-line-text__offset": !!e.offset, "cz-line-horizontal": e.direction === "horizontal", "cz-line-vertical": e.direction === "vertical", "is-dashed": e.dashed, "is-center": e.position === "center" && !e.offset, "is-linear": e.position === "center" && e.linear || !a.value && e.linear }));
  return (o, l) => (m(), v("div", { style: g(p.value) }, [s("div", { class: c(["cz-line", u.value]) }, [s("span", { class: c({ "cz-line-text": a.value }) }, [x(o.$slots, "default")], 2)], 2)], 4));
} }));
export {
  y as default
};
