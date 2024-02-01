---
title: 【hexo】图床的使用
tags:
  - hexo
  - 博客技巧
  - github
categories: 博客技巧
cover: 'https://figure.pages.dev/img/post7.jpg'
background: 'url(https://figure.pages.dev/img/post7.jpg)'
abbrlink: d6899135
date: 2023-02-11 11:35:13
updated:
description: 使用图床可以给服务器减轻压力，对于网站的访问也会提高一定的速度。
swiper_index: 
---
{% note info flat %}
使用图床可以给服务器减轻压力，对于网站的访问也会提高一定的速度。
{% endnote %}

# 一、基于Github仓库的图床
{% note info flat %}
Github仓库的好处是，不光是图片，音频、视频等文件也可以进行上传。
{% endnote %}
## 1.新建仓库
点击`New Repository`，创建一个新的仓库，仓库名字随意。点击`Create Repository`完成创建。

## 2.克隆仓库
在仓库页面内点击绿色按钮`<>code`——`Local`——`SSH`，其中的SSH链接如下：
```bash
git clone git@github.com:XXX/YYY.git
```
XXX为Github名称，YYY为仓库名称。这便是我们需要的仓库信息，复制下来。
在本地建立一个空文件夹，右键打开`Git Bash`，直接粘贴上述链接，回车执行。

## 3.上传图片
在我们把图片复制到仓库文件夹后，我们执行以下命令：
### 3.0 对远程仓库进行修改
如果我们在别的平台对仓库进行过修改（如使用过PicGo等图床上传软件导致远程仓库与本地仓库不同步），我们需要在执行前先将远程仓库与本地仓库同步：
`git pull`

### 3.1 将文件加入到暂存区
`git add .`
（注意有一个小点）

### 3.2将暂存区文件加入到本地仓库
`git commit -m "message"`
message为需要注释的内容，可以改为任意内容，但最好是可以描述文件本身作用的信息。

### 3.3将本地仓库上传到远程仓库
`git push`

## 4.查看仓库内图片
打开在仓库内的图片，可以发现地址为`https://github.com/{用户名}/{图床仓库名}/blob/main/{图片文件夹}/{图片名称}`
{用户名}、{图床仓库名}、{图片文件夹}、{图片名称}等均改为我们自己的名称。
我们将其中的blob改为raw，即为我们需要图片的地址。
也可以选择github用来存储用户上传文件的服务地址：
`https://raw.githubusercontent.com/{用户名}/{图床仓库名}/main/{图片文件夹}/{图片名称}`

## 5.CDN部署加速

### 5.1 Cloudflare
打开`Pages`——`创建项目`——`连接到Git`，选择我们的图库，创建项目后会给出一个域，形如`aaa-bbb-ccc.pages.dev`
我们在上述域后面添加内容 /{图片文件夹}/{图片名称}，用浏览器进入，即为我们需要图片的地址。

### 5.2 jsdelivr
{% note warning flat %}
经验证，jsd目前已被墙，5.2方法已失效。
{% endnote %}
将仓库内图片的地址改为`https://cdn.jsdelivr.net/gh/{github用户名}/{图床仓库名}@{仓库分支}/{图片文件夹}/{图片名称}`
其中仓库分支一般为main

### 5.3 Staticaly
将仓库内图片的地址改为`https://cdn.staticaly.com/gh/{github用户名}/{图床仓库名}@{仓库分支}/{图片文件夹}/{图片名称}`

### 5.4 Vercel、Netlify等托管平台
我们需要完成自定义二级域名并进行解析（参考绑定自定义域名内容）。
将仓库内图片的地址改为`{自定义域名}/{图片文件夹}/{图片名称}`

---

# 二、第三方图床
这部分图床（如SMMS）的搭建门槛较低，所以速度和稳定性良莠不齐，可以多搜索一些使用。

---

# 三、论坛图床
博主在以前玩舰c的时候混过一段时间NGA舰版，版内有一个“[图床专用集中贴](https://bbs.nga.cn/read.php?tid=7622707)”，可以在贴内上传图片，然后复制图片的链接即可作为外链使用，即使帖子被冲水也不会影响。实际上，任何的论坛，都是可以当作图床的，只是非常的不稳定。

---

# 拓展阅读：使用vscode直接上传到远程仓库
{% note info flat %}
在git bash中逐一输入`git add .`等命令实在是过于繁琐，因此我们可以使用vscode一键上传到远程仓库。
{% endnote %}

## 1.链接github
此步骤在我们创建hexo时就已经进行完毕（git config、设置ssh等），因此可直接跳过。

## 2.克隆仓库
参考本文第一章第二节。

## 3.vscode设置
打开vscode，`文件`——`打开文件夹`，选择我们克隆到本地的仓库文件夹。
细心的你会发现，仓库内有一个`.git`文件夹，这便是我们远程仓库的信息，我们称做Git仓库(Git Repository)。
我们将需要上传的图片直接放入仓库文件夹内，随后我们会看到，vscode左侧的源代码管理会发生变化。
打开`源代码管理`，直接提交即可。
*如果一直在转圈，说明设置的默认选项影响了commit，当我们在commit却不添加任何消息时，会默认生成一个文件来替代消息并提交，而服务器无法接受这样的消息。
在设置内找到`Git: Use Editor As Commit Input`，取消勾选即可。
{% note default flat %}
[git bash可以正常commit，但是 VSCode 里不能正常commit使用的解决方法](https://blog.csdn.net/Er_Studying_Bai/article/details/128088429)
{% endnote %}

