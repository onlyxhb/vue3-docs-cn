import{_ as s,C as n,o as a,c as l,j as p,e as o,d as e,a as t}from"./app.2fc7153e.js";const c=JSON.parse('{"title":"组件实例","description":"","frontmatter":{},"headers":[{"level":2,"title":"$data","slug":"data","link":"#data","children":[]},{"level":2,"title":"$props","slug":"props","link":"#props","children":[]},{"level":2,"title":"$el","slug":"el","link":"#el","children":[]},{"level":2,"title":"$options","slug":"options","link":"#options","children":[]},{"level":2,"title":"$parent","slug":"parent","link":"#parent","children":[]},{"level":2,"title":"$root","slug":"root","link":"#root","children":[]},{"level":2,"title":"$slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"$refs","slug":"refs","link":"#refs","children":[]},{"level":2,"title":"$attrs","slug":"attrs","link":"#attrs","children":[]},{"level":2,"title":"$watch()","slug":"watch","link":"#watch","children":[]},{"level":2,"title":"$emit()","slug":"emit","link":"#emit","children":[]},{"level":2,"title":"$forceUpdate()","slug":"forceupdate","link":"#forceupdate","children":[]},{"level":2,"title":"$nextTick()","slug":"nexttick","link":"#nexttick","children":[]}],"relativePath":"api/component-instance.md"}'),r={name:"api/component-instance.md"},y=o("h1",{id:"component-instance",tabindex:"-1"},[e("组件实例 "),o("a",{class:"header-anchor",href:"#component-instance","aria-hidden":"true"},"#")],-1),i=t('<div class="info custom-block"><p class="custom-block-title">INFO</p><p>本页文档描述了组件公共实例 (即 <code>this</code>) 上暴露的内置属性和方法，</p><p>本页罗列的所有属性，除了 <code>$data</code> 下的嵌套属性之外，都是只读的。</p></div><h2 id="data" tabindex="-1">$data <a class="header-anchor" href="#data" aria-hidden="true">#</a></h2><p>从 <a href="./options-state.html#data"><code>data</code></a> 选项函数中返回的对象，会被组件赋为响应式。组件实例将会代理对其数据对象的属性访问。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li></ul><h2 id="props" tabindex="-1">$props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><p>表示组件当前已解析的 props 对象。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>这里只包含通过 <a href="./options-state.html#props"><code>props</code></a> 选项声明的 props。组件实例将会代理对其 props 对象上属性的访问。</p></li></ul><h2 id="el" tabindex="-1">$el <a class="header-anchor" href="#el" aria-hidden="true">#</a></h2><p>该组件实例管理的 DOM 根节点。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Node</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p><code>$el</code> 直到组件<a href="./options-lifecycle.html#mounted">挂载完成 (mounted)</a> 之前都会是 <code>undefined</code>。</p><ul><li>对于单一根元素的组件，<code>$el</code> 将会指向该根元素。</li><li>对于以文本节点为根的组件，<code>$el</code> 将会指向该文本节点。</li><li>对于以多个元素为根的组件，<code>$el</code> 将是一个仅作占位符的 DOM 节点，Vue 使用它来跟踪组件在 DOM 中的位置 (文本节点或 SSR 激活模式下的注释节点)。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>为保持一致性，我们推荐使用<a href="/vue3-docs-cn/guide/essentials/template-refs.html">模板引用</a>来直接访问元素而不是依赖 <code>$el</code>。</p></div></li></ul><h2 id="options" tabindex="-1">$options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h2><p>已解析的用于实例化当前组件的组件选项。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentOptions</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>这个 <code>$options</code> 对象暴露了当前组件的已解析选项，并且会是以下几种可能来源的合并结果：</p><ul><li>全局 mixin</li><li>组件 <code>extends</code> 的基组件</li><li>组件级 mixin</li></ul><p>它通常用于支持自定义组件选项：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">customOption</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">customOption</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// =&gt; &#39;foo&#39;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>参考：</strong><a href="/vue3-docs-cn/api/application.html#app-config-optionmergestrategies"><code>app.config.optionMergeStrategies</code></a></p></li></ul><h2 id="parent" tabindex="-1">$parent <a class="header-anchor" href="#parent" aria-hidden="true">#</a></h2><p>当前组件可能存在的父组件实例，如果当前组件是顶层组件，则为 <code>null</code>。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$parent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li></ul><h2 id="root" tabindex="-1">$root <a class="header-anchor" href="#root" aria-hidden="true">#</a></h2><p>当前组件树的根组件实例。如果当前实例没有父组件，那么这个值就是它自己。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li></ul><h2 id="slots" tabindex="-1">$slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><p>一个表示父组件所传入<a href="/vue3-docs-cn/guide/components/slots.html">插槽</a>的对象。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$slots</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> [</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Slot</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Slot</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VNode</span><span style="color:#A6ACCD;">[]</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>通常用于手写<a href="/vue3-docs-cn/guide/extras/render-function.html">渲染函数</a>，但也可用于检测是否存在插槽。</p><p>每一个插槽都在 <code>this.$slots</code> 上暴露为一个函数，返回一个 vnode 数组，同时 key 名对应着插槽名。默认插槽暴露为 <code>this.$slots.default</code>。</p><p>如果插槽是一个<a href="/vue3-docs-cn/guide/components/slots.html#scoped-slots">作用域插槽</a>，传递给该插槽函数的参数可以作为插槽的 prop 提供给插槽。</p></li><li><p><strong>参考</strong>：<a href="/vue3-docs-cn/guide/extras/render-function.html#rendering-slots">渲染函数 - 渲染插槽</a></p></li></ul><h2 id="refs" tabindex="-1">$refs <a class="header-anchor" href="#refs" aria-hidden="true">#</a></h2><p>一个包含 DOM 元素和组件实例的对象，通过<a href="/vue3-docs-cn/guide/essentials/template-refs.html">模板引用</a>注册。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$refs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> [</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>参考：</strong></p><ul><li><a href="/vue3-docs-cn/guide/essentials/template-refs.html">模板引用</a></li><li><a href="./built-in-special-attributes.html#ref">特殊 Attribute - ref</a></li></ul></li></ul><h2 id="attrs" tabindex="-1">$attrs <a class="header-anchor" href="#attrs" aria-hidden="true">#</a></h2><p>一个包含了组件所有透传 attributes 的对象。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$attrs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p><a href="/vue3-docs-cn/guide/components/attrs.html">透传 Attributes</a> 是指由父组件传入，且没有被子组件声明为 props 或是组件自定义事件的 attributes 和事件处理函数。</p><p>默认情况下，若是单一根节点组件，<code>$attrs</code> 中的所有属性都是直接自动继承自组件的根元素。而多根节点组件则不会如此，同时你也可以通过配置 <a href="./options-misc.html#inheritattrs"><code>inheritAttrs</code></a> 选项来显式地关闭该行为。</p></li><li><p><strong>参考：</strong></p><ul><li><a href="/vue3-docs-cn/guide/components/attrs.html">透传 Attribute</a></li></ul></li></ul><h2 id="watch" tabindex="-1">$watch() <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h2><p>用于命令式地创建侦听器的 API。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$watch</span><span style="color:#89DDFF;">(</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WatchCallback</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WatchOptions</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StopHandle</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WatchCallback</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">oldValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">onCleanup</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cleanupFn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WatchOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">immediate</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// default: false</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">deep</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// default: false</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">flush</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pre</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sync</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// default: &#39;pre&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">onTrack</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DebuggerEvent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">onTrigger</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DebuggerEvent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StopHandle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>第一个参数是侦听来源。可以是一个组件的属性名的字符串，一个简单的由点分隔的路径字符串，或是一个 getter 函数。</p><p>第二个参数是回调函数。它接收的参数分别是侦听来源的新值、旧值。</p><ul><li><strong><code>immediate</code></strong>：指定在侦听器创建时是否立即触发回调。在第一次调用时旧值为 <code>undefined</code>。</li><li><strong><code>deep</code></strong>：指定在侦听来源是一个对象时，是否强制深度遍历，这样回调函数就会在深层级发生变更时被触发。详见<a href="/vue3-docs-cn/guide/essentials/watchers.html#deep-watchers">深层侦听器</a>。</li><li><strong><code>flush</code></strong>：指定回调函数的刷新时机。详见<a href="/vue3-docs-cn/guide/essentials/watchers.html#callback-flush-timing">回调刷新时机</a>及 <a href="/vue3-docs-cn/api/reactivity-core.html#watcheffect"><code>watchEffect()</code></a>。</li><li><strong><code>onTrack / onTrigger</code></strong>：调试侦听器的依赖，详见<a href="/vue3-docs-cn/guide/extras/reactivity-in-depth.html#watcher-debugging">侦听器调试</a>。</li></ul></li><li><p><strong>示例</strong></p><p>侦听一个属性名：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$watch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">newVal</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">oldVal</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>侦听一个由 <code>.</code> 分隔的路径：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$watch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a.b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">newVal</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">oldVal</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>对更复杂表达式使用 getter 函数：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$watch</span><span style="color:#A6ACCD;">(</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 每一次这个 `this.a + this.b` 表达式生成一个</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 不同的结果，处理函数都会被调用</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 这就好像我们在侦听一个计算属性</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 而不定义计算属性本身。</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">newVal</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">oldVal</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>停止该侦听器：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> unwatch </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$watch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cb)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">// 之后……</span></span>\n<span class="line"><span style="color:#82AAFF;">unwatch</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>参考：</strong></p><ul><li><a href="/vue3-docs-cn/api/options-state.html#watch">选项 - <code>watch</code></a></li><li><a href="/vue3-docs-cn/guide/essentials/watchers.html">指南 - 侦听器</a></li></ul></li></ul><h2 id="emit" tabindex="-1">$emit() <a class="header-anchor" href="#emit" aria-hidden="true">#</a></h2><p>在当前组件触发一个自定义事件。任何额外的参数都会传递给事件监听器的回调函数。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$emit</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>示例</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// 仅触发事件</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$emit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// 带有额外的参数</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$emit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>参考：</strong></p><ul><li><a href="/vue3-docs-cn/guide/components/events.html">组件 - 事件</a></li><li><a href="./options-state.html#emits"><code>emits</code> 选项</a></li></ul></li></ul><h2 id="forceupdate" tabindex="-1">$forceUpdate() <a class="header-anchor" href="#forceupdate" aria-hidden="true">#</a></h2><p>强制该组件重新渲染。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$forceUpdate</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>鉴于 Vue 的全自动响应性系统，这个功能应该很少会被用到。唯一可能需要它的情况是，你使用高阶响应式 API 显式创建了一个非响应式的组件状态。</p></li></ul><h2 id="nexttick" tabindex="-1">$nextTick() <a class="header-anchor" href="#nexttick" aria-hidden="true">#</a></h2><p>绑定在实例上的 <a href="./general.html#nexttick"><code>nextTick()</code></a> 函数。</p><ul><li><p><strong>类型</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">$nextTick</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentPublicInstance</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>和全局版本的 <code>nextTick()</code> 的唯一区别就是组件传递给 <code>this.$nextTick()</code> 的回调函数会带上 <code>this</code> 上下文，其绑定了当前组件实例。</p></li><li><p><strong>参考：</strong><a href="./general.html#nexttick"><code>nextTick()</code></a></p></li></ul>',40);const C=s(r,[["render",function(s,o,e,t,c,r){const C=n("VueJobs");return a(),l("div",null,[y,p(C),i])}]]);export{c as __pageData,C as default};
