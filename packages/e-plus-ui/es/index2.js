import { c as C } from "./_chunks/@element-plus/index.js";
import { ElMessage as v } from "element-plus";
import { defineComponent as x, computed as i, ref as m, onUpdated as g, onMounted as k, onUnmounted as h, nextTick as S, resolveComponent as y, openBlock as d, createElementBlock as f, normalizeClass as $, createElementVNode as j, renderSlot as E, toDisplayString as _, createBlock as b, withCtx as R, createVNode as A, createCommentVNode as B } from "vue";
import { _ as D } from "./_plugin-vue_export-helper/index.js";
const N = x({ name: "EpCopyText", components: { CopyDocument: C }, props: { text: { type: String, default: "" }, type: { type: String, default: "" }, justify: { type: String, default: "start" }, align: { type: String, default: "top" } }, setup(e) {
  const s = i(() => e.text), r = i(() => !!s.value), c = m(), p = m(""), u = i(() => r.value ? s.value : p.value), n = () => {
    S(() => {
      var t;
      p.value = ((t = c.value) == null ? void 0 : t.innerText) ?? "";
    });
  };
  let o = null;
  return g(n), k(n), h(() => {
    o = null;
  }), { textComputedRef: u, textRef: c, fromAttr: r, val: s, handleCopy: () => {
    const t = ((a) => {
      const l = document.createElement("textarea");
      return l.setAttribute("readonly", ""), l.setAttribute("opacity", "0"), l.value = a, l;
    })(u.value);
    document.body.appendChild(t), t.select();
    try {
      document.execCommand("copy"), o == null || o.close(), o = v({ showClose: !0, message: "已复制", type: "success", duration: 1e3 });
    } catch (a) {
      console.error(a);
    } finally {
      t.remove();
    }
  } };
} }), T = { ref: "textRef" }, V = { key: 1 }, I = D(N, [["render", function(e, s, r, c, p, u) {
  var t, a;
  const n = y("CopyDocument"), o = y("el-icon");
  return d(), f("div", { class: $([e.type ? `is-${e.type}` : "", e.type && e.justify ? `is-justify-${e.justify}` : "", e.type && e.align ? `is-align-${e.align}` : ""]) }, [j("span", T, [(a = (t = e.$slots) == null ? void 0 : t.default) != null && a.call(t) ? E(e.$slots, "default", { key: 0 }, void 0, !0) : (d(), f("span", V, _(e.val), 1))], 512), e.textComputedRef ? (d(), b(o, { key: 0, class: "icon", onClick: e.handleCopy }, { default: R(() => [A(n)]), _: 1 }, 8, ["onClick"])) : B("", !0)], 2);
}], ["__scopeId", "data-v-5a6b637c"]]);
export {
  I as C
};
