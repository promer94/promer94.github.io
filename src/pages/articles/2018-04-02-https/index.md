---
title: What is https
date: "2018-09-02"
layout: post
path: "/https-explain/"
categories:
  - http
  - Fundamental
---
## https 与 http
http 协议是当前互联网中最流行的协议之一，但 http 协议本身存在很大的安全漏洞。明文传输的 http 协议已经不适合这个时代了。 https 协议正是为了解决这个问题而诞生的。https 协议又被称为 http over TLS，http over SSL。 它通过 http 协议进行通信，利用 TLS/SSL 来加密数据包。
<!--more-->
## https 的工作原理
在讨论 https 之前，复习一下 http 协议的工作方式是很重要的。 我们可以使用 curl 这个命令行工具来观察一下一个典型的 http 通信过程。
![540300e8.png](https://i.loli.net/2018/11/14/5beb9597e10cb.png)
在最开始的三行，可以看到一个典型的 tcp 三次握手过程，接着的就是 http 的 request header，紧接着的就是 response header 和 body。http 最大的问题就在于所有的通信都是明文传输，任何人都能够截取到通信内容。所以必须引入一个加密机制来保护通信。
### 对称加密
说到加密，最典型的加密方式都是对称加密。通信双方 A B 共享一个秘钥，用同一个秘钥进行加密解密。对称加密最大的问题在于秘钥的分发。秘钥一旦泄露，加密也就失效了。
### 非对称加密
跟对称加密相对的，还有一种非对称加密的方式。 A B 各自拥有自己的公钥跟私钥，A B 互相交换公钥。 当需要传输信息时，用对方的公钥加密，对方就能使用私钥解密。同时起到签名的作用，确保信息的来源。非对称加密是比较安全的，但是会比对称加密消耗更多的资源。
### https 需要解决的问题
* Privacy
https 必须能保证隐私，通信内容应该被加密。
* Integrity
https 必须能保证通信内容的完整性，确保通信内容没有被篡改过。
* Identification
https 必须能使通信双方确认对方的身份
### 一个简化的 https 的流程
我们还是可以使用 curl 来了解整个通信的过程
![0b4a7270.png](https://i.loli.net/2018/11/14/5beb95cc10ba7.png)
* 首先我们可以看到熟悉的三次握手，然后 client 将 tls 版本号和 加密算法备选列表（cypher suite）都发送给了 server。
* 然后 server 选择合适的加密方式，回复给 client 证书和公钥，client 可以通过证书来确认 server 的身份。
* client 确认完身份之后，生成一个随机秘钥 然后用 server 的公钥加密，发送给 server 端。
* server 端收到 加密过的随机秘钥 用自己的私钥解密 得到与 client 相同的随机秘钥。
* 此时双方拥有了一个相同的秘钥，就可以使用这个秘钥加密 http 协议的文本了。
### 实际的 https
在实际的生产中，https 运用方式是有一些区别的
* 在普通的 web page 环境中，client 往往需要确认 server 的身份。上述的交换过程保证了双方通信的保密性，却无法保证双方的身份。所有 server 往往需要在一个第三方机构，也就是 CA 处注册自己的域名。 这样 client 可以通过 ca 提供的证书验证 server 的身份。 web page 往往并不需要验证 client 的身份 所有 client 并不需要提供自己的证书。
* 当涉及到支付等敏感场景时，也需要确认 client 的身份，这个时候往往需要客户提供自己的证书，早期银行支付使用的 u 盾等类似的产品正是这个作用
* 在交换公钥的过程中，生成了三个随机数，最后一个随机数是用 server 的公钥加密的然后 client 和 server 端通过这个三个随机数来生成对称秘钥加密 http。
* 基于 RSA 的秘钥交换过程中，由于 RSA 的私钥是固定的，假如有一天私钥被人获取，那么之前的信息都会被解密。
* 为了确保这种前向安全性，我们往往会采用 DH（Diffie-Hellman）算法， 这个算法的私钥是动态生成的，即便得到了私钥，也早就过时了