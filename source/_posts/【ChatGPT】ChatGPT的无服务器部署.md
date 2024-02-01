---
title: 【ChatGPT】ChatGPT的无服务器部署
reprint: false
tags: chatgpt
categories: 网络技巧
cover: 'https://figure.pages.dev/img/post3.png'
background: 'url(https://figure.pages.dev/img/post3.png)'
abbrlink: 5c84e6fe
swiper_index: 1
date: 2023-04-16 15:47:36
updated:
description:
password:
---
{% note info flat %}
官网的ChatGPT对话很容易被打断，通过第三方部署可以很好的解决这个问题，并且不需要挂节点，本地网络即可访问。
参考教程：[无服务器部署自己的chatGPT](https://www.fomal.cc/posts/74ac8dc8.html)
{% endnote %}

项目名称：ChatGPT-Next-Web
项目地址：[Yidadaa/ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)
项目预览：<a href="chatgptnextweb.blackpumpkin.xyz" target="_self">chatgptnextweb</a>
部署教程：详细见[开源文档](https://github.com/Yidadaa/ChatGPT-Next-Web/blob/main/README_CN.md)。

# 一、获取API keys
账号注册可参考教程[【ChatGPT】ChatGPT的注册流程分享](https://www.blackpumpkin.xyz/post/8ee3673d.html)。
登陆账号后，我们打开[OPENAI的控制台](https://platform.openai.com/)，点击右上角头像，选择`View API keys`——`+ Create new secret key`，输入任意名称后确定，**请牢记KEY值**。

# 二、Vercel部署
fork`ChatGPT-Next-Web`项目后，在Vercel将本项目部署，部署过程中需要在`Configure Project`处的`OPENAI_API_KEY`填写我们上文的`KEY`值，`CODE`填写一个你喜欢的密码并牢记。
点击`Deploy`部署。

# 三、自定义域名（可选）
无需一级域名，二级域名也是可以的，域名的托管和注册可参考[【hexo】将hexo部署到托管平台+绑定自定义域名](https://www.blackpumpkin.xyz/post/fa20ec4f.html)。

---
# 拓展阅读：Github上其他的第三方部署项目
- [Chanzhaoyu/chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web)
- [ourongxing/chatgpt-vercel](https://github.com/ourongxing/chatgpt-vercel)
- [ddiu8081/chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo)