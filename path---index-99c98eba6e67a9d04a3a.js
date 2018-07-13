webpackJsonp([0x81b8806e4260],{364:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Eloquent Code",description:"A personal blog",url:"https://promer94.github.io",author:"YixuanXu",twitter:"YixuanXu",adsense:""}},remark:{posts:[{post:{html:'<h1>闭包</h1>\n<p> 对于 JavaScript 的初学者来说，闭包算是一个难点。 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">MDN</a> 的 JavaScript 文档对闭包的概念给出了准确的定义，也提供了简单直观的的实例，是一个非常好的学习材料。 这篇文章将从文档出发，对闭包的知识点进行一个简单的梳理。</p>\n<!--more-->\n<h2>闭包是什么</h2>\n<p>首先我们需要对闭包提供一个准确的定义。 在文档中，闭包的定义是 ‘A closure is the combination of a function and the lexical environment within which that function was declared’。这个定义非常的拗口，我们只需要留有一个印象。真正理解定义最好方式就是通过实际的代码。 假设：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span> <span class="token comment">// name 是一个被 init 创建的局部变量</span>\n   <span class="token keyword">function</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n       <span class="token comment">// displayName() 是内部函数,一个闭包</span>\n       <span class="token function">alert</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用了父函数中声明的变量</span>\n   <span class="token punctuation">}</span>\n   <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span>\n<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>通过以上的代码块来看，我们可以简单总结为闭包是 ‘一个拥有外部变量的函数’。 例子中的函数 <code class="language-text">displayname</code>可以调用不属于自己的外部变量<code class="language-text">name</code>，不管此 <code class="language-text">displayName</code> 函数最终是否被返回，实际上由 <code class="language-text">name</code> 和 <code class="language-text">displayName</code> 组成的闭包已经形成了。  </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"> <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span> <span class="token comment">// name 是一个被 init 创建的局部变量</span>\n    <span class="token keyword">function</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n        <span class="token comment">// displayName() 是内部函数,一个闭包</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用了父函数中声明的变量</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 闭包被返回</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> fun <span class="token operator">=</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>上面的新代码块的区别在于函数<code class="language-text">init</code>返回了一个函数<code class="language-text">displayName</code>。通过这个返回的函数，我们就可以访问这个函数所相关联的词法环境或者说数据。本来应该被销毁的<code class="language-text">name</code>变量保留了下来，而且只能通过调用函数的方式来访问，这也就是私有性。 </p>\n<hr>\n<h2>闭包的作用</h2>\n<p>实际上在上一个例子中，我们已经看到了闭包的作用，闭包可以用来模拟私有变量和方法。 它让函数和函数所操作的某些数据联系了起来。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">makeCounter</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> privateCounter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">function</span> <span class="token function">changeBy</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    privateCounter <span class="token operator">+=</span> val<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    increment<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">changeBy</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    decrement<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">changeBy</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> privateCounter<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>  \n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> Counter1 <span class="token operator">=</span> <span class="token function">makeCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Counter2 <span class="token operator">=</span> <span class="token function">makeCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Counter1<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* logs 0 */</span>\nCounter1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nCounter1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Counter1<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* logs 2 */</span>\nCounter1<span class="token punctuation">.</span><span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Counter1<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* logs 1 */</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Counter2<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* logs 0 */</span></code></pre>\n      </div>\n<p>在上面的例子中文门可以看到 <code class="language-text">privateCounter</code>和<code class="language-text">changeBy</code>作为下面三个函数共同的词法环境形成了闭包。在<code class="language-text">makeCounter</code>执行之后，本该消失的词法环境被保留下来，只能通过返回的三个函数进行更改和访问。</p>\n<hr>\n<h2>在循环中创建闭包：一个常见错误；</h2>\n<p>在 ECMAScript 2015 引入 let 这个关键字之前，有一个常见的在循环中创建闭包的错误。</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>help<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Helpful notes will appear here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>E-mail: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Age: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">showHelp</span><span class="token punctuation">(</span>help<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'help\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> help<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">setupHelp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> helpText <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span><span class="token string">\'id\'</span><span class="token punctuation">:</span> <span class="token string">\'email\'</span><span class="token punctuation">,</span> <span class="token string">\'help\'</span><span class="token punctuation">:</span> <span class="token string">\'Your e-mail address\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span><span class="token string">\'id\'</span><span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span> <span class="token string">\'help\'</span><span class="token punctuation">:</span> <span class="token string">\'Your full name\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span><span class="token string">\'id\'</span><span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span> <span class="token string">\'help\'</span><span class="token punctuation">:</span> <span class="token string">\'Your age (you must be over 16)\'</span><span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> helpText<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> item <span class="token operator">=</span> helpText<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onfocus</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">showHelp</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>help<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">setupHelp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>这段代码执行的结果就是，无论你选择哪一个输入框，helper 信息都会显示为第三个。原因就是返回三个闭包实际上共享了由<code class="language-text">var</code>这个关键词创建的 <code class="language-text">item</code>这一个词法环境。闭包只会捕获自由变量的引用，所以三个闭包中的<code class="language-text">item</code>都指向了第三个 helper text。根据这一点我们可以将代码修改如下</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">setupHelpAnonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> helpText <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span><span class="token string">\'id\'</span><span class="token punctuation">:</span> <span class="token string">\'email\'</span><span class="token punctuation">,</span> <span class="token string">\'help\'</span><span class="token punctuation">:</span> <span class="token string">\'Your e-mail address\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span><span class="token string">\'id\'</span><span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span> <span class="token string">\'help\'</span><span class="token punctuation">:</span> <span class="token string">\'Your full name\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span><span class="token string">\'id\'</span><span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span> <span class="token string">\'help\'</span><span class="token punctuation">:</span> <span class="token string">\'Your age (you must be over 16)\'</span><span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> helpText<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">var</span> item <span class="token operator">=</span> helpText<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> item <span class="token operator">=</span> helpText<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onfocus</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">showHelp</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>help<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">setupHelpAnonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>在上面的代码片段中，通过使用一个 IIFE(立即执行函数表达式)对<code class="language-text">item</code>进行了立刻求值。通过这种方式<code class="language-text">onfocus</code>就能获取到正确的 helpText。在 ES6 引入了‘block scope’之后，我们可以使用 <code class="language-text">let</code> 关键字更优雅的解决这个错误</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">showHelp</span><span class="token punctuation">(</span>help<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'help\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> help<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">setupHelp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> helpText <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span><span class="token string">\'id\'</span><span class="token punctuation">:</span> <span class="token string">\'email\'</span><span class="token punctuation">,</span> <span class="token string">\'help\'</span><span class="token punctuation">:</span> <span class="token string">\'Your e-mail address\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span><span class="token string">\'id\'</span><span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span> <span class="token string">\'help\'</span><span class="token punctuation">:</span> <span class="token string">\'Your full name\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span><span class="token string">\'id\'</span><span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span> <span class="token string">\'help\'</span><span class="token punctuation">:</span> <span class="token string">\'Your age (you must be over 16)\'</span><span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> helpText<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> item <span class="token operator">=</span> helpText<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onfocus</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">showHelp</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>help<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">setupHelp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>每一次循环，都有一个新的 item 被创建，三个函数不再共享同一个词法环境。</p>',frontmatter:{layout:"post",title:"JavaScript Closure",path:"/javascript-closure/",categories:["JavaScript","Fundamental"],date:"2018/04/02"}}},{post:{html:'<h1>如何在 Mac 上配置你的 GPG 秘钥</h1>\n<p>我们在 github 查看 commit history 的时候，很容易发现有一些 commit 显示为 verified，有一些则不是。\n<img src="https://preview.ibb.co/i1W7HT/git_gpg.png" alt="pic"></p>\n<p>点开 verified\b 的提示，\b可以看到这些提交\b都是经过 GPG 签名产生的。</p>\n<!--more-->\n<h2>GPG 的作用</h2>\n<p>GPG 秘钥可以用来给你的本地\b commit 签名，确保\b\b提交者是可信的。这确保了整个 git\b 历史的可信度。</p>\n<h2>GPG 在 mac 上的配置方法</h2>\n<p>方法默认\b已安装 <a href="https://brew.sh/">Homebrew</a>\b</p>\n<ol>\n<li>执行 <code class="language-text">brew install gpg</code> 安装依赖。</li>\n<li>输入 <code class="language-text">gpg --full-generate-key</code> \b按照提示\b完成配置，在第三部\b\b步选择时长的时候，个人使用可以填 0，表示永不过期。最后的密码可以选填。</li>\n<li>安装完成后输入 <code class="language-text">gpg --list-keys</code> 查看刚刚生成的秘钥，pub 下\b的那一长段就是GPG-\b\bID。</li>\n<li>输入 <code class="language-text">gpg --armor --export pub GPG-ID</code> 把公钥复制出来，拷贝到 <a href="https://github.com/settings/keys">GitHub GPG Keys</a> 上</li>\n<li>输入 <code class="language-text">git config --global user.signingkey GPG-ID</code> 来配置使用。</li>\n<li>单次提交时\b使用 \b<code class="language-text">git commit -S</code> 参数来开启 GPG key，或者使用 <code class="language-text">git config --global commit.gpgsign true</code> 设置为全局默认使用。</li>\n<li>如果在 commit 的过程出现了签名错误的情况可以尝试执行 <code class="language-text">echo &#39;export GPG_TTY=$(tty)&#39; &gt;&gt; ~/.bash_profile</code> \b将 gpg 密钥添加到你的\b bash profile 中。\b如果你使用的是其他 shell，\b替换成你的 shell\b 配置文件即可。</li>\n<li>如果还有其他的问题可以查阅 <a href="https://help.github.com/articles/signing-commits-with-gpg/">Github</a>\b\n\b  </li>\n</ol>',frontmatter:{layout:"post",title:"使用 GPG 为你的 git commit 签名",path:"/git-gpg/",categories:["Git"],date:"2018/07/13"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-99c98eba6e67a9d04a3a.js.map