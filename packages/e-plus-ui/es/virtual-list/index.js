import { defineComponent as k, reactive as B, ref as R, computed as r, unref as o, onUpdated as C, watchEffect as L, openBlock as d, createElementBlock as u, normalizeStyle as g, createElementVNode as w, Fragment as S, renderList as _, renderSlot as N } from "vue";
import { s as V } from "../_chunks/co-utils-vue/index.js";
import { w as z } from "../utils/index.js";
const Y = z(k({ name: "EpVirtualList", __name: "index", props: { className: {}, height: { default: 500 }, width: { default: "100%" }, itemHeight: { default: 30 }, isDynamic: { type: Boolean, default: !1 }, cache: { default: 2 }, data: { default: () => [] } }, setup(y) {
  const s = y, t = B({ start: 0, end: 10, scrollOffset: 0, cacheData: [] }), p = R(), x = r(() => {
    const { height: a, width: e } = s;
    return { height: `${a}px`, position: "relative", "overflow-y": " auto", width: V(e) ? `${e}px` : e };
  }), O = r(() => ({ height: `${o(H)}px`, width: "100%" })), b = r(() => ({ willChange: "transform", transform: `translateY(${t.scrollOffset}px)` })), f = r(() => s.data.length), H = r(() => s.isDynamic ? n(o(f)) : o(f) * s.itemHeight), D = r(() => Math.ceil(s.height / s.itemHeight)), v = r(() => s.data.slice(t.start, t.end)), M = (a) => {
    const { scrollTop: e } = a.target;
    if (t.scrollOffset === e)
      return;
    const { cache: c, isDynamic: i, itemHeight: m } = s, h = Math.max(1, c);
    let l = i ? E(e) : Math.floor(e / m);
    const $ = Math.max(0, Math.min(o(f), l + o(D) + h));
    l > h && (l -= h);
    const j = i ? n(l) : e - e % m;
    Object.assign(t, { start: l, end: $, scrollOffset: j });
  }, E = (a = 0) => {
    let e = 0, c = t.cacheData.length - 1;
    for (; e <= c; ) {
      const i = e + Math.floor((c - e) / 2), m = n(i), h = n(i + 1);
      if (m <= a && a <= h)
        return i;
      h < a ? e = i + 1 : h > a && (c = i - 1);
    }
    return Math.min(o(f) - o(D), Math.floor(a / s.itemHeight));
  }, n = (a) => {
    const e = t.cacheData.length - 1;
    return Object.hasOwn(t.cacheData, a) ? t.cacheData[a].top : Object.hasOwn(t.cacheData, a - 1) ? t.cacheData[a - 1].bottom : a > e ? t.cacheData[e].bottom + Math.max(0, a - t.cacheData[e].index) * s.itemHeight : a * s.itemHeight;
  };
  return C(() => {
    s.isDynamic && [...p.value.children || []].forEach((a, e) => {
      const c = a.getBoundingClientRect().height, i = t.start + e;
      t.cacheData[i].height !== c && (t.cacheData[i].height = c, t.cacheData[i].top = n(i), t.cacheData[i].bottom = t.cacheData[i].top + t.cacheData[i].height);
    });
  }), L(() => {
    v.value.forEach((a, e) => {
      const c = t.start + e;
      Object.hasOwn(t.cacheData, c) || (t.cacheData[c] = { top: c * s.itemHeight, height: s.itemHeight, bottom: (c + 1) * s.itemHeight, index: c });
    });
  }), (a, e) => (d(), u("div", { ref: "wrapperRef", style: g(x.value), onScroll: M }, [w("div", { ref: "innerRef", class: "base-virtual-inner", style: g(O.value) }, [w("div", { ref_key: "virtualListRef", ref: p, class: "base-virtual-list", style: g(b.value) }, [(d(!0), u(S, null, _(v.value, (c, i) => (d(), u("div", { key: i + t.start }, [N(a.$slots, "default", { item: c })]))), 128))], 4)], 4)], 36));
} }));
export {
  Y as default
};
