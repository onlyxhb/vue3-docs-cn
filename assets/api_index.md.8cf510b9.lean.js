import{g as e,r as t,h as r,o,c as n,e as a,D as c,E as i,F as s,n as p,t as h,u as x,l as d,A as l,B as m,_ as u,j as f}from"./app.2fc7153e.js";const v=JSON.parse('[{"text":"全局 API","anchor":"全局-api","items":[{"text":"应用实例","link":"/api/application","headers":[{"text":"createApp()","anchor":"createapp"},{"text":"createSSRApp()","anchor":"createssrapp"},{"text":"app.mount()","anchor":"app-mount"},{"text":"app.unmount()","anchor":"app-unmount"},{"text":"app.provide()","anchor":"app-provide"},{"text":"app.component()","anchor":"app-component"},{"text":"app.directive()","anchor":"app-directive"},{"text":"app.use()","anchor":"app-use"},{"text":"app.mixin()","anchor":"app-mixin"},{"text":"app.version","anchor":"app-version"},{"text":"app.config","anchor":"app-config"},{"text":"app.config.errorHandler","anchor":"app-config-errorhandler"},{"text":"app.config.warnHandler","anchor":"app-config-warnhandler"},{"text":"app.config.performance","anchor":"app-config-performance"},{"text":"app.config.compilerOptions","anchor":"app-config-compileroptions"},{"text":"app.config.globalProperties","anchor":"app-config-globalproperties"},{"text":"app.config.optionMergeStrategies","anchor":"app-config-optionmergestrategies"}]},{"text":"通用","link":"/api/general","headers":[{"text":"version","anchor":"version"},{"text":"nextTick()","anchor":"nexttick"},{"text":"defineComponent()","anchor":"definecomponent"},{"text":"defineAsyncComponent()","anchor":"defineasynccomponent"},{"text":"defineCustomElement()","anchor":"definecustomelement"}]}]},{"text":"组合式 API","anchor":"组合式-api","items":[{"text":"setup()","link":"/api/composition-api-setup","headers":[{"text":"基本使用","anchor":"basic-usage"},{"text":"访问 Props","anchor":"accessing-props"},{"text":"Setup 上下文","anchor":"setup-context"},{"text":"与渲染函数一起使用","anchor":"usage-with-render-functions"}]},{"text":"响应式: 核心","link":"/api/reactivity-core","headers":[{"text":"ref()","anchor":"ref"},{"text":"computed()","anchor":"computed"},{"text":"reactive()","anchor":"reactive"},{"text":"readonly()","anchor":"readonly"},{"text":"watchEffect()","anchor":"watcheffect"},{"text":"watchPostEffect()","anchor":"watchposteffect"},{"text":"watchSyncEffect()","anchor":"watchsynceffect"},{"text":"watch()","anchor":"watch"}]},{"text":"响应式: 工具","link":"/api/reactivity-utilities","headers":[{"text":"isRef()","anchor":"isref"},{"text":"unref()","anchor":"unref"},{"text":"toRef()","anchor":"toref"},{"text":"toRefs()","anchor":"torefs"},{"text":"isProxy()","anchor":"isproxy"},{"text":"isReactive()","anchor":"isreactive"},{"text":"isReadonly()","anchor":"isreadonly"}]},{"text":"响应式: 进阶","link":"/api/reactivity-advanced","headers":[{"text":"shallowRef()","anchor":"shallowref"},{"text":"triggerRef()","anchor":"triggerref"},{"text":"customRef()","anchor":"customref"},{"text":"shallowReactive()","anchor":"shallowreactive"},{"text":"shallowReadonly()","anchor":"shallowreadonly"},{"text":"toRaw()","anchor":"toraw"},{"text":"markRaw()","anchor":"markraw"},{"text":"effectScope()","anchor":"effectscope"},{"text":"getCurrentScope()","anchor":"getcurrentscope"},{"text":"onScopeDispose()","anchor":"onscopedispose"}]},{"text":"生命周期钩子","link":"/api/composition-api-lifecycle","headers":[{"text":"onMounted()","anchor":"onmounted"},{"text":"onUpdated()","anchor":"onupdated"},{"text":"onUnmounted()","anchor":"onunmounted"},{"text":"onBeforeMount()","anchor":"onbeforemount"},{"text":"onBeforeUpdate()","anchor":"onbeforeupdate"},{"text":"onBeforeUnmount()","anchor":"onbeforeunmount"},{"text":"onErrorCaptured()","anchor":"onerrorcaptured"},{"text":"onRenderTracked()","anchor":"onrendertracked"},{"text":"onRenderTriggered()","anchor":"onrendertriggered"},{"text":"onActivated()","anchor":"onactivated"},{"text":"onDeactivated()","anchor":"ondeactivated"},{"text":"onServerPrefetch()","anchor":"onserverprefetch"}]},{"text":"依赖注入","link":"/api/composition-api-dependency-injection","headers":[{"text":"provide()","anchor":"provide"},{"text":"inject()","anchor":"inject"}]}]},{"text":"选项式 API","anchor":"选项式-api","items":[{"text":"状态选项","link":"/api/options-state","headers":[{"text":"data","anchor":"data"},{"text":"props","anchor":"props"},{"text":"computed","anchor":"computed"},{"text":"methods","anchor":"methods"},{"text":"watch","anchor":"watch"},{"text":"emits","anchor":"emits"},{"text":"expose","anchor":"expose"}]},{"text":"渲染选项","link":"/api/options-rendering","headers":[{"text":"template","anchor":"template"},{"text":"render","anchor":"render"},{"text":"compilerOptions","anchor":"compileroptions"}]},{"text":"生命周期选项","link":"/api/options-lifecycle","headers":[{"text":"beforeCreate","anchor":"beforecreate"},{"text":"created","anchor":"created"},{"text":"beforeMount","anchor":"beforemount"},{"text":"mounted","anchor":"mounted"},{"text":"beforeUpdate","anchor":"beforeupdate"},{"text":"updated","anchor":"updated"},{"text":"beforeUnmount","anchor":"beforeunmount"},{"text":"unmounted","anchor":"unmounted"},{"text":"errorCaptured","anchor":"errorcaptured"},{"text":"renderTracked","anchor":"rendertracked"},{"text":"renderTriggered","anchor":"rendertriggered"},{"text":"activated","anchor":"activated"},{"text":"deactivated","anchor":"deactivated"},{"text":"serverPrefetch","anchor":"serverprefetch"}]},{"text":"组合选项","link":"/api/options-composition","headers":[{"text":"provide","anchor":"provide"},{"text":"inject","anchor":"inject"},{"text":"mixins","anchor":"mixins"},{"text":"extends","anchor":"extends"}]},{"text":"其他杂项","link":"/api/options-misc","headers":[{"text":"name","anchor":"name"},{"text":"inheritAttrs","anchor":"inheritattrs"},{"text":"components","anchor":"components"},{"text":"directives","anchor":"directives"}]},{"text":"组件实例","link":"/api/component-instance","headers":[{"text":"$data","anchor":"data"},{"text":"$props","anchor":"props"},{"text":"$el","anchor":"el"},{"text":"$options","anchor":"options"},{"text":"$parent","anchor":"parent"},{"text":"$root","anchor":"root"},{"text":"$slots","anchor":"slots"},{"text":"$refs","anchor":"refs"},{"text":"$attrs","anchor":"attrs"},{"text":"$watch()","anchor":"watch"},{"text":"$emit()","anchor":"emit"},{"text":"$forceUpdate()","anchor":"forceupdate"},{"text":"$nextTick()","anchor":"nexttick"}]}]},{"text":"内置内容","anchor":"内置内容","items":[{"text":"指令","link":"/api/built-in-directives","headers":[{"text":"v-text","anchor":"v-text"},{"text":"v-html","anchor":"v-html"},{"text":"v-show","anchor":"v-show"},{"text":"v-if","anchor":"v-if"},{"text":"v-else","anchor":"v-else"},{"text":"v-else-if","anchor":"v-else-if"},{"text":"v-for","anchor":"v-for"},{"text":"v-on","anchor":"v-on"},{"text":"v-bind","anchor":"v-bind"},{"text":"v-model","anchor":"v-model"},{"text":"v-slot","anchor":"v-slot"},{"text":"v-pre","anchor":"v-pre"},{"text":"v-once","anchor":"v-once"},{"text":"v-memo","anchor":"v-memo"},{"text":"v-cloak","anchor":"v-cloak"}]},{"text":"组件","link":"/api/built-in-components","headers":[{"text":"<Transition>","anchor":"transition"},{"text":"<TransitionGroup>","anchor":"transitiongroup"},{"text":"<KeepAlive>","anchor":"keepalive"},{"text":"<Teleport>","anchor":"teleport"},{"text":"<Suspense>","anchor":"suspense"}]},{"text":"特殊元素","link":"/api/built-in-special-elements","headers":[{"text":"<component>","anchor":"component"},{"text":"<slot>","anchor":"slot"}]},{"text":"特殊 Attributes","link":"/api/built-in-special-attributes","headers":[{"text":"key","anchor":"key"},{"text":"ref","anchor":"ref"},{"text":"is","anchor":"is"}]}]},{"text":"单文件组件","anchor":"单文件组件","items":[{"text":"语法定义","link":"/api/sfc-spec","headers":[{"text":"总览","anchor":"overview"},{"text":"相应语言块","anchor":"language-blocks"},{"text":"自动名称推导","anchor":"automatic-name-inference"},{"text":"预处理器","anchor":"pre-processors"},{"text":"Src 导入","anchor":"src-imports"},{"text":"注释","anchor":"comments"}]},{"text":"<script setup>","link":"/api/sfc-script-setup","headers":[{"text":"基本语法","anchor":"basic-syntax"},{"text":"响应式","anchor":"reactivity"},{"text":"使用组件","anchor":"using-components"},{"text":"使用自定义指令","anchor":"using-custom-directives"},{"text":"defineProps() 和 defineEmits()","anchor":"defineprops-defineemits"},{"text":"defineExpose()","anchor":"defineexpose"},{"text":"useSlots() 和 useAttrs()","anchor":"useslots-useattrs"},{"text":"与普通的 <script> 一起使用","anchor":"usage-alongside-normal-script"},{"text":"顶层 await","anchor":"top-level-await"},{"text":"针对 TypeScript 的功能","anchor":"typescript-only-features"},{"text":"限制","anchor":"restrictions"}]},{"text":"CSS 功能","link":"/api/sfc-css-features","headers":[{"text":"组件作用域 CSS","anchor":"scoped-css"},{"text":"CSS Modules","anchor":"css-modules"},{"text":"CSS 中的 v-bind()","anchor":"v-bind-in-css"}]}]},{"text":"进阶 API","anchor":"进阶-api","items":[{"text":"渲染函数","link":"/api/render-function","headers":[{"text":"h()","anchor":"h"},{"text":"mergeProps()","anchor":"mergeprops"},{"text":"cloneVNode()","anchor":"clonevnode"},{"text":"isVNode()","anchor":"isvnode"},{"text":"resolveComponent()","anchor":"resolvecomponent"},{"text":"resolveDirective()","anchor":"resolvedirective"},{"text":"withDirectives()","anchor":"withdirectives"},{"text":"withModifiers()","anchor":"withmodifiers"}]},{"text":"服务端渲染","link":"/api/ssr","headers":[{"text":"renderToString()","anchor":"rendertostring"},{"text":"renderToNodeStream()","anchor":"rendertonodestream"},{"text":"pipeToNodeWritable()","anchor":"pipetonodewritable"},{"text":"renderToWebStream()","anchor":"rendertowebstream"},{"text":"pipeToWebWritable()","anchor":"pipetowebwritable"},{"text":"renderToSimpleStream()","anchor":"rendertosimplestream"},{"text":"useSSRContext()","anchor":"usessrcontext"}]},{"text":"TypeScript 工具类型","link":"/api/utility-types","headers":[{"text":"PropType<T>","anchor":"proptype-t"},{"text":"ComponentCustomProperties","anchor":"componentcustomproperties"},{"text":"ComponentCustomOptions","anchor":"componentcustomoptions"},{"text":"ComponentCustomProps","anchor":"componentcustomprops"},{"text":"CSSProperties","anchor":"cssproperties"}]},{"text":"自定义渲染","link":"/api/custom-renderer","headers":[{"text":"createRenderer()","anchor":"createrenderer"}]}]}]'),g=e=>(l("data-v-e3753b9c"),e=e(),m(),e),k={id:"api-index"},w={class:"header"},b=g((()=>a("h1",null,"API 参考",-1))),y={class:"api-filter"},S=g((()=>a("label",{for:"api-filter"},"过滤",-1))),C=["id"],P={class:"api-groups"},T=["href"],A={key:0,class:"no-match"},R=u(e({__name:"ApiIndex",setup(e){const l=t(""),m=e=>e.toLowerCase().replace(/-/g," "),u=r((()=>{const e=m(l.value),t=t=>m(t).includes(e);return v.map((r=>{if(t(r.text))return r;const o=r.items.map((r=>{if(t(r.text))return r;if(e.includes("ssr")&&r.text.startsWith("Server"))return r;const o=r.headers.filter((({text:e,anchor:r})=>t(e)||t(r)));return o.length?{text:r.text,link:r.link,headers:o}:null})).filter((e=>e));return o.length?{text:r.text,items:o}:null})).filter((e=>e))}));return(e,t)=>(o(),n("div",k,[a("div",w,[b,a("div",y,[S,c(a("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e)},null,512),[[i,l.value]])])]),(o(!0),n(s,null,p(x(u),(e=>(o(),n("div",{key:e.text,class:"api-section"},[a("h2",{id:e.anchor},h(e.text),9,C),a("div",P,[(o(!0),n(s,null,p(e.items,(e=>(o(),n("div",{key:e.text,class:"api-group"},[a("h3",null,h(e.text),1),a("ul",null,[(o(!0),n(s,null,p(e.headers,(t=>(o(),n("li",{key:t.anchor},[a("a",{href:e.link+".html#"+t.anchor},h(t.text),9,T)])))),128))])])))),128))])])))),128)),x(u).length?d("",!0):(o(),n("div",A,' 没有匹配到 API "'+h(l.value)+'" ',1))]))}}),[["__scopeId","data-v-e3753b9c"]]),$=JSON.parse('{"title":"API 参考","description":"","frontmatter":{"title":"API 参考","sidebar":false,"page":true,"footer":false},"headers":[],"relativePath":"api/index.md"}'),I=Object.assign({name:"api/index.md"},{setup:e=>(e,t)=>(o(),n("div",null,[f(R)]))});export{$ as __pageData,I as default};
