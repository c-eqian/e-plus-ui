import p from "./form/index.js";
import { defineFormItem as O } from "./form/index.js";
import e from "./form-schema/index.js";
import { defineFormSchema as w, useFormSchema as z } from "./form-schema/index.js";
import t from "./button/index.js";
import i from "./card/index.js";
import s from "./copy-text/index.js";
import E from "./line/index.js";
import n from "./image-hover/index.js";
import f from "./letter-cude/index.js";
import l from "./diamond/index.js";
import d from "./loading/index.js";
import { EpTable as L, EpTableColumn as u } from "./table/index.js";
import c from "./virtual-list/index.js";
const D = (o) => o, m = { EpButton: t, EpCard: i, EpLine: E, EpCopyText: s, EpImageHover: n, EpLetterLoading: f, EpDiamondLoading: l, EpLoading: d, EpVirtualList: c, EpTable: L, EpTableColumn: u, EpFormSchema: e, EpForm: p }, g = (o, r) => {
  for (const a of Object.keys(m))
    console.log(a), o.use(m[a], r);
}, H = { install: g };
export {
  t as EpButton,
  i as EpCard,
  s as EpCopyText,
  l as EpDiamondLoading,
  p as EpForm,
  e as EpFormSchema,
  n as EpImageHover,
  f as EpLetterLoading,
  E as EpLine,
  d as EpLoading,
  L as EpTable,
  u as EpTableColumn,
  c as EpVirtualList,
  H as default,
  O as defineFormItem,
  w as defineFormSchema,
  D as defineTableColumns,
  g as install,
  z as useFormSchema
};
