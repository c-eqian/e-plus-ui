import { defineComponent as F, inject as T, computed as k, h as x, unref as E, createVNode as b, mergeProps as S, isVNode as O, ref as C, provide as P, watch as B, watchEffect as D, createTextVNode as L } from "vue";
import { ElButton as K, ElTableColumn as I, ElFormItem as q, ElTag as z, ElForm as A, ElTable as _, ElRadio as H } from "element-plus";
import { d as U, g as Z, h as v, f as G, n as R, i as J, R as V, N as Q } from "../_chunks/co-utils-vue/index.js";
import { C as W } from "../index2.js";
import { w as N } from "../utils/index.js";
const X = F({ name: "EpButtons", props: { column: { type: Object, default: () => ({}) }, index: { type: Number, default: -1 }, row: { type: Object, default: () => ({}) } }, emits: ["click-btn"], setup(i) {
  const u = T("EVENT-CLICKED"), a = k(() => i), f = (n, d) => x(K, { ...d }, { default: () => n }), s = (n) => ["add", "edit", "view", "delete"].includes(n) && u[n] && v(u[n]) ? u[n](a.value.row, a.value.index) : u.btn && v(u.btn) ? u.btn(n, a.value.row, a.value.index) : void 0, e = (n, d, p = {}) => y(d, p)[n], y = (n, d = {}) => ({ add: f(n || "新增", { type: "primary", link: !0, icon: "Plus", ...d, onClick: () => s("add") }), edit: f(n || "编辑", { type: "info", link: !0, icon: "Edit", ...d, onClick: () => s("edit") }), view: f(n || "查看", { type: "primary", link: !0, icon: "ZoomIn", ...d, onClick: () => s("view") }), delete: f(n || "删除", { type: "danger", link: !0, icon: "Delete", ...d, onClick: () => s("delete") }) });
  return () => x("div", { class: "cz-table__buttons" }, { default: () => (() => {
    const { operationType: n } = a.value.column, { row: d, index: p, column: w } = a.value;
    if (U(n))
      return n.map((t) => {
        if (Z(t))
          return e(t);
        if (v(n))
          return n({ row: d, index: p, column: w });
        if (G(t)) {
          const { type: r, permission: l, label: c = "", extra: o = {}, render: m } = t, h = () => !v(l) || l();
          return v(m) ? m({ row: d, index: p, column: w }) : ["add", "edit", "view", "delete"].includes(r) ? h() ? e(r, c, o) : null : h() ? f(c, { ...o, onClick: () => s(r) }) : null;
        }
        return console.warn("The operationType type is incorrect"), null;
      });
  })() });
} });
function $(i) {
  return typeof i == "function" || Object.prototype.toString.call(i) === "[object Object]" && !O(i);
}
const M = F({ name: "EpTableColumn", props: { columnItem: { type: Object, default: () => ({}) }, columns: { type: Object, default: () => [] }, useFormValidation: { type: Boolean, default: !1 }, type: { type: String, default: "default" }, label: String, className: String, labelClassName: String, property: String, prop: String }, emits: ["click-row-view"], setup: () => ({ eventListeners: T("EVENT-CLICKED") }), render() {
  const { columnItem: i, useFormValidation: u, columns: a } = this.$props, f = (e) => {
    var w;
    const y = u && !((w = e.children) != null && w.length || !e.prop || !(e != null && e.rules)), n = (t, r, l = null) => {
      let c;
      if (e.isCopy) {
        let m;
        return b(W, null, { default: () => [b(K, { link: !0, type: "primary", onClick: () => {
          var h, g;
          return (g = (h = this.eventListeners).view) == null ? void 0 : g.call(h, l, t);
        } }, $(m = r()) ? m : { default: () => [m] })] });
      }
      if (!y)
        return r();
      const o = /* @__PURE__ */ Object.create(null);
      if (this.useFormValidation && e.rules) {
        const m = `data[${t}].${e.prop}`;
        typeof e.rules == "boolean" ? o.rules = { required: e.rules, message: `${e.label} 为必填项`, trigger: "blur" } : o.rules = e == null ? void 0 : e.rules, o.field = m, o.prop = m;
      }
      return b(q, S(o, { key: e.prop, class: "column-form-item__mini" }), $(c = r()) ? c : { default: () => [c] });
    }, d = (t) => {
      if (this.$props.useFormValidation) {
        const r = a.filter((l) => l.rules);
        return r ? r.map((l) => `data[${t}].${l.prop}`) : [];
      }
      return [];
    }, p = (t, r) => r && r.split(".").reduce((l, c) => (l || {})[c], t);
    return { header: (() => {
      var t, r;
      if (this.$slots.header || e.headerRender && v(e.headerRender)) {
        const l = e.headerRender;
        return (c) => l({ row: c.row, index: c.$index, column: { ...e } });
      }
      if (y) {
        const l = Array.isArray(e.rules) ? (t = e.rules) == null ? void 0 : t.some((c) => c.required) : typeof e.rules == "boolean" ? e.rules : !!((r = e.rules) != null && r.required);
        return () => x("div", { class: { required: l && this.useFormValidation } }, e.label);
      }
    })(), default: !e.type || ["operation", "expand"].includes(e.type) || e.dictKey ? ({ row: t, $index: r }) => r < 0 && !e.render ? p(t, e.prop) : n(r, () => (() => {
      var c;
      if (v(e.render))
        return e.render({ row: t, index: r, column: { ...e }, validator: d(r) });
      if (e != null && e.children)
        return e.children.map((o) => s(o));
      if ((e.fixed || e.type === "operation") && !e.slotKey)
        return ((o, m, h) => o.type === "operation" || o.fixed ? (o.operationType || (o.operationType = ["add", "edit", "view", "delete"]), o.fixed || (o.fixed = !!o), o.width || (o.width = "200"), x(X, { row: m, column: o, index: h })) : null)(e, t, r);
      if (this.$slots[e.slotKey] || this.$slots[e.prop])
        return (c = this.$slots[e.slotKey] || this.$slots[e.prop]) == null ? void 0 : c({ row: t, $index: r, index: r, column: { ...e }, validator: d(r), value: p(t, e.prop), propKey: e.prop });
      if (e.dictEnum) {
        const o = V(e.dictEnum, p(t, e.prop), { labelKey: "tagType" });
        if (o) {
          let m;
          return b(z, { type: o }, $(m = V(e.dictEnum, p(t, e.prop))) ? m : { default: () => [m] });
        }
        return V(e.dictEnum, p(t, e.prop));
      }
      if (typeof e.format == "function")
        return e.format(t);
      if (e.isFormatTime)
        return Q(p(t, e.prop) || "", "yyyy-MM-dd HH:mm:ss");
      const l = p(t, e.prop);
      return l || l === 0 ? l : "-";
    })(), t) : void 0 };
  }, s = (e) => {
    let y = {};
    if (e) {
      y = { ...R(e, ["children", "columnsExtra"]) };
      const d = E(e.columnsExtra);
      if (d && d.visible) {
        const p = R(d, ["visible"]);
        Object.assign(y, p);
      } else
        Object.assign(y, d);
    }
    const n = Object.assign({}, y, this.$props, J(e, ["label", "prop", "type"]));
    return b(I, n, f(e));
  };
  return s(i);
} }), ie = N(F({ name: "EpTable", props: { data: { type: Array, default: () => [] }, height: { type: [Number, String], default: "100%" }, tooltipEffect: { type: String, default: "dark" }, border: { type: Boolean, default: !1 }, highlightCurrentRow: { type: Boolean, default: !1 }, idKey: { type: String, default: "" }, column: { type: Array, default: () => [] }, useFormValidation: { type: Boolean, default: !1 }, formModelExtender: { type: Object, default: () => ({}) }, operationLabel: { type: Object, default: () => ({}) } }, emits: ["current-change", "selection-change", "click-row", "click-btn", "click-row-delete", "click-row-add", "click-row-view", "click-row-edit", "dbClick-row"], setup(i, { emit: u }) {
  const a = C(), f = C(), s = k(() => i.data), e = k(() => i.column.filter((t) => {
    var r, l;
    return E(t.columnsExtra) && typeof ((r = E(t.columnsExtra)) == null ? void 0 : r.visible) == "boolean" ? (l = E(t.columnsExtra)) == null ? void 0 : l.visible : t;
  }));
  P("EVENT-CLICKED", { btn: (...t) => u("click-btn", ...t), delete: (...t) => u("click-row-delete", ...t), view: (...t) => u("click-row-view", ...t), add: (...t) => u("click-row-add", ...t), edit: (...t) => u("click-row-edit", ...t) });
  const y = C(null), n = C(""), d = k(() => {
    if (i.useFormValidation)
      return { data: i.data, ...i.formModelExtender };
  }), p = (...t) => {
    var r;
    return a.value || console.warn("表单启用失败，useFormValidation 是否配置正确"), (r = a.value) == null ? void 0 : r.resetFields(...t);
  }, w = (...t) => {
    var r;
    return a.value || console.warn("表单启用失败，useFormValidation 是否配置正确"), (r = a.value) == null ? void 0 : r.clearValidate(...t);
  };
  return B(() => i.useFormValidation, (t) => {
    t || p();
  }), D(() => {
    i.data.length < 1 || i.useFormValidation && w();
  }), { czFormRef: a, zkTable: f, dataComputed: s, columnsComputed: e, formModels: d, currentId: n, currentRow: y, resetFields: p, clearValidate: w, validate: async (t, r) => {
    var c, o, m, h, g;
    if (!i.useFormValidation)
      return !0;
    if (t)
      try {
        return await ((c = a.value) == null ? void 0 : c.validate(r));
      } catch (j) {
        return l = Object.keys(j)[0], (h = (m = (o = a.value) == null ? void 0 : o.$el) == null ? void 0 : m.querySelector(`[field="${l}"]`)) == null || h.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }), Promise.reject(j);
      }
    var l;
    return (g = a.value) == null ? void 0 : g.validate(r);
  }, validateField: (...t) => {
    var r;
    return a.value ? (r = a.value) == null ? void 0 : r.validateField(...t) : (console.warn("表单启用失败，useFormValidation 是否配置正确"), Promise.resolve(!0));
  }, handleSelectionChange: (t) => {
    u("selection-change", t);
  }, handleRowDbClick: (t) => {
    u("dbClick-row", t);
  }, handleCurrentChange: (t) => {
    y.value = t, n.value = (t == null ? void 0 : t[i.idKey]) ?? "", u("current-change", t);
  }, setCurrentRow(t) {
    var r;
    (r = f.value) == null || r.setCurrentRow(t);
  }, toggleRowSelection(t, r) {
    var l;
    (l = f.value) == null || l.toggleRowSelection(t, r);
  }, clearSelection() {
    var t;
    (t = f.value) == null || t.clearSelection();
  } };
}, render() {
  let i;
  const u = () => {
    const s = Object.assign({}, this.$props, this.$attrs);
    return Reflect.deleteProperty(s, "column"), Reflect.deleteProperty(s, "formModelExtender"), Reflect.deleteProperty(s, "useFormValidation"), s;
  }, a = () => this.$props.highlightCurrentRow && this.$props.idKey ? b(I, { width: "35", align: "center" }, { default: ({ row: s }) => b(H, { modelValue: this.currentId, "onUpdate:modelValue": (e) => this.currentId = e, label: s[this.$props.idKey] }, { default: () => [L(" ")] }) }) : null;
  return b(A, { ref: "czFormRef", model: this.formModels }, typeof (f = i = b(_, S({ ref: "zkTable" }, u(), { "onRow-dblclick": this.handleRowDbClick, "onSelection-change": this.handleSelectionChange, "onCurrent-change": this.handleCurrentChange }), { default: () => [a(), this.$slots.default ? this.$slots.default() : this.columnsComputed.map((s) => b(M, { useFormValidation: this.useFormValidation, columns: this.columnsComputed, columnItem: s, key: s.prop || s.key }, this.$slots))] })) == "function" || Object.prototype.toString.call(f) === "[object Object]" && !O(f) ? i : { default: () => [i] });
  var f;
} })), ae = N(M);
export {
  ie as EpTable,
  ae as EpTableColumn
};
