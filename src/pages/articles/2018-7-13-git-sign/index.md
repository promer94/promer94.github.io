---
title: 使用 GPG 为你的 git commit 签名
date: "2018-07-13"
layout: post
path: "/git-gpg/"
categories:
  - Git
---
# 如何在 Mac 上配置你的 GPG 秘钥
我们在 github 查看 commit history 的时候，很容易发现有一些 commit 显示为 verified，有一些则不是。
![pic](https://preview.ibb.co/i1W7HT/git_gpg.png)

点开 verified 的提示，可以看到这些提交都是经过 GPG 签名产生的。
<!--more-->
## GPG 的作用
GPG 秘钥可以用来给你的本地 commit 签名，确保提交者是可信的。这确保了整个 git 历史的可信度。

## GPG 在 mac 上的配置方法
方法默认已安装 [Homebrew](https://brew.sh/)
1. 执行 ```brew install gpg``` 安装依赖。
2. 输入 ```gpg --full-generate-key``` 按照提示完成配置，在第三部步选择时长的时候，个人使用可以填 0，表示永不过期。最后的密码可以选填。
3. 安装完成后输入 ```gpg --list-keys``` 查看刚刚生成的秘钥，pub 下的那一长段就是GPG-ID。
4. 输入 ```gpg --armor --export pub GPG-ID``` 把公钥复制出来，拷贝到 [GitHub GPG Keys](https://github.com/settings/keys) 上
5. 输入 ```git config --global user.signingkey GPG-ID``` 来配置使用。
6. 单次提交时使用 ```git commit -S``` 参数来开启 GPG key，或者使用 ```git config --global commit.gpgsign true``` 设置为全局默认使用。
7. 如果在 commit 的过程出现了签名错误的情况可以尝试执行 ```echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile``` 将 gpg 密钥添加到你的 bash profile 中。如果你使用的是其他 shell，替换成你的 shell 配置文件即可。
8. 如果还有其他的问题可以查阅 [Github](https://help.github.com/articles/signing-commits-with-gpg/) 
  