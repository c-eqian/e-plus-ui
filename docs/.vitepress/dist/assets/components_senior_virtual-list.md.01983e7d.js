import{_ as n,C as t,o as p,c as C,H as o,w as e,k as s,a}from"./chunks/framework.330b59dd.js";const d=JSON.parse('{"title":"VirtualList 虚拟列表","description":"","frontmatter":{},"headers":[],"relativePath":"components/senior/virtual-list.md","filePath":"components/senior/virtual-list.md"}'),B={name:"components/senior/virtual-list.md"},D=s("h1",{id:"virtuallist-虚拟列表",tabindex:"-1"},[a("VirtualList 虚拟列表 "),s("a",{class:"header-anchor",href:"#virtuallist-虚拟列表","aria-label":'Permalink to "VirtualList 虚拟列表"'},"​")],-1),c=s("h3",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),A=s("p",null,"virtual-list/index",-1);function l(F,u,i,k,r,m){const E=t("Demo");return p(),C("div",null,[D,c,o(E,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20basicData%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Enumber%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20data%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Eany%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Efor%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20i%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%20i%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E100000%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%20i%3Cspan%20class%3D%22token%20operator%22%3E%2B%2B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20basicData%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Epush%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Ei%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eif%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Ei%20%3Cspan%20class%3D%22token%20operator%22%3E%25%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20data%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Epush%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Ei%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20%20%3Cspan%20class%3D%22token%20string%22%3E%22.%E6%8F%90%E7%A4%BA%E7%94%A8%E6%88%B7%E7%A1%AE%E8%AE%A4%E5%85%B6%E5%B7%B2%E7%BB%8F%E8%A7%A6%E5%8F%91%E7%9A%84%E5%8A%A8%E4%BD%9C%EF%BC%8C%E5%B9%B6%E8%AF%A2%E9%97%AE%E6%98%AF%E5%90%A6%E8%BF%9B%E8%A1%8C%E6%AD%A4%E6%93%8D%E4%BD%9C%E6%97%B6%E4%BC%9A%E7%94%A8%E5%88%B0%E6%AD%A4%E5%AF%B9%E8%AF%9D%E6%A1%86%E3%80%82%5Cn%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E%22%5Cn%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E%22%E8%B0%83%E7%94%A8%20ElMessageBox.confirm%20%E6%96%B9%E6%B3%95%E4%BB%A5%E6%89%93%E5%BC%80%20confirm%20%E6%A1%86%E3%80%82%E5%AE%83%E6%A8%A1%E6%8B%9F%E4%BA%86%E7%B3%BB%E7%BB%9F%E7%9A%84%20confirm%E3%80%82%20%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E%22Message%20Box%20%E7%BB%84%E4%BB%B6%E4%B9%9F%E6%8B%A5%E6%9C%89%E6%9E%81%E9%AB%98%E7%9A%84%E5%AE%9A%E5%88%B6%E6%80%A7%EF%BC%8C%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E4%BC%A0%E5%85%A5%20options%20%E4%BD%9C%E4%B8%BA%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%8C%E5%AE%83%E6%98%AF%E4%B8%80%E4%B8%AA%E5%AD%97%E9%9D%A2%E9%87%8F%E5%AF%B9%E8%B1%A1%E3%80%82%20%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E%22type%20%E5%AD%97%E6%AE%B5%E8%A1%A8%E6%98%8E%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%8F%AF%E4%BB%A5%E4%B8%BAsuccess%EF%BC%8Cerror%EF%BC%8Cinfo%E5%92%8C%20warning%EF%BC%8C%E6%97%A0%E6%95%88%E7%9A%84%E8%AE%BE%E7%BD%AE%E5%B0%86%E4%BC%9A%E8%A2%AB%E5%BF%BD%E7%95%A5%E3%80%82%20%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E%22%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84%E6%98%AF%EF%BC%8C%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%8F%82%E6%95%B0%20title%20%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E%22%E5%BF%85%E9%A1%BB%E5%AE%9A%E4%B9%89%E4%B8%BA%20String%20%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%98%AF%20Object%EF%BC%8C%E4%BC%9A%E8%A2%AB%E5%BD%93%E5%81%9A%E4%B8%BA%20options%E4%BD%BF%E7%94%A8%E3%80%82%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E%22%20%E5%9C%A8%E8%BF%99%E9%87%8C%E6%88%91%E4%BB%AC%E8%BF%94%E5%9B%9E%E4%BA%86%E4%B8%80%E4%B8%AA%20Promise%20%E6%9D%A5%E5%A4%84%E7%90%86%E5%90%8E%E7%BB%AD%E5%93%8D%E5%BA%94%E3%80%82%20%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eelse%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20data%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Epush%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Ei%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20%20%3Cspan%20class%3D%22token%20string%22%3E%22.%E6%8F%90%E7%A4%BA%E7%94%A8%E6%88%B7%E7%A1%AE%E8%AE%A4%E5%85%B6%E5%B7%B2%E7%BB%8F%E8%A7%A6%E5%8F%91%E7%9A%84%E5%8A%A8%E4%BD%9C%EF%BC%8C%E5%B9%B6%E8%AF%A2%E9%97%AE%E6%98%AF%E5%90%A6%E8%BF%9B%E8%A1%8C%E6%AD%A4%E6%93%8D%E4%BD%9C%E6%97%B6%E4%BC%9A%E7%94%A8%E5%88%B0%E6%AD%A4%E5%AF%B9%E8%AF%9D%E6%A1%86%E3%80%82%5Cn%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E%22%5Cn%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E%22%E8%B0%83%E7%94%A8%20ElMessageBox.confirm%20%E6%96%B9%E6%B3%95%E4%BB%A5%E6%89%93%E5%BC%80%20confirm%20%E6%A1%86%E3%80%82%20%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eep-virtual-list%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edata%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aitem-height%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E50%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23default%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20item%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eitem%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%20padding%3A%2015px%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eep-virtual-list%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Escss%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0D%0A%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"virtual-list/index","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0D%0A%20%20const%20basicData%20%3D%20ref%3Cnumber%5B%5D%3E(%5B%5D)%3B%0D%0A%20%20const%20data%20%3D%20ref%3Cany%5B%5D%3E(%5B%5D)%3B%0D%0A%0D%0A%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20100000%3B%20i%2B%2B)%20%7B%0D%0A%20%20%20%20basicData.value.push(i)%3B%0D%0A%20%20%20%20if%20(i%20%25%202%20%3D%3D%200)%7B%0D%0A%20%20%20%20%20%20data.value.push(i%20%2B%201%20%2B%20%20%22.%E6%8F%90%E7%A4%BA%E7%94%A8%E6%88%B7%E7%A1%AE%E8%AE%A4%E5%85%B6%E5%B7%B2%E7%BB%8F%E8%A7%A6%E5%8F%91%E7%9A%84%E5%8A%A8%E4%BD%9C%EF%BC%8C%E5%B9%B6%E8%AF%A2%E9%97%AE%E6%98%AF%E5%90%A6%E8%BF%9B%E8%A1%8C%E6%AD%A4%E6%93%8D%E4%BD%9C%E6%97%B6%E4%BC%9A%E7%94%A8%E5%88%B0%E6%AD%A4%E5%AF%B9%E8%AF%9D%E6%A1%86%E3%80%82%5Cn%22%20%2B%0D%0A%20%20%20%20%20%20%20%20%22%5Cn%22%20%2B%0D%0A%20%20%20%20%20%20%20%20%22%E8%B0%83%E7%94%A8%20ElMessageBox.confirm%20%E6%96%B9%E6%B3%95%E4%BB%A5%E6%89%93%E5%BC%80%20confirm%20%E6%A1%86%E3%80%82%E5%AE%83%E6%A8%A1%E6%8B%9F%E4%BA%86%E7%B3%BB%E7%BB%9F%E7%9A%84%20confirm%E3%80%82%20%22%20%2B%0D%0A%20%20%20%20%20%20%20%20%22Message%20Box%20%E7%BB%84%E4%BB%B6%E4%B9%9F%E6%8B%A5%E6%9C%89%E6%9E%81%E9%AB%98%E7%9A%84%E5%AE%9A%E5%88%B6%E6%80%A7%EF%BC%8C%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E4%BC%A0%E5%85%A5%20options%20%E4%BD%9C%E4%B8%BA%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%8C%E5%AE%83%E6%98%AF%E4%B8%80%E4%B8%AA%E5%AD%97%E9%9D%A2%E9%87%8F%E5%AF%B9%E8%B1%A1%E3%80%82%20%22%20%2B%0D%0A%20%20%20%20%20%20%20%20%22type%20%E5%AD%97%E6%AE%B5%E8%A1%A8%E6%98%8E%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%8F%AF%E4%BB%A5%E4%B8%BAsuccess%EF%BC%8Cerror%EF%BC%8Cinfo%E5%92%8C%20warning%EF%BC%8C%E6%97%A0%E6%95%88%E7%9A%84%E8%AE%BE%E7%BD%AE%E5%B0%86%E4%BC%9A%E8%A2%AB%E5%BF%BD%E7%95%A5%E3%80%82%20%22%20%2B%0D%0A%20%20%20%20%20%20%20%20%22%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84%E6%98%AF%EF%BC%8C%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%8F%82%E6%95%B0%20title%20%22%20%2B%0D%0A%20%20%20%20%20%20%20%20%22%E5%BF%85%E9%A1%BB%E5%AE%9A%E4%B9%89%E4%B8%BA%20String%20%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%98%AF%20Object%EF%BC%8C%E4%BC%9A%E8%A2%AB%E5%BD%93%E5%81%9A%E4%B8%BA%20options%E4%BD%BF%E7%94%A8%E3%80%82%22%20%2B%0D%0A%20%20%20%20%20%20%20%20%22%20%E5%9C%A8%E8%BF%99%E9%87%8C%E6%88%91%E4%BB%AC%E8%BF%94%E5%9B%9E%E4%BA%86%E4%B8%80%E4%B8%AA%20Promise%20%E6%9D%A5%E5%A4%84%E7%90%86%E5%90%8E%E7%BB%AD%E5%93%8D%E5%BA%94%E3%80%82%20%22%20)%3B%0D%0A%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20data.value.push(i%20%2B%201%20%2B%20%20%22.%E6%8F%90%E7%A4%BA%E7%94%A8%E6%88%B7%E7%A1%AE%E8%AE%A4%E5%85%B6%E5%B7%B2%E7%BB%8F%E8%A7%A6%E5%8F%91%E7%9A%84%E5%8A%A8%E4%BD%9C%EF%BC%8C%E5%B9%B6%E8%AF%A2%E9%97%AE%E6%98%AF%E5%90%A6%E8%BF%9B%E8%A1%8C%E6%AD%A4%E6%93%8D%E4%BD%9C%E6%97%B6%E4%BC%9A%E7%94%A8%E5%88%B0%E6%AD%A4%E5%AF%B9%E8%AF%9D%E6%A1%86%E3%80%82%5Cn%22%20%2B%0D%0A%20%20%20%20%20%20%20%20%22%5Cn%22%20%2B%0D%0A%20%20%20%20%20%20%20%20%22%E8%B0%83%E7%94%A8%20ElMessageBox.confirm%20%E6%96%B9%E6%B3%95%E4%BB%A5%E6%89%93%E5%BC%80%20confirm%20%E6%A1%86%E3%80%82%20%22%20)%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cep-virtual-list%20%3Adata%3D%22data%22%20%3Aitem-height%3D%2250%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23default%3D%22%7B%20item%20%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22item%22%20style%3D%22%20padding%3A%2015px%22%3E%0D%0A%20%20%20%20%20%20%20%20%7B%7B%20item%20%7D%7D%0D%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fep-virtual-list%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cstyle%20scoped%20lang%3D%22scss%22%3E%0D%0A%0D%0A%3C%2Fstyle%3E%0D%0A",description:""},{default:e(()=>[A]),_:1})])}const f=n(B,[["render",l]]);export{d as __pageData,f as default};