import{s as f,d as _}from"./theme.l2bHattb.js";import{d as h,r as n,ah as p,o as y,H as b,I as s,a as l,Q as r,M as v,u as c}from"./framework.CH__HHFe.js";const S={class:"ep-py-4"},x={class:"ep-py-4"},C=h({__name:"search",setup(g){const o=n({name:"Eqian",post:"",dept:"",phone:"",motto:""}),t=n(),i=async()=>{var e;await((e=t.value)==null?void 0:e.validate()),console.log("获取表单值",o.value)},m=_({labelPosition:"right",columns:3,labelWidth:"70px",isSearch:!0,inline:!0,items:[{type:"input",label:"用户",prop:"name",defaultValue:"Eqian"},{type:"input",label:"岗位",prop:"post"},{type:"input",label:"部门",prop:"dept"},{type:"input",label:"手机号",prop:"phone"},{type:"input",label:"座右铭",prop:"motto"}]});return(e,a)=>{const d=p("el-button"),u=p("ep-card");return y(),b(u,{title:"搜索栏",shadow:"always"},{default:s(()=>[l("div",S,[l("div",x,[r(d,{onClick:i},{default:s(()=>a[0]||(a[0]=[v("获取表单")])),_:1})]),r(c(f),{ref_key:"formSchemaRef",ref:t,config:c(m),model:o.value},null,8,["config","model"])])]),_:1})}}});export{C as default};
