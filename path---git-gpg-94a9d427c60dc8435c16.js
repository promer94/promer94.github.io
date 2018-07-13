webpackJsonp([0xd50a590510a2],{363:function(t,e){t.exports={data:{site:{meta:{title:"Eloquent Code",description:"A personal blog",url:"https://promer94.github.io",author:"YixuanXu",twitter:"YixuanXu",adsense:""}},post:{id:"/Users/xuyixuan/Desktop/myblog/src/pages/articles/2018-7-13-git-sign/index.md absPath of file >>> MarkdownRemark",html:'<h1>如何在 Mac 上配置你的 GPG 秘钥</h1>\n<p>我们在 github 查看 commit history 的时候，很容易发现有一些 commit 显示为 verified，有一些则不是。\n<img src="https://preview.ibb.co/i1W7HT/git_gpg.png" alt="pic"></p>\n<p>点开 verified\b 的提示，\b可以看到这些提交\b都是经过 GPG 签名产生的。</p>\n<!--more-->\n<h2>GPG 的作用</h2>\n<p>GPG 秘钥可以用来给你的本地\b commit 签名，确保\b\b提交者是可信的。这确保了整个 git\b 历史的可信度。</p>\n<h2>GPG 在 mac 上的配置方法</h2>\n<p>方法默认\b已安装 <a href="https://brew.sh/">Homebrew</a>\b</p>\n<ol>\n<li>执行 <code class="language-text">brew install gpg</code> 安装依赖。</li>\n<li>输入 <code class="language-text">gpg --full-generate-key</code> \b按照提示\b完成配置，在第三部\b\b步选择时长的时候，个人使用可以填 0，表示永不过期。最后的密码可以选填。</li>\n<li>安装完成后输入 <code class="language-text">gpg --list-keys</code> 查看刚刚生成的秘钥，pub 下\b的那一长段就是GPG-\b\bID。</li>\n<li>输入 <code class="language-text">gpg --armor --export pub GPG-ID</code> 把公钥复制出来，拷贝到 <a href="https://github.com/settings/keys">GitHub GPG Keys</a> 上</li>\n<li>输入 <code class="language-text">git config --global user.signingkey GPG-ID</code> 来配置使用。</li>\n<li>单次提交时\b使用 \b<code class="language-text">git commit -S</code> 参数来开启 GPG key，或者使用 <code class="language-text">git config --global commit.gpgsign true</code> 设置为全局默认使用。</li>\n<li>如果在 commit 的过程出现了签名错误的情况可以尝试执行 <code class="language-text">echo &#39;export GPG_TTY=$(tty)&#39; &gt;&gt; ~/.bash_profile</code> \b将 gpg 密钥添加到你的\b bash profile 中。\b如果你使用的是其他 shell，\b替换成你的 shell\b 配置文件即可。</li>\n<li>如果还有其他的问题可以查阅 <a href="https://help.github.com/articles/signing-commits-with-gpg/">Github</a>\b\n\b  </li>\n</ol>',frontmatter:{layout:"post",title:"使用 GPG 为你的 git commit 签名",path:"/git-gpg/",categories:["Git"],date:"2018/07/13"}}},pathContext:{path:"/git-gpg/"}}}});
//# sourceMappingURL=path---git-gpg-94a9d427c60dc8435c16.js.map