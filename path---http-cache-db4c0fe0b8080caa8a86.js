webpackJsonp([0xaa66bafa3436],{366:function(e,n){e.exports={data:{site:{meta:{title:"Eloquent Code",description:"A personal blog",url:"https://yixuanxu.club/blog",author:"YixuanXu",twitter:"YixuanXu",adsense:""}},post:{id:"/Users/xuyixuan/Desktop/promer94.github.io/src/pages/articles/2018-04-23-http-cache/index.md absPath of file >>> MarkdownRemark",html:'<h1>HTTP 缓存</h1>\n<p>缓存是优化 web performance 的一个重要方面。</p>\n<ul>\n<li>缓存可以减少延迟，响应缓存过的资源会更迅速。</li>\n<li>\n<p>缓存可以减少流量，资源可以被复用而不是反复请求。</p>\n<!--more-->\n<p>现代浏览器中都实现了 HTTP 缓存技术来保证用户的访问体验。作为一个工程师，我们所需要做的则是保证服务器能正确的提供 HTTP header 信息，能让浏览器正确的使用缓存。</p>\n<h2>Cache-Control</h2>\n</li>\n<li>每一种资源都可以通过 Cache-Control 这个 HTTP header 定义它本身的缓存策略</li>\n<li>\n<p>Cache-Control 可以直接控制缓存的拥有者，条件和时间</p>\n<h3>无需验证的 Cache</h3>\n<p>通过将文件返回的 HTTP header 中的 Cache-Control 设置为\n<code class="language-text">Cache-Control:max-age=31536000</code>\n当浏览器接收到这个 header 之后，用户随后对同一文件的请求，浏览器将不会向服务器再发出请求，而是直接从本地缓存中读取。</p>\n<h3>用 ETag 验证缓存</h3>\n</li>\n<li>Server 使用 HTTP header 提供一个 validation token</li>\n<li>Token 将被用于下次的 request header, 如果server 资源未变换，则会返回304<br>\n<img src="https://i.loli.net/2018/11/22/5bf69d48e516f.png" alt="etag-304.png">\n我们可以看到浏览器返回了一个 If-None—Match 的 header，当 server 验证这个tag 之后，发现资源没有变化，则会返回一个 304，让浏览器从自己的缓存读取文件。 在这个过程中，尽管仍然有 HTTP 请求发生，但返回的 repsonse 大小比未缓存的情况减少了</li>\n<li>\n<p>如果 token 不相同，那么则会返回新的资源。\n<img src="https://i.loli.net/2018/11/22/5bf69d4b4d255.png" alt="etag-200.png"></p>\n<h3>Etag VS. Last-Modified</h3>\n</li>\n<li>\n<p>Etag和 Last-Modified 都是用于对资源进行验证。 Etag 属于强验证，他期望的是资源字节级别的一致； Last-modified 属于弱验证，比如资源的主要内容一致就可以了。</p>\n<h3>no-cache and no-store</h3>\n</li>\n<li>“no-cache” 并不意味着没有缓存，而是每一次使用缓存之前需要向服务器对缓存资源进行验证</li>\n<li>“no-store” 则意味着不适用任何缓存</li>\n<li>\n<p>“must-revalidate”: 如果 max-age 存在，当缓存资源有效时（小于 max-age）使用缓存，否则需要对资源进行验证。</p>\n<h3>public and private</h3>\n</li>\n<li>“public” 意味着该项资源是允许被 CDN 缓存的</li>\n<li>\n<p>“private” 往往代表该项资源是不允许被 CDN 缓存的。</p>\n<h3>max-age=0 and no-cache</h3>\n</li>\n<li>max-age=0 代表缓存已经过期，浏览器应该对资源进行 validation，检查 Etag。</li>\n<li>no-cache 代表浏览器每次在使用缓存之前应该强制对资源进行 validation。\n从理论上来说，两者的表现应该是一致的</li>\n</ul>',frontmatter:{layout:"post",title:"HTTP Cache",path:"/http-cache/",categories:["HTTP","Fundamental"],date:"2018/11/24"}}},pathContext:{path:"/http-cache/"}}}});
//# sourceMappingURL=path---http-cache-db4c0fe0b8080caa8a86.js.map