---
title: 【hexo】hexo提交到搜索引擎收录
tags:
  - hexo
  - 博客技巧
  - SEO
categories:
  - 博客技巧
cover: https://figure.pages.dev/img/post6.jpg
background: 'url(https://figure.pages.dev/img/post6.jpg)'
reprint: false
abbrlink: eb7308cc
date: 2023-02-07 11:16:32
updated:
description: 将hexo提交到搜索引擎收录。
swiper_index: 1
---
# 一、生成站点地图
在终端输入以下内容并回车：
```shell
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```
在_config.yml文件添加以下内容：
```
# 自动生成sitemap
sitemap:
  path: sitemap.xml
```
然后在git工具中三连：`hexo cl && hexo g && hexo d`
此时，进入**public**目录，发现里面有**sitemap.xml**和**baidusitemap.xml**文件，这就是生成的站点地图。里面包含了网站上所有页面的链接，搜索引擎通过这个文件来抓取网站页面。

---

# 二、搜索引擎收录
## 1.百度
访问[百度搜索资源平台官网](https://ziyuan.baidu.com/)，选择【用户中心】——【站点管理】，点击【添加网址】，我们依次进行【输入网站】——【站点属性】——【验证网站】，其中第三步验证网站需要我们进行验证。
{% note warning flat %}
【公告】站点验证暂停CNAME验证的通知
亲爱的搜索开发者
近期百度搜索资源平台策略调整，站点管理-验证网站暂停【CNAME验证】的方式。该调整对已完成验证的站点没有影响，若站点未验证或验证过期，可以选择使用【文件验证】、【HTML标签验证】方式进行站点验证。
给您带来的不便敬请谅解！
发布日期：2023-01-13
来自<https://ziyuan.baidu.com/wiki/3462>
{% endnote %}
我们选择【HTML标签验证】，发现我们需要添加代码进行验证：
```html
<!-- HTML标签验证
将以下代码添加到您的网站首页HTML代码的<head>标签与</head>标签之间，完成操作后请点击“验证”按钮。 -->
<meta name="baidu-site-verification" content="{your content}" />
<!-- 查看示例 -->
<html>
  <head>
    <meta name="baidu-site-verification" content="{your content}" />
    <title>My title</title>
  </head>
  <body>
    page contents
  </body>
</html>
<!-- 为保持验证通过的状态,成功验证后请不要删除该标签 -->
```
其中{your content}为百度提示我们插入的content值。
由于我使用的butterfly主题文件自带了站长验证功能，因此打开**_config.butterfly.yml**，找到`site_verification`行进行修改即可（{your content}需要进行替换）：
```yml
# Verification (站長驗證)
# --------------------------------------
site_verification:
  - name: baidu-site-verification
    content: {your content}
```
点击【完成验证】即可验证成功。
重新进入站点管理（站点属性设置），点击【普通收录】——【sitemap】，在【请填写数据文件地址】输入以下内容：
```txt
www.blackpumpkin.xyz/sitemap.xml
www.blackpumpkin.xyz/baidusitemap.xml
```
点击【提交】即可完成。

## 2.谷歌
访问[Google Search Console](https://search.google.com/search-console/welcome)，在【网域】中填入自己的博客网址，点击【前往资源页面】——【站点地图】——【添加新的站点地图】，把上述文件地址提交即可。

## 3.必应
访问[Webmaster Tools](https://www.bing.com/webmasters/about)，登录自己的微软账户后，我们发现必应有两种导入方式，一种是【手动添加网站】，另一种是【从GSC导入你的网站】，如果我们已经使用谷歌提交过，我们便可以无需验证，直接使用谷歌导入了。
点击【网站地图】——【提交网站地图】，把上述文件地址提交即可。

## 4.其他
如360搜索、搜狗搜索等，与百度的操作相同。下面只列举出各搜索引擎对应的站长平台。
| 搜索引擎 | 代码验证 | 文件验证 | CNAME验证 | 站长平台 |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| 搜狗 | √ | √ | × | https://zhanzhang.sogou.com/ |
| 360 | √ | √ | √ | https://zhanzhang.so.com/ |