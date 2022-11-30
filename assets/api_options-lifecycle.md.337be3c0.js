import{_ as s,C as n,o as a,c as l,j as p,e as o,d as e,a as t}from"./app.2fc7153e.js";const c=JSON.parse('{"title":"生命周期选项","description":"","frontmatter":{},"headers":[{"level":2,"title":"beforeCreate","slug":"beforecreate","link":"#beforecreate","children":[]},{"level":2,"title":"created","slug":"created","link":"#created","children":[]},{"level":2,"title":"beforeMount","slug":"beforemount","link":"#beforemount","children":[]},{"level":2,"title":"mounted","slug":"mounted","link":"#mounted","children":[]},{"level":2,"title":"beforeUpdate","slug":"beforeupdate","link":"#beforeupdate","children":[]},{"level":2,"title":"updated","slug":"updated","link":"#updated","children":[]},{"level":2,"title":"beforeUnmount","slug":"beforeunmount","link":"#beforeunmount","children":[]},{"level":2,"title":"unmounted","slug":"unmounted","link":"#unmounted","children":[]},{"level":2,"title":"errorCaptured","slug":"errorcaptured","link":"#errorcaptured","children":[]},{"level":2,"title":"renderTracked","slug":"rendertracked","link":"#rendertracked","children":[]},{"level":2,"title":"renderTriggered","slug":"rendertriggered","link":"#rendertriggered","children":[]},{"level":2,"title":"activated","slug":"activated","link":"#activated","children":[]},{"level":2,"title":"deactivated","slug":"deactivated","link":"#deactivated","children":[]},{"level":2,"title":"serverPrefetch","slug":"serverprefetch","link":"#serverprefetch","children":[]}],"relativePath":"api/options-lifecycle.md"}'),r={name:"api/options-lifecycle.md"},i=o("h1",{id:"options-lifecycle",tabindex:"-1"},[e("生命周期选项 "),o("a",{class:"header-anchor",href:"#options-lifecycle","aria-hidden":"true"},"#")],-1),y=t('<div class="info custom-block"><p class="custom-block-title">参考</p><p>对于生命周期钩子的通用使用方法，请看<a href="/vue3-docs-cn/guide/essentials/lifecycle.html">指南 - 生命周期钩子</a></p></div><h2 id="beforecreate" tabindex="-1">beforeCreate <a class="header-anchor" href="#beforecreate" aria-hidden="true">#</a></h2><p>在组件实例初始化完成之后立即调用。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">beforeCreate</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>会在实例初始化完成、props 解析之后、<code>data()</code> 和 <code>computed</code> 等选项处理之前立即调用。</p><p>注意，组合式 API 中的 <code>setup()</code> 钩子会在所有选项式 API 钩子之前调用，<code>beforeCreate()</code> 也不例外。</p></li></ul><h2 id="created" tabindex="-1">created <a class="header-anchor" href="#created" aria-hidden="true">#</a></h2><p>在组件实例处理完所有与状态相关的选项后调用。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>当这个钩子被调用时，以下内容已经设置完成：响应式数据、计算属性、方法和侦听器。然而，此时挂载阶段还未开始，因此 <code>$el</code> 属性仍不可用。</p></li></ul><h2 id="beforemount" tabindex="-1">beforeMount <a class="header-anchor" href="#beforemount" aria-hidden="true">#</a></h2><p>在组件被挂载之前调用。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">beforeMount</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。</p><p><strong>这个钩子在服务端渲染时不会被调用。</strong></p></li></ul><h2 id="mounted" tabindex="-1">mounted <a class="header-anchor" href="#mounted" aria-hidden="true">#</a></h2><p>在组件被挂载之后调用。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>组件在以下情况下被视为已挂载：</p><ul><li><p>所有同步子组件都已经被挂载。(不包含异步组件或 <code>&lt;Suspense&gt;</code> 树内的组件)</p></li><li><p>其自身的 DOM 树已经创建完成并插入了父容器中。注意仅当根容器在文档中时，才可以保证组件 DOM 树也在文档中。</p></li></ul><p>这个钩子通常用于执行需要访问组件所渲染的 DOM 树相关的副作用，或是在<a href="/vue3-docs-cn/guide/scaling-up/ssr.html">服务端渲染应用</a>中用于确保 DOM 相关代码仅在客户端被调用。</p><p><strong>这个钩子在服务端渲染时不会被调用。</strong></p></li></ul><h2 id="beforeupdate" tabindex="-1">beforeUpdate <a class="header-anchor" href="#beforeupdate" aria-hidden="true">#</a></h2><p>在组件即将因为一个响应式状态变更而更新其 DOM 树之前调用。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">beforeUpdate</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>这个钩子可以用来在 Vue 更新 DOM 之前访问 DOM 状态。在这个钩子中更改状态也是安全的。</p><p><strong>这个钩子在服务端渲染时不会被调用。</strong></p></li></ul><h2 id="updated" tabindex="-1">updated <a class="header-anchor" href="#updated" aria-hidden="true">#</a></h2><p>在组件因为一个响应式状态变更而更新其 DOM 树之后调用。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">updated</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>父组件的更新钩子将在其子组件的更新钩子之后调用。</p><p>这个钩子会在组件的任意 DOM 更新后被调用，这些更新可能是由不同的状态变更导致的。如果你需要在某个特定的状态更改后访问更新后的 DOM，请使用 <a href="/vue3-docs-cn/api/general.html#nexttick">nextTick()</a> 作为替代。</p><p><strong>这个钩子在服务端渲染时不会被调用。</strong></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环！</p></div></li></ul><h2 id="beforeunmount" tabindex="-1">beforeUnmount <a class="header-anchor" href="#beforeunmount" aria-hidden="true">#</a></h2><p>在一个组件实例被卸载之前调用。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">beforeUnmount</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>当这个钩子被调用时，组件实例依然还保有全部的功能。</p><p><strong>这个钩子在服务端渲染时不会被调用。</strong></p></li></ul><h2 id="unmounted" tabindex="-1">unmounted <a class="header-anchor" href="#unmounted" aria-hidden="true">#</a></h2><p>在一个组件实例被卸载之后调用。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">unmounted</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>一个组件在以下情况下被视为已卸载：</p><ul><li><p>其所有子组件都已经被卸载。</p></li><li><p>所有相关的响应式作用 (渲染作用以及 <code>setup()</code> 时创建的计算属性和侦听器) 都已经停止。</p></li></ul><p>可以在这个钩子中手动清理一些副作用，例如计时器、DOM 事件监听器或者与服务器的连接。</p><p><strong>这个钩子在服务端渲染时不会被调用。</strong></p></li></ul><h2 id="errorcaptured" tabindex="-1">errorCaptured <a class="header-anchor" href="#errorcaptured" aria-hidden="true">#</a></h2><p>在捕获了后代组件传递的错误时调用。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">errorCaptured</span><span style="color:#89DDFF;">?(</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>错误可以从以下几个来源中捕获：</p><ul><li>组件渲染</li><li>事件处理器</li><li>生命周期钩子</li><li><code>setup()</code> 函数</li><li>侦听器</li><li>自定义指令钩子</li><li>过渡钩子</li></ul><p>这个钩子带有三个实参：错误对象、触发该错误的组件实例，以及一个说明错误来源类型的信息字符串。</p><p>你可以在 <code>errorCaptured()</code> 中更改组件状态来为用户显示一个错误状态。然而重要的是，不要让错误状态渲染为导致本次错误的内容，否则组件就会进入无限的渲染循环中。</p><p>这个钩子可以通过返回 <code>false</code> 来阻止错误继续向上传递。请看下方的传递细节介绍。</p><p><strong>错误传递规则</strong></p><ul><li><p>默认情况下，所有的错误都会被发送到应用级的 <a href="/vue3-docs-cn/api/application.html#app-config-errorhandler"><code>app.config.errorHandler</code></a> (前提是这个函数已经定义)，这样这些错误都能在一个统一的地方报告给分析服务。</p></li><li><p>如果组件的继承链或组件链上存在多个 <code>errorCaptured</code> 钩子，对于同一个错误，这些钩子会被按从底至上的顺序一一调用。这个过程被称为“向上传递”，类似于原生 DOM 事件的冒泡机制。</p></li><li><p>如果 <code>errorCaptured</code> 钩子本身抛出了一个错误，那么这个错误和原来捕获到的错误都将被发送到 <code>app.config.errorHandler</code>。</p></li><li><p><code>errorCaptured</code> 钩子可以通过返回 <code>false</code> 来阻止错误继续向上传递。即表示“这个错误已经被处理了，应当被忽略”，它将阻止其他的 <code>errorCaptured</code> 钩子或 <code>app.config.errorHandler</code> 因这个错误而被调用。</p></li></ul></li></ul><h2 id="rendertracked" tabindex="-1">renderTracked <sup class="vt-badge dev-only"></sup> <a class="header-anchor" href="#rendertracked" aria-hidden="true">#</a></h2><p>在一个响应式依赖被组件的渲染作用追踪后调用。</p><p><strong>这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。</strong></p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">renderTracked</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DebuggerEvent</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DebuggerEvent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">effect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReactiveEffect</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TrackOpTypes</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* &#39;get&#39; | &#39;has&#39; | &#39;iterate&#39; */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>参考</strong>：<a href="/vue3-docs-cn/guide/extras/reactivity-in-depth.html">深入响应式系统</a></p></li></ul><h2 id="rendertriggered" tabindex="-1">renderTriggered <sup class="vt-badge dev-only"></sup> <a class="header-anchor" href="#rendertriggered" aria-hidden="true">#</a></h2><p>在一个响应式依赖被组件触发了重新渲染之后调用。</p><p><strong>这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。</strong></p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">renderTriggered</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DebuggerEvent</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DebuggerEvent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">effect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReactiveEffect</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TriggerOpTypes</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* &#39;set&#39; | &#39;add&#39; | &#39;delete&#39; | &#39;clear&#39; */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">newValue</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">oldValue</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">oldTarget</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Set</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>参考</strong>：<a href="/vue3-docs-cn/guide/extras/reactivity-in-depth.html">深入响应式系统</a></p></li></ul><h2 id="activated" tabindex="-1">activated <a class="header-anchor" href="#activated" aria-hidden="true">#</a></h2><p>若组件实例是 <a href="/vue3-docs-cn/api/built-in-components.html#keepalive"><code>&lt;KeepAlive&gt;</code></a> 缓存树的一部分，当组件被插入到 DOM 中时调用。</p><p><strong>这个钩子在服务端渲染时不会被调用。</strong></p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">activated</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>参考</strong>：<a href="/vue3-docs-cn/guide/built-ins/keep-alive.html#lifecycle-of-cached-instance">指南 - 被缓存实例的生命周期</a></p></li></ul><h2 id="deactivated" tabindex="-1">deactivated <a class="header-anchor" href="#deactivated" aria-hidden="true">#</a></h2><p>若组件实例是 <a href="/vue3-docs-cn/api/built-in-components.html#keepalive"><code>&lt;KeepAlive&gt;</code></a> 缓存树的一部分，当组件从 DOM 中被移除时调用。</p><p><strong>这个钩子在服务端渲染时不会被调用。</strong></p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">deactivated</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>参考</strong>：<a href="/vue3-docs-cn/guide/built-ins/keep-alive.html#lifecycle-of-cached-instance">指南 - 被缓存实例的生命周期</a></p></li></ul><h2 id="serverprefetch" tabindex="-1">serverPrefetch <sup class="vt-badge" data-text="SSR only"></sup> <a class="header-anchor" href="#serverprefetch" aria-hidden="true">#</a></h2><p>当组件实例在服务器上被渲染之前要完成的异步函数。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">serverPrefetch</span><span style="color:#89DDFF;">?(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>如果这个钩子返回了一个 Promise，服务端渲染会在渲染该组件前等待该 Promise 完成。</p><p>这个钩子仅会在服务端渲染中执行，可以用于执行一些仅在服务端才有的数据抓取过程。</p></li><li><p><strong>示例</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">serverPrefetch</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// 组件会作为初次请求的一部分被渲染</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// 会在服务端预抓取数据，因为这比客户端更快</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fetchOnServer</span><span style="color:#F07178;">(</span><span style="color:#676E95;">/* ... */</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 如果数据在挂载时是 null，这意味着这个组件</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 是在客户端动态渲染的，请另外执行一个</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// 客户端请求作为替代</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fetchOnClient</span><span style="color:#F07178;">(</span><span style="color:#676E95;">/* ... */</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>参考</strong>：<a href="/vue3-docs-cn/guide/scaling-up/ssr.html">服务端渲染</a></p></li></ul>',47);const F=s(r,[["render",function(s,o,e,t,c,r){const F=n("VueJobs");return a(),l("div",null,[i,p(F),y])}]]);export{c as __pageData,F as default};
