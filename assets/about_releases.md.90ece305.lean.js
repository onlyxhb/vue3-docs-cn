import{r as e,b as a,o as r,c as i,d as t,t as s,e as l,a as p}from"./app.d3508d1b.js";const n=t("h1",{id:"releases",tabindex:"-1"},[l("版本发布 "),t("a",{class:"header-anchor",href:"#releases","aria-hidden":"true"},"#")],-1),c={key:0},d=l(" 当前 Vue 的最新稳定版本是 "),h=l("。 "),o={key:1},u=p("",24),m=JSON.parse('{"title":"版本发布","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"发布周期","slug":"release-cycle","link":"#release-cycle","children":[]},{"level":2,"title":"语义化版本控制的特殊情况","slug":"semantic-versioning-edge-cases","link":"#semantic-versioning-edge-cases","children":[{"level":3,"title":"TypeScript 类型声明","slug":"typescript-definitions","link":"#typescript-definitions","children":[]},{"level":3,"title":"编译后的代码和旧版运行时之间的兼容性","slug":"compile-code-compatibility-with-older-runtime","link":"#compile-code-compatibility-with-older-runtime","children":[]}]},{"level":2,"title":"预发布版本","slug":"pre-releases","link":"#pre-releases","children":[]},{"level":2,"title":"废弃的特性","slug":"deprecations","link":"#deprecations","children":[]},{"level":2,"title":"RFC","slug":"rfcs","link":"#rfcs","children":[]},{"level":2,"title":"试验性特性","slug":"experimental-features","link":"#experimental-features","children":[]}],"relativePath":"about/releases.md"}'),f=Object.assign({name:"about/releases.md"},{setup(l){let p=e();return a((async()=>{const e=await fetch("https://api.github.com/repos/vuejs/core/releases?per_page=1");p.value=(await e.json())[0].name})),(e,a)=>(r(),i("div",null,[n,p.value?(r(),i("p",c,[d,t("strong",null,s(p.value),1),h])):(r(),i("p",o," 正在检测最新版本…… ")),u]))}});export{m as __pageData,f as default};
