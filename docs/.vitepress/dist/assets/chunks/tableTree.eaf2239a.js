import{s as e}from"../app.390b7fa1.js";import{d as t}from"./type.aa34847a.js";import{d,h as a,C as m,o as p,b as c,l as i,az as o}from"./framework.330b59dd.js";import"./theme.18bfc3c8.js";const C=d({__name:"tableTree",setup(u){const n=a(),r=a([{id:1,date:"2016-05-03",name:"Tom",age:18,address:"深圳"},{id:2,date:"2016-05-02",name:"Tom",age:18,address:"北京",children:[{id:3,age:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:4,age:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]}]),l=t([{label:"用户信息",prop:"",render:()=>[o(e,{label:"姓名",prop:"name"}),o(e,{label:"年龄1",prop:"age"})]},{label:"日期",prop:"date"}]);return(b,f)=>{const s=m("ep-table");return p(),c(s,{ref_key:"epTableRef",ref:n,data:r.value,"row-key":"id",column:i(l)},null,8,["data","column"])}}});export{C as default};
