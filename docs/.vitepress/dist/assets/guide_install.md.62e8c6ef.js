import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.330b59dd.js";const b=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install.md","filePath":"guide/install.md"}'),l={name:"guide/install.md"},e=p(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p><code>EPlus-UI</code>，一个精心打造的基于<code>element-plus</code>的组件库，<code>EPlus-UI</code>旨在消除冗余代码，让开发过程变得更为高效、流畅，强调灵活性和可配置性。 它允许开发者通过简单的配置操作，轻松调整组件的行为和交互逻辑。在开发过程中，EPlus-UI提供了丰富的文档和示例代码，帮助开发者快速上手并理解组件的使用方法和最佳实践</p><h1 id="安装使用" tabindex="-1">安装使用 <a class="header-anchor" href="#安装使用" aria-label="Permalink to &quot;安装使用&quot;">​</a></h1><p>本节将介绍如何在项目中使用 EPlus-UI</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>使用 npm 或 yarn 安装</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install e-plus-ui</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn add e-plus-ui</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install e-plus-ui</span></span>
<span class="line"><span style="color:#24292e;">yarn add e-plus-ui</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="引入-e-plus-ui" tabindex="-1">引入 e-plus-ui <a class="header-anchor" href="#引入-e-plus-ui" aria-label="Permalink to &quot;引入 e-plus-ui&quot;">​</a></h2><h3 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-label="Permalink to &quot;完整引入&quot;">​</a></h3><h4 id="需要注意的是-css-样式文件需要单独引入。" tabindex="-1">需要注意的是 css 样式文件需要单独引入。 <a class="header-anchor" href="#需要注意的是-css-样式文件需要单独引入。" aria-label="Permalink to &quot;需要注意的是 css 样式文件需要单独引入。&quot;">​</a></h4><p>在 main.js 中写入以下内容：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./App.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 导入组件库</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> EPlusUI </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;e-plus-ui&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;e-plus-ui/lib/index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App);</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(EPlusUI);</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./App.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 导入组件库</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> EPlusUI </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;e-plus-ui&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;e-plus-ui/lib/index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(EPlusUI);</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><br><h2 id="愉快开始" tabindex="-1">愉快开始 <a class="header-anchor" href="#愉快开始" aria-label="Permalink to &quot;愉快开始&quot;">​</a></h2><h4 id="至此-eplus-ui-就引入完成并且可以使用了。" tabindex="-1">至此 EPlus-UI 就引入完成并且可以使用了。 <a class="header-anchor" href="#至此-eplus-ui-就引入完成并且可以使用了。" aria-label="Permalink to &quot;至此 EPlus-UI 就引入完成并且可以使用了。&quot;">​</a></h4><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ep-button</span><span style="color:#E1E4E8;">&gt;默认按钮&lt;/</span><span style="color:#85E89D;">ep-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ep-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;主要按钮&lt;/</span><span style="color:#85E89D;">ep-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ep-button</span><span style="color:#24292E;">&gt;默认按钮&lt;/</span><span style="color:#22863A;">ep-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ep-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;主要按钮&lt;/</span><span style="color:#22863A;">ep-button</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><br><h2 id="按需引用" tabindex="-1">按需引用 <a class="header-anchor" href="#按需引用" aria-label="Permalink to &quot;按需引用&quot;">​</a></h2><h4 id="您可以根据个人需要使用按需引用组件-按需引用时不需要使用-app-use-方法注册。" tabindex="-1">您可以根据个人需要使用按需引用组件，按需引用时不需要使用 <code>app.use()</code> 方法注册。 <a class="header-anchor" href="#您可以根据个人需要使用按需引用组件-按需引用时不需要使用-app-use-方法注册。" aria-label="Permalink to &quot;您可以根据个人需要使用按需引用组件，按需引用时不需要使用 \`app.use()\` 方法注册。&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*js*/</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EpButton } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;e-plus-ui&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*js*/</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { EpButton } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;e-plus-ui&#39;</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><br><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ep-button</span><span style="color:#E1E4E8;">&gt;点击&lt;/</span><span style="color:#85E89D;">ep-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ep-button</span><span style="color:#24292E;">&gt;点击&lt;/</span><span style="color:#22863A;">ep-button</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><br>`,23),o=[e];function t(r,c,i,u,E,y){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{b as __pageData,h as default};
