import { computed as T, inject as z, defineComponent as x, unref as e, openBlock as v, createBlock as E, mergeProps as g, ref as D, watch as $, onMounted as Y, withCtx as V, createElementBlock as O, Fragment as P, renderList as I, createTextVNode as C, toDisplayString as M, resolveComponent as B, withKeys as q, createSlots as A, resolveDynamicComponent as Z, toRef as J, provide as Q, watchEffect as ee, createVNode as k, isVNode as ae } from "vue";
import { Z as w, h as L, n as S, d as le } from "../_chunks/co-utils-vue/index.js";
import { ElCascader as te, ElCheckboxButton as oe, ElCheckbox as U, ElInput as W, ElInputNumber as re, ElRadioGroup as de, ElRadio as N, ElSelect as ne, ElOption as se, ElForm as me, ElRow as H, ElCol as G, ElFormItem as pe } from "element-plus";
import { _ as ue } from "../_plugin-vue_export-helper/index.js";
import { c as ie, w as ce } from "../utils/index.js";
const fe = { model: {} };
function F(n) {
  return T(() => n);
}
function _() {
  return T(() => z("EP-FORM-CONTEXT", fe));
}
const be = x({ name: "EpFormCascade", __name: "cascade", props: { item: { default: () => ({}) } }, setup(n) {
  const b = n, { prop: t, placeholder: d, label: a, disabled: r, elExtraPros: u = {} } = F(b.item).value, s = T(() => e(b.item.options)), { model: m } = _().value;
  return (i, c) => (v(), E(e(te), g({ modelValue: e(m)[e(t)], "onUpdate:modelValue": c[0] || (c[0] = (f) => e(m)[e(t)] = f), placeholder: e(d) || `请选择 ${e(a)}`, options: s.value, disabled: e(r) }, e(u)), null, 16, ["modelValue", "placeholder", "options", "disabled"]));
} }), he = x({ name: "EpFormCheckboxGroup", __name: "checkbox-group", props: { item: { default: () => ({}) } }, setup(n, { expose: b }) {
  const t = n, { prop: d, label: a, disabled: r, elExtraPros: u = {} } = F(t.item).value, { model: s } = _().value, m = (f) => {
    var l, o;
    return (o = (l = t.item) == null ? void 0 : l.change) == null ? void 0 : o.call(l, f);
  };
  b({ handleChange: m });
  const i = D([]), c = () => {
    i.value = t.item.options || [];
  };
  return $(() => [t.item.options], () => {
    c();
  }), Y(() => {
    c();
  }), (f, l) => i.value ? (v(), E(e(oe), g({ key: 0, modelValue: e(s)[e(d)], "onUpdate:modelValue": l[0] || (l[0] = (o) => e(s)[e(d)] = o) }, e(u), { disabled: e(r), onChange: m }), { default: V(() => [(v(!0), O(P, null, I(i.value, (o) => (v(), E(e(U), { key: o.value, label: o.value, disabled: o.disabled }, { default: V(() => [C(M(f.item.label), 1)]), _: 2 }, 1032, ["label", "disabled"]))), 128))]), _: 1 }, 16, ["modelValue", "disabled"])) : (v(), E(e(U), g({ key: 1, modelValue: e(s)[e(d)], "onUpdate:modelValue": l[1] || (l[1] = (o) => e(s)[e(d)] = o) }, e(u)), { default: V(() => [C(M(e(a)), 1)]), _: 1 }, 16, ["modelValue"]));
} }), ve = x({ name: "EpFormDateTime", __name: "datetime-picker", props: { item: { default: () => ({}) } }, setup(n, { expose: b }) {
  const t = n, { model: d } = _().value, { prop: a, placeholder: r, label: u, disabled: s, elExtraPros: m = {} } = F(t.item).value, i = (f) => {
    var l, o;
    return (o = (l = t.item) == null ? void 0 : l.change) == null ? void 0 : o.call(l, f);
  };
  b({ handleChange: i });
  const c = { format: "YYYY-MM-DD HH:mm:ss", "date-format": "MMM DD, YYYY", "time-format": "HH:mm" };
  return (f, l) => {
    const o = B("el-date-picker");
    return v(), E(o, g({ modelValue: e(d)[e(a)], "onUpdate:modelValue": l[0] || (l[0] = (p) => e(d)[e(a)] = p), placeholder: e(r) || `请选择 ${e(u)}` }, e(w)({}, c, e(m)), { type: "datetime", disabled: e(s), onChange: i }), null, 16, ["modelValue", "placeholder", "disabled"]);
  };
} }), ye = x({ name: "EpFormDateTimeRange", __name: "datetimerange-picker", props: { item: { default: () => ({}) } }, setup(n, { expose: b }) {
  const t = n, { model: d } = _().value, { prop: a, placeholder: r, label: u, disabled: s, elExtraPros: m = {}, dateTimeRange: i = [], disableDateTimeRange: c } = F(t.item).value, f = (p) => {
    var h, R;
    return (R = (h = t.item) == null ? void 0 : h.change) == null ? void 0 : R.call(h, p);
  };
  b({ handleChange: f });
  const l = { format: "YYYY-MM-DD HH:mm:ss", "date-format": "MMM DD, YYYY", "time-format": "HH:mm" }, o = (p) => t.item.isThanNow ? p.getTime() < Date.now() - 864e5 : t.item.isLessNow ? p.getTime() > Date.now() : !!L(c) && (c == null ? void 0 : c(p));
  return (p, h) => {
    var y, j;
    const R = B("el-date-picker");
    return v(), E(R, g({ modelValue: e(d)[e(a)], "onUpdate:modelValue": h[0] || (h[0] = (X) => e(d)[e(a)] = X), placeholder: e(r) || `请选择 ${e(u)}` }, Object.assign({}, l, e(m)), { type: "datetimerange", "start-placeholder": ((y = e(i)) == null ? void 0 : y[0]) || "开始日期", "end-placeholder": ((j = e(i)) == null ? void 0 : j[1]) || "结束日期", "disabled-date": o, disabled: e(s), onChange: f }), null, 16, ["modelValue", "placeholder", "start-placeholder", "end-placeholder", "disabled"]);
  };
} }), Ee = x({ name: "EpFormInput", __name: "input", props: { item: { default: () => ({}) } }, setup(n, { expose: b }) {
  const t = n, { prop: d, placeholder: a, label: r, readOnly: u, disabled: s, elExtraPros: m = {} } = F(t.item).value, { model: i } = _().value, c = (f) => {
    var l, o;
    return (o = (l = t.item) == null ? void 0 : l.enter) == null ? void 0 : o.call(l, f);
  };
  return b({ handleEnter: c }), (f, l) => {
    var o, p, h, R;
    return v(), E(e(W), g({ modelValue: e(i)[e(d)], "onUpdate:modelValue": l[0] || (l[0] = (y) => e(i)[e(d)] = y), modelModifiers: { trim: !0 }, placeholder: e(a) || `请输入 ${e(r)}` }, e(w)({}, { clearable: !0 }, e(m)), { disabled: e(s), readonly: e(u), onKeyup: l[1] || (l[1] = q(() => c(e(i)[e(d)]), ["enter"])) }), A({ _: 2 }, [(o = e(m)) != null && o.prefix ? { name: "prefix", fn: V(() => {
      var y;
      return [C(M((y = e(m)) == null ? void 0 : y.prefix), 1)];
    }), key: "0" } : void 0, (p = e(m)) != null && p.suffix ? { name: "suffix", fn: V(() => {
      var y;
      return [C(M((y = e(m)) == null ? void 0 : y.suffix), 1)];
    }), key: "1" } : void 0, (h = e(m)) != null && h.prepend ? { name: "prepend", fn: V(() => {
      var y;
      return [C(M((y = e(m)) == null ? void 0 : y.prepend), 1)];
    }), key: "2" } : void 0, (R = e(m)) != null && R.append ? { name: "append", fn: V(() => {
      var y;
      return [C(M((y = e(m)) == null ? void 0 : y.append), 1)];
    }), key: "3" } : void 0]), 1040, ["modelValue", "placeholder", "disabled", "readonly"]);
  };
} }), ge = x({ name: "EpFormInputNumber", __name: "input-number", props: { item: { default: () => ({}) } }, setup(n, { expose: b }) {
  const t = n, { model: d } = _().value, { prop: a, placeholder: r, label: u, readOnly: s, disabled: m, elExtraPros: i = {} } = F(t.item).value, c = (f) => {
    var l, o;
    return (o = (l = t.item) == null ? void 0 : l.enter) == null ? void 0 : o.call(l, f);
  };
  return b({ handleEnter: c }), (f, l) => (v(), E(e(re), g({ modelValue: e(d)[e(a)], "onUpdate:modelValue": l[0] || (l[0] = (o) => e(d)[e(a)] = o), modelModifiers: { trim: !0 }, placeholder: e(r) || `请输入 ${e(u)}` }, e(i), { disabled: e(m), readonly: e(s), onKeyup: l[1] || (l[1] = q(() => c(e(d)[e(a)]), ["enter"])) }), null, 16, ["modelValue", "placeholder", "disabled", "readonly"]));
} }), Ve = x({ name: "EpFormRadioGroup", __name: "radio-group", props: { item: { default: () => ({}) } }, setup(n, { expose: b }) {
  const t = n, { model: d } = _().value, { prop: a, label: r, disabled: u, elExtraPros: s = {}, options: m } = F(t.item).value, i = (l) => {
    var o, p;
    return (p = (o = t.item) == null ? void 0 : o.change) == null ? void 0 : p.call(o, l);
  };
  b({ handleChange: i });
  const c = D([]), f = async () => {
    c.value = t.item.options || [];
  };
  return $(() => m, () => {
    f();
  }), Y(() => {
    f();
  }), (l, o) => e(m) ? (v(), E(e(de), g({ key: 0, modelValue: e(d)[e(a)], "onUpdate:modelValue": o[0] || (o[0] = (p) => e(d)[e(a)] = p) }, e(s), { disabled: e(u), onChange: i }), { default: V(() => [(v(!0), O(P, null, I(c.value, (p) => (v(), E(e(N), { key: p.value, value: p.value, label: p.value }, { default: V(() => [C(M(p.label), 1)]), _: 2 }, 1032, ["value", "label"]))), 128))]), _: 1 }, 16, ["modelValue", "disabled"])) : (v(), E(e(N), g({ key: 1, modelValue: e(d)[e(a)], "onUpdate:modelValue": o[1] || (o[1] = (p) => e(d)[e(a)] = p), label: e(r) }, e(s)), { default: V(() => [C(M(t.item.label), 1)]), _: 1 }, 16, ["modelValue", "label"]));
} }), xe = x({ name: "EpFormSelect", __name: "select", props: { item: { default: () => ({}) } }, setup(n) {
  const b = n, t = (o) => {
    var p, h;
    return (h = (p = b.item) == null ? void 0 : p.change) == null ? void 0 : h.call(p, o);
  }, { model: d } = _().value, { prop: a, placeholder: r, label: u, disabled: s, width: m, options: i = [], elExtraPros: c = {} } = F(b.item).value, f = D([]), l = () => {
    f.value = i;
  };
  return $(() => i, () => {
    l();
  }), Y(() => {
    l();
  }), (o, p) => (v(), E(e(ne), g({ modelValue: e(d)[e(a)], "onUpdate:modelValue": p[0] || (p[0] = (h) => e(d)[e(a)] = h), placeholder: e(r) || `请选择 ${e(u)}` }, e(c), { style: { width: e(m) }, disabled: e(s), onChange: t }), { default: V(() => [(v(!0), O(P, null, I(f.value, (h) => (v(), E(e(se), { key: h.value, label: h.label, value: h.value, disabled: h == null ? void 0 : h.disabled }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 1 }, 16, ["modelValue", "placeholder", "style", "disabled"]));
} }), Fe = x({ name: "EpFormTextarea", __name: "textarea", props: { item: { default: () => ({}) } }, setup(n) {
  const b = n, { model: t } = _().value, { prop: d, placeholder: a, label: r, disabled: u, elExtraPros: s = {} } = F(b.item).value;
  return (m, i) => (v(), E(e(W), g({ modelValue: e(t)[e(d)], "onUpdate:modelValue": i[0] || (i[0] = (c) => e(t)[e(d)] = c), modelModifiers: { trim: !0 }, type: "textarea", disabled: e(u), placeholder: e(a) || `请输入 ${e(r)}` }, e(s)), null, 16, ["modelValue", "disabled", "placeholder"]));
} }), K = ue(x({ name: "EpComponent", components: { ...Object.freeze(Object.defineProperty({ __proto__: null, EpFormCascade: be, EpFormCheckboxGroup: he, EpFormDateTime: ve, EpFormDateTimeRange: ye, EpFormInput: Ee, EpFormInputNumber: ge, EpFormRadioGroup: Ve, EpFormSelect: xe, EpFormTextarea: Fe }, Symbol.toStringTag, { value: "Module" })) }, props: { name: { type: String, default: "" }, item: { type: Object, default: () => ({}) } }, setup: (n) => ({ props: n }) }), [["render", function(n, b, t, d, a, r) {
  return v(), E(Z(n.props.name), { key: n.props.name, item: n.props.item }, null, 8, ["item"]);
}]]), we = ce(x({ name: "EpForm", components: { EpComponent: K }, props: { model: { type: Object, default: () => {
} }, labelWidth: { type: String, default: "" }, formItems: { type: Array, default: () => [] } }, setup(n) {
  const b = J(n.model), t = D();
  Q("EP-FORM-CONTEXT", { model: b });
  const d = (...a) => {
    var r;
    return (r = t.value) == null ? void 0 : r.clearValidate(...a);
  };
  return ee(() => {
    n.formItems.length < 1 || d();
  }), { epFormRef: t, toRefModel: b, validate: async (a, r) => {
    var s, m, i, c, f;
    if (a)
      try {
        return await ((s = t.value) == null ? void 0 : s.validate(r));
      } catch (l) {
        return u = Object.keys(l)[0], (c = (i = (m = t.value) == null ? void 0 : m.$el) == null ? void 0 : i.querySelector(`[field="${u}"]`)) == null || c.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }), Promise.reject(l);
      }
    var u;
    return (f = t.value) == null ? void 0 : f.validate(r);
  }, resetFields: (...a) => {
    var r;
    return t.value || console.warn("表单启用失败"), (r = t.value) == null ? void 0 : r.resetFields(...a);
  }, clearValidate: d, validateField: (...a) => {
    var r;
    return t.value ? (r = t.value) == null ? void 0 : r.validateField(...a) : (console.warn("表单启用失败"), Promise.resolve(!0));
  } };
}, render() {
  let n;
  const b = (a) => ({ default: a ? () => {
    var r, u;
    return a.slotKey || this.$slots[a.prop] ? (u = (r = this.$slots)[a.slotKey || a.prop]) == null ? void 0 : u.call(r, { item: a, model: this.toRefModel }) : a.type ? k(K, { name: ie(`Ep-form-${a.type}`), item: { ...a }, key: a.type }, null) : null;
  } : void 0 }), t = (a) => L(a.validatorFn) ? { ...S(a, ["validator"]), validator: a.validatorFn(this.toRefModel) } : a, d = () => this.formItems.length ? this.formItems.map((a) => {
    var u;
    let r = {};
    return r = typeof a.col == "number" || (u = a.col) != null && u.span ? w(r, a.col) : w({ xs: 24, sm: 12, md: 12, lg: 8, xl: 8 }, a.col), k(G, r, { default: () => {
      return [k(pe, g({ field: a.prop }, { key: a.prop, label: a.label, prop: a.prop, rules: (s = a, typeof s.rules == "boolean" ? { required: s.rules, message: `${s.label} 为必填项`, trigger: "blur" } : le(s.rules) ? s.rules.map((m) => t(m)) : s.rules ? t(s.rules) : s.rules), labelWidth: a.width }), b(a))];
      var s;
    } });
  }) : null;
  return k("section", null, [k(me, g({ ref: "epFormRef", model: this.toRefModel }, w(S(this.$props, ["formItems", "model"]), this.$attrs)), { default: () => {
    return [k(H, null, (a = n = d(), typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !ae(a) ? n : { default: () => [n] })), this.$slots.default ? k(H, null, { default: () => [k(G, null, { default: () => {
      var r, u;
      return [(u = (r = this.$slots).default) == null ? void 0 : u.call(r)];
    } })] }) : null];
    var a;
  } })]);
} })), De = (n) => n;
export {
  we as default,
  De as defineFormItem
};
