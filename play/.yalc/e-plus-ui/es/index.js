import a from "./button/index.js";
const t = { EpButton: a }, n = (o, s) => {
  for (const e of Object.keys(t))
    o.use(t[e], s);
}, f = { install: n };
export {
  a as EpButton,
  f as default,
  n as install
};
