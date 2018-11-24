---
title: HTTP Cache
date: "2018-11-24"
layout: post
path: "/http-cache/"
categories:
  - HTTP
  - Fundamental
---
# HTTP 缓存
缓存是优化 web performance 的一个重要方面。
* 缓存可以减少延迟，响应缓存过的资源会更迅速。
* 缓存可以减少流量，资源可以被复用而不是反复请求。
<!--more-->
现代浏览器中都实现了 HTTP 缓存技术来保证用户的访问体验。作为一个工程师，我们所需要做的则是保证服务器能正确的提供 HTTP header 信息，能让浏览器正确的使用缓存。
## Cache-Control
* 每一种资源都可以通过 Cache-Control 这个 HTTP header 定义它本身的缓存策略
* Cache-Control 可以直接控制缓存的拥有者，条件和时间
### 无需验证的 Cache
通过将文件返回的 HTTP header 中的 Cache-Control 设置为
```Cache-Control:max-age=31536000```
当浏览器接收到这个 header 之后，用户随后对同一文件的请求，浏览器将不会向服务器再发出请求，而是直接从本地缓存中读取。
### 用 ETag 验证缓存
* Server 使用 HTTP header 提供一个 validation token
* Token 将被用于下次的 request header, 如果server 资源未变换，则会返回304  
![etag-304.png](https://i.loli.net/2018/11/22/5bf69d48e516f.png)
我们可以看到浏览器返回了一个 If-None—Match 的 header，当 server 验证这个tag 之后，发现资源没有变化，则会返回一个 304，让浏览器从自己的缓存读取文件。 在这个过程中，尽管仍然有 HTTP 请求发生，但返回的 repsonse 大小比未缓存的情况减少了
* 如果 token 不相同，那么则会返回新的资源。
![etag-200.png](https://i.loli.net/2018/11/22/5bf69d4b4d255.png)
### Etag VS. Last-Modified
* Etag和 Last-Modified 都是用于对资源进行验证。 Etag 属于强验证，他期望的是资源字节级别的一致； Last-modified 属于弱验证，比如资源的主要内容一致就可以了。
### no-cache and no-store
* "no-cache" 并不意味着没有缓存，而是每一次使用缓存之前需要向服务器对缓存资源进行验证
* "no-store" 则意味着不适用任何缓存
* "must-revalidate": 如果 max-age 存在，当缓存资源有效时（小于 max-age）使用缓存，否则需要对资源进行验证。
### public and private
* "public" 意味着该项资源是允许被 CDN 缓存的
* "private" 往往代表该项资源是不允许被 CDN 缓存的。
### max-age=0 and no-cache
* max-age=0 代表缓存已经过期，浏览器应该对资源进行 validation，检查 Etag。
* no-cache 代表浏览器每次在使用缓存之前应该强制对资源进行 validation。
从理论上来说，两者的表现应该是一致的