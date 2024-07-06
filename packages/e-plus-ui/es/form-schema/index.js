import { unref as F, defineComponent as D, computed as j, inject as _, h as b, toRef as N, ref as x, provide as H, onMounted as L, createVNode as Z, reactive as z, nextTick as G, onUnmounted as J } from "vue";
import { ElInput as Q, ElCascader as W, ElRadio as X, ElSwitch as Y, ElCheckbox as ee, ElTimePicker as se, ElTimeSelect as te, ElDatePicker as le, ElSlider as ae, ElRate as re, ElInputNumber as oe, ElDivider as T, ElAutocomplete as ie, ElSelect as ne, ElCol as ce, ElFormItem as q, ElButton as $, ElForm as ue, ElRow as de } from "element-plus";
import { g as B, s as pe, b as R, v as me, Z as O, d as A, h as K, n as M, f as fe, K as ve } from "../_chunks/co-utils-vue/index.js";
import { w as Fe } from "../utils/index.js";
const he = (r, i) => {
  const { col: t = {} } = r;
  if (pe(t))
    return { span: t };
  if (R(t)) {
    const s = F(i);
    return { span: me(s) && +s > 0 && +s < 24 ? Math.floor(24 / +s) : 24 };
  }
  return O({}, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, t);
}, Ve = (r, i, t) => {
  const { rules: s, prop: e, label: l } = r;
  if (t)
    return { prop: e, label: l };
  const f = (p) => K(p.validatorFn) ? { field: e, ...M(p, ["validator"]), validator: p.validatorFn(i) } : p;
  return typeof s == "boolean" ? { prop: e, label: l, rules: { required: s, message: `${l} 为必填项`, trigger: "blur" } } : A(s) ? { prop: e, label: l, rules: s.map((p) => f(p)) } : s ? { prop: e, label: l, rules: f(s) } : { rules: s, prop: e, label: l };
}, ye = (r, i) => {
  const { placeholder: t, type: s, label: e, componentProps: l } = F(r), f = ["select", "date-picker", "time-select", "cascade", "time-picker"], p = ((v) => M(v, ["col", "slotKey", "type", "prop", "label", "componentProps", "rules"]))(F(r)), h = { placeholder: t || (s && f.includes(s) ? "请选择" + e : "请输入" + e), ...M(l ?? {}, ["slots"]) };
  if (l && !R(l)) {
    const { dynamicDisable: v } = l;
    return K(v) ? O(h, p, { disabled: v({ model: i(), item: F(r) }) }) : O(h, p);
  }
  return O(h, p);
}, d = /* @__PURE__ */ new Map();
d.set("input", Q), d.set("cascade", W), d.set("radio-group", X), d.set("switch", Y), d.set("checkbox-group", ee), d.set("time-picker", se), d.set("time-select", te), d.set("date-picker", le), d.set("slider", ae), d.set("rate", re), d.set("input-number", oe), d.set("divider", T), d.set("divider", T), d.set("autocomplete", ie), d.set("select", ne);
const U = Symbol("FORM_SCHEMA_MODEL"), be = D({ name: "EpFormItem", props: { item: { type: Object, default: () => ({}) }, columns: { type: Number, default: 3 }, isSearch: { type: Boolean, default: !1 } }, setup(r, { slots: i }) {
  const t = j(() => r.item), s = j(() => r.isSearch), e = j(() => r.columns), { type: l, render: f, slotKey: p, ...h } = t.value, v = _(U, {}), C = () => v, I = () => b(ce, { ...he(t.value, e) }, { default: () => b(q, { ...Ve(t.value, v, s.value) }, { default: () => (() => {
    var w, E, S, k, o;
    if (p || i[h.prop])
      return (w = i[p || h.prop]) == null ? void 0 : w.call(i, { item: t, model: v });
    if (K(f))
      return f({ item: F(t), model: v });
    if (B(l) && d.has(l)) {
      const m = d.get(l);
      return b(m, { modelValue: v.value[h.prop], "onUpdate:modelValue": (n) => {
        v.value[h.prop] = n;
      }, ...ye(t, C) }, { ...(S = (E = t.value) == null ? void 0 : E.componentProps) != null && S.slots ? (o = (k = t.value) == null ? void 0 : k.componentProps) == null ? void 0 : o.slots : {} });
    }
    return null;
  })() }) });
  return () => I();
} });
function ge(r, i, t) {
  let s = r;
  const e = i.split(".");
  for (let l = 0; l < e.length - 1; l++) {
    const f = e[l];
    s[f] || (s[f] = {}), s = s[f];
  }
  s[e[e.length - 1]] = t;
}
const we = D({ name: "FilterButtons", emits: ["search", "reset"], setup: (r, { emit: i }) => () => b("div", null, [b($, { icon: "Search", type: "primary", onClick: () => {
  i("search");
} }, () => "搜索"), b($, { icon: "Refresh", onClick(t) {
  i("reset");
} }, () => "重置")]) }), Ie = () => {
  const r = x(null), i = x(!1), t = async () => {
    const s = F(r);
    return s ? (await G(), s) : (console.warn("获取表单示例失败~~"), null);
  };
  return { registry: async (s) => {
    J(() => {
      r.value = null;
    }), F(r) === s && F(i) || (r.value = s, i.value = !0);
  }, validate: async (...s) => {
    const e = await t();
    return e == null ? void 0 : e.validate(...s);
  }, validateField: async (...s) => {
    const e = await t();
    return e == null ? void 0 : e.validateField(...s);
  }, resetFields: async (...s) => {
    const e = await t();
    return e == null ? void 0 : e.resetFields(...s);
  }, clearValidate: async (...s) => {
    const e = await t();
    return e == null ? void 0 : e.clearValidate(...s);
  }, scrollIntoView: async (...s) => {
    const e = await t();
    return e == null ? void 0 : e.scrollIntoView(...s);
  }, setFieldsValues: async (s) => {
    const e = await t();
    return e == null ? void 0 : e.setFieldsValues(s);
  }, getFieldsValues: (s = !0) => {
    const e = F(r);
    return e == null ? void 0 : e.getFieldsValues(s);
  }, appendFields: async (s, e) => {
    const l = await t();
    return l == null ? void 0 : l.appendFields(s, e);
  }, deleteField: async (s) => {
    const e = await t();
    return e == null ? void 0 : e.deleteField(s);
  }, getFormInstance: t };
}, je = (r) => r, Oe = Fe(D({ name: "EpFormSchema", props: { model: { type: Object, default: () => ({}) }, config: { type: Object, default: () => {
} } }, emits: ["registry", "search"], setup(r, { emit: i }) {
  const t = j(() => r.config), s = N(r.config.items), e = x(), l = N(R(r.model) ? (() => {
    const o = /* @__PURE__ */ Object.create(null);
    return s.value.forEach((m) => {
      B(m.prop) && (o[m.prop] = m.defaultValue ?? "");
    }), o;
  })() : r.model);
  H(U, l);
  const { validate: f, resetFields: p, clearValidate: h, validateField: v, scrollIntoView: C } = /* @__PURE__ */ ((o) => {
    const m = (n) => {
      var a, c, u;
      (u = (c = (a = o.value) == null ? void 0 : a.$el) == null ? void 0 : c.querySelector(`[field="${n}"]`)) == null || u.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    };
    return { validate: async (n, a) => {
      var c, u;
      if (n)
        try {
          return await ((c = o.value) == null ? void 0 : c.validate(a));
        } catch (V) {
          const y = V, g = Object.keys(y)[0];
          return m(g), Promise.reject(V);
        }
      return (u = o.value) == null ? void 0 : u.validate(a);
    }, resetFields: (...n) => {
      var a;
      return o.value ? (a = o.value) == null ? void 0 : a.resetFields(...n) : (console.warn("表单启用失败"), Promise.resolve(!0));
    }, clearValidate: (...n) => {
      var a;
      return (a = o.value) == null ? void 0 : a.clearValidate(...n);
    }, validateField: (...n) => {
      var a;
      return o.value ? (a = o.value) == null ? void 0 : a.validateField(...n) : (console.warn("表单启用失败"), Promise.resolve(!0));
    }, scrollIntoView: m };
  })(e), { appendFields: I, deleteField: w } = /* @__PURE__ */ ((o, m) => {
    const n = () => {
      const a = o();
      return Object.entries(F(a));
    };
    return { appendFields: (a, c) => {
      const u = o(), V = (y) => {
        A(a) ? u.value.splice(y, 0, ...a) : u.value.splice(y, 0, a);
      };
      if (B(c))
        for (const y of n()) {
          const [g, P] = y;
          if (P.prop && P.prop == c)
            return void V(+g + 1);
        }
      else
        V(typeof c != "boolean" || c ? u.value.length : 0);
      m(u.value);
    }, deleteField: (a) => {
      if (!a)
        return;
      const c = o();
      for (const u of n()) {
        const [V, y] = u;
        if (y.prop && y.prop == a)
          return c.value.splice(+V, 1), void m(c.value);
      }
    } };
  })(() => s, (o) => {
    s.value = o;
  }), { getFieldsValues: E, setFieldsValues: S, resetFieldsValues: k } = /* @__PURE__ */ ((o, m) => {
    const n = (a) => {
      if (!R(a))
        for (const c of Object.entries(a)) {
          const [u, V] = c;
          m(u, V);
        }
    };
    return { getFieldsValues: (a = !0) => {
      const c = F(o());
      if (!fe(c))
        return {};
      const u = {}, V = Object.entries(c);
      for (const y of V) {
        const [g, P] = y;
        a ? ge(u, g, P) : u[g] = P;
      }
      return u;
    }, setFieldsValues: n, resetFieldsValues: () => {
      const a = F(o());
      n(ve(a));
    } };
  })(() => l, (o, m) => {
    (o in l.value || s.value.map((n) => n.prop).filter(Boolean).includes(o)) && (l.value[o] = m);
  });
  return L(() => {
    i("registry", { validate: f, resetFields: p, clearValidate: h, validateField: v, setFieldsValues: S, resetFieldsValues: k, scrollIntoView: C, deleteField: w, appendFields: I, getFieldsValues: E });
  }), { formModel: l, formProps: t, items: s, emit: i, epFormSchemaRef: e, appendFields: I, setFieldsValues: S, getFieldsValues: E, resetFieldsValues: k, validate: f, deleteField: w, resetFields: p, clearValidate: h, validateField: v };
}, render() {
  const r = () => b(de, null, () => {
    const i = !!this.formProps.isSearch, t = this.formProps.columns, s = this.items.map((e) => b(be, { item: e, key: e.prop || e.label, isSearch: i, columns: t }));
    return i && s.push(b(q, null, () => b(we, { onSearch: () => this.emit("search", this.getFieldsValues()), onReset: () => {
      this.resetFieldsValues(), this.emit("search", {});
    } }))), s;
  });
  return Z("div", null, [(() => {
    const i = M(this.formProps, ["items", "isSearch"]);
    return b(ue, z({ model: this.formModel, ref: (t) => this.epFormSchemaRef = t, ...i }), () => r());
  })()]);
} }));
export {
  Oe as default,
  je as defineFormSchema,
  Ie as useFormSchema
};
