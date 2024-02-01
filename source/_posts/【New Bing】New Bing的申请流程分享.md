---
title: 【New Bing】New Bing的申请流程分享
reprint: false
tags:
  - new_bing
categories:
  - 网络技巧
abbrlink: d34481fd
date: 2023-02-21 20:16:51
updated:
description:
swiper_index: 1
password:
cover: 'https://figure.pages.dev/img/post9.jpg'
background: 'url(https://figure.pages.dev/img/post9.jpg)'
---
{% note info flat %}
分享一下New Bing的申请流程。
{% endnote %}

# 一、环境设置
## 1.节点设置
同chatgpt，我们必须全程将网络环境切换成美国或加拿大的ip，否则就会出现`出错了。请重试。`字样。
<img src="https://figure.pages.dev/post/post10/微信截图_20230220135311.png" width="400">

## 2.Microsoft Edge
我们需要使用Edge浏览器进入New Bing。

## 3.ModHeader
在Edge点击`扩展`，搜索ModHeader插件并安装。
在ModHeader里，参数名称设置为`X-Forwarded-For`，参数值设置为`4.2.2.2`（微软）或`8.8.8.8`（谷歌）。

---

# 二、官网申请
打开<https://www.bing.com/new>，点击`加入候补名单`即可。
<img src="https://figure.pages.dev/post/post10/微信截图_20230220135545.png" width="400">

---

# 三、仍然报错
请确保自己的节点为美国或加拿大且足够稳定。如果仍然出现`出错了。请重试。`字样，则进行以下操作：

## 1.退出Microsoft Rewards
{% note warning flat %}
**注意**：如果你的reward还有用，请先将reward兑换成所需产品后后再进行操作，**此操作会导致reward清零**。
{% endnote %}
打开<https://rewards.bing.com/optout?confirm=false>，点击`立即选择退出并失去我的积分`。
<img src="https://figure.pages.dev/post/post10/微信截图_20230220135417.png" width="400">

## 2.重新加入Microsoft Rewards
打开<https://www.bing.com/new>，在右上角点击奖杯，点击`选择加入Rewards`。
<img src="https://figure.pages.dev/post/post10/微信截图_20230220135458.png" width="400">
重新加入reward后，退出浏览器并打开新bing申请页面。此时如果已经登录微软账号，右上角的reward会显示为0，再次申请后即可成功。
