import{d as n,r as t,ah as r,o as c,H as l,I as p,a as m,O as u}from"./framework.SULaAIX3.js";const _={class:"item",style:{padding:"15px"}},g=n({__name:"index",setup(f){const a=t([]),s=t([]);for(let e=0;e<1e5;e++)a.value.push(e),e%2===0?s.value.push(`${e+1}.提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

调用 ElMessageBox.confirm 方法以打开 confirm 框。它模拟了系统的 confirm。 Message Box 组件也拥有极高的定制性，我们可以传入 options 作为第三个参数，它是一个字面量对象。 type 字段表明消息类型，可以为success，error，info和 warning，无效的设置将会被忽略。 需要注意的是，第二个参数 title 必须定义为 String 类型，如果是 Object，会被当做为 options使用。 在这里我们返回了一个 Promise 来处理后续响应。 `):s.value.push(`${e+1}.提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

调用 ElMessageBox.confirm 方法以打开 confirm 框。 `);return(e,d)=>{const o=r("ep-virtual-list");return c(),l(o,{data:s.value,"item-height":50},{default:p(({item:i})=>[m("div",_,u(i),1)]),_:1},8,["data"])}}});export{g as default};
