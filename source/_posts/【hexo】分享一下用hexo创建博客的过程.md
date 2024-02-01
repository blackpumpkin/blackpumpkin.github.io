---
title: 【hexo】分享一下用hexo+github创建博客的过程
tags: [hexo,博客技巧,github]
categories: [博客技巧]
cover: 'https://figure.pages.dev/img/post1.jpg'
background: 'url(https://figure.pages.dev/img/post1.jpg)'
reprint: false
description: 
abbrlink: 86516c22
date: 2022-12-22 14:59:34
updated:
top_img:
post_copyright:
---
{% note info flat %}
由于本人对代码一窍不通，在创建博客的过程中，基本就是靠各位大佬们的教程和百度照葫芦画瓢，因此还是在这里做一个总结，防止后来继续踩相同的坑，同时也想告诉各位，创建博客，不需要任何的计算机知识，和我一样的小白是完全可以创建出自己的博客的。
{% endnote %}
{% note default flat %}
在此感谢[Fomalhaut大佬的教程](https://www.fomal.cc/posts/e593433d.html#1-%E5%89%8D%E8%A8%80)，讲的非常详细！
{% endnote %}

# 一、前置条件

## 1.node.js

官方网站下载即可：[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)
检测是否安装成功：在cmd中执行 `node -v` 和 `npm -v` ，出现版本号即说明安装成功。

## 2.Git

官方网站下载即可：[https://git-scm.com/](https://git-scm.com/)
由于官网下载太慢，可以通过淘宝的开源镜像下载：[https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.36.1.windows.1/](https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.36.1.windows.1/)
检测是否安装成功：在cmd中执行 `git --version` ，出现版本号即说明安装成功。

## 3.Github

官方网站注册即可：[https://github.com/](https://github.com/)
在账号创建成功后，新建仓库，仓库名称填写为 `{username}.github.io`，其中{username}为自己GitHub账号的用户名，仓库类型选择公共（免费），勾选添加README
以后博客的相关文件都会上传至这个仓库内，这也可以检测你的博客是否更新成功。
其实不使用GitHub也是可以的，不过作为一个小白，先把github设置搞明白即可，以后可以进行更换。

---

# 二、安装hexo

## 1.添加国内淘宝镜像（加快下载速度）

在cmd中执行：

```shell
npm config set registry https://registry.npm.taobao.org
```

## 2.git base 控制台

在一个合适的文件夹内右键，点击 `Git Bash Here`，即可出现git的控制台，**要注意下面的操作全部在控制台内操作，而不是cmd了。**

## 3.安装hexo

`npm i hexo-cli -g`
检测是否安装成功：`hexo -v`，出现版本号即说明安装成功。

---

# 三、连接GitHub和hexo

## 1.输入GitHub用户名

`git config --global user.name {username}`
其中{username}为自己GitHub账号的用户名。
一个小坑：**GitHub的用户名和昵称一定要区分开！**

## 2.输入GitHub注册邮箱

`git config --global user.email {useremail}`
其中{useremail}为自己GitHub账号的注册邮箱。

## 3.生成密钥

SSH key：`ssh-keygen -t rsa -C {useremail}`
其中{useremail}为自己GitHub账号的注册邮箱。

## 4.查看SSH key

进入路径**C:\Users\Astar\.ssh\id_rsa.pub**，右键记事本打开该pub文件，可以看到以**ssh-rsa**为首的一大段内容，复制下来。
以上也可在Git Bash控制台内输入 `cat ~/.ssh/id_rsa.pub`，也可以看到相同的内容。

## 5.在Github内创建密钥

打开GitHub，进入**设置——SSH and GPG keys**，新建一个SSH，名称随意，下一栏中的内容粘贴为上一步中输出的内容。

## 6.检测是否连接成功

`ssh -T git@github.com`

如果出现以下内容：

```bash
Are you sure you want to continue connecting(yes/no)?
```

输入 `yes`即可，随后出现自己的用户名即说明连接成功。

## 7.无法连接至Github的解决方案
{% note default flat %}
[Git问题：解决“ssh:connect to host github.com port 22: Connection timed out”](https://blog.csdn.net/weixin_41287260/article/details/124368189)
{% endnote %}
在上一步中，如果出现以下内容：

```bash
ssh: connect to host github.com port 22: Connection timed out
```
说明我们无法与Github建立连接，于是我们可以通过更换端口的方式解决。
在连接Github之前，进入路径**C:\Users\Astar\.ssh\id_rsa.pub**，新建config文本文档，输入以下内容：

```pub
Host github.com
User {usermail}
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```
其中{useremail}为自己GitHub账号的注册邮箱。

## 8.修改本地_config.yml文件

使用记事本打开该文件，在`deploy`行修改以下内容：

```yml
deploy:
  type: git
  repo: git@github.com:{useremail}/{useremail}.github.io.git
  branch: main
```

以下为旧版写法，现已不再使用：
{% folding red, 旧版写法，已废弃 %}
```yml
deploy:
  type: git
  repo: git@github.com/{useremail}/{useremail}.github.io
  branch: main
```
{% endfolding %}
上面可以说是踩过的最大的一个坑了。<font color=red>首先，冒号后面必须有一个空格；其次，repo写法的不同是因为旧版本hexo2.x版本的写法在3.x中已经不适用了；最后，可能有的人新建的分支默认为**master**（即branch后面为master而非main），以前GitHub创建仓库时都是默认的master，但是因为master有着“主宰、暴君”的含义，所以GitHub就将默认改成了**main**。</font>

---

# 四、创建博客文件

## 1.初始化文件夹

`hexo init`

## 2.安装组件

`npm install`

## 3.清除本地静态页面

`hexo clean`

## 4.生成本地静态页面

`hexo generate`或 `hexo g`

## 5.本地预览页面

`hexo server`或 `hexo s`，随后在浏览器打开本地静态页面：[http://localhost:4000/](http://localhost:4000/)
按下 `ctrl+C`可结束本地预览。

## 6.上传本地静态页面

`hexo deploy`或 `hexo d`

打开自己的博客地址 `{username}.github.io`，大功告成！

