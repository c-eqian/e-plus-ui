import{m as f,i as v,e as b}from"../app.390b7fa1.js";import{d as h,h as s,C as n,o as V,c as x,H as o,w as p,l as r,a as y}from"./framework.330b59dd.js";import"./theme.18bfc3c8.js";const B=h({__name:"slot",setup(C){const t=s(),m=v([{label:"名称",slotKey:"input",rules:!0,col:{span:24},prop:"name"},{label:"下拉框",type:"select",prop:"selectProp",rules:!0,col:{span:24},options:[{label:"vue",value:"vue"},{label:"react",value:"react"}]}]),c=s({name:"111",selectProp:""}),u=async()=>{var e;await((e=t.value)==null?void 0:e.validate()),b.success("校验通过")};return(e,k)=>{const d=n("el-input"),i=n("ep-button");return V(),x("div",null,[o(r(f),{ref_key:"epFormRef",ref:t,model:c.value,"form-items":r(m),"label-width":"70px"},{input:p(({model:a,item:l})=>[o(d,{modelValue:a[l.prop],"onUpdate:modelValue":_=>a[l.prop]=_,placeholder:"自定义插槽输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["model","form-items"]),o(i,{type:"normal",onClick:u},{default:p(()=>[y("提交")]),_:1})])}}});export{B as default};