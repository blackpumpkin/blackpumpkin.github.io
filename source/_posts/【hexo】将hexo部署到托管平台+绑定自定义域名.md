---
title: 【hexo】将hexo部署到托管平台+绑定自定义域名
tags:
  - hexo
  - 博客技巧
  - Vercel
  - 自定义域名
categories:
  - 博客技巧
cover: 'https://figure.pages.dev/img/post5.jpg'
background: 'url(https://figure.pages.dev/img/post5.jpg)'
reprint: false
abbrlink: fa20ec4f
date: 2023-02-07 11:10:22
updated:
description:
---
# 一、将hexo部署到Vercel
{% note info flat %}
Vercel是一个代码托管平台，能够用来部署前端应用，此处我们用它来托管hexo的静态html界面，达到无需购买服务器的目的。
{% endnote %}
## 1.创建Vercel账号

官方网站注册即可：[https://vercel.com/](https://vercel.com/)
此处建议直接使用我们的Github账号进行注册/关联，这样我们可以直接在Vercel中找到我们的GitHub库中的项目。

## 2.对项目进行托管

依次点击右上角【Add New…】——【Project】，在`Import Git Repository`内选择我们创建的{username}.github.io项目，点击 【Import】，表示导入我们的Github项目。
<img src="https://figure.pages.dev/post/post1/1-1.png" width="400">
随后，我们在**Project Name**中起一个只有字母、数字或者或者连字符的项目名称，其他的不用变，点击 【Deploy】。
<img src="https://figure.pages.dev/post/post1/1-2.png" width="400">
我们打开 `{ProjectName}.vercel.app`(其中{ProjectName}为我们上面项目起的名称)，发现打开后为我们的博客主页，证明我们已经部署成功！（由于目前Vercel被墙，可能需要挂节点进行确认）

---

# 二、绑定自定义域名
{% note info flat %}
这一步并非必要，如果目前还不想买域名可以先跳过。
{% endnote %}

## 1.购买域名

（略）
可先使用[freenow](https://www.freenom.com/zh/index.html?lang=zh)申请一个免费域名。

## 2.添加解析

在Vercel中进入我们上文中创建好的项目，点击右上角的 `View Domains`，我们可以看到已经创建好的 `{ProjectName}.vercel.app`，我们的目标是将自己购买的域名绑定到这个项目中。
在`Domains`内添加我们购买的域名（以我的域名 `blackpumkpin.xyz/`为例），然后会提示我们是否重定向至 `www.blackpumkpin.xyz/`，我们选择 `ADD`。
<img src="https://figure.pages.dev/post/post1/1-3.png" width="400">
然后我们需要添加以下两条解析记录：

| Type | Name |         Value         |
| :---: | :--: | :-------------------: |
|   A   |  @  |      76.76.21.21      |
| CNAME | www | cname.vercel-dns.com. |

此时我们返回域名商的控制台，进入DNS管理，添加上述两条解析即可。
如果我们想要自定义二级域名，我们可以使用CNAME解析，在Name处添加我们想要的自定义二级域名即可。

## 3.修改配置文件
打开_config.yml，在**URL**行修改自己的url为自己的自定义域名。

```yml
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: http://www.blackpumpkin.xyz
```

---

# 三、其他托管平台
[Netlify](https://app.netlify.com/)的速度据说比Vercel快一些。
操作步骤与Vercel基本一致，都是通过关联自己的github账户来导入我们的{username}.github.io项目，完成后我们会获得一个形如`xxx.netlify.app`的链接，打开后为我们的博客主页，证明我们已经部署成功。
绑定自定义域名的操作也是相同的，只是解析记录有所区别：

| Type | Name |         Value         |
| :---: | :--: | :-------------------: |
|   A   |  @  |      75.2.60.5      |
| ANAME |  @  | apex-loadbalancer.netlify.com |
| CNAME | www | {xxx}.netlify.app |

记得换掉{xxx}的内容。
同样的，进入域名商控制台的DNS管理，添加上述解析即可。（自定义二级域名的操作相同，不再赘述）

---

# 拓展阅读：将二级域名部署到不同的托管平台
如果我们已经使用Vercel将主域名进行了部署，那么我们也可以使用其他的平台对二级域名进行部署。

| Type | Name |         Value         | 备注 |
| :---: | :--: | :-------------------: | :--: |
|   A   |  @  |      76.76.21.21      | Vercel部署的主域名A解析 |
| CNAME | www | cname.vercel-dns.com. | Vercel部署的主域名CNAME解析 |
| CNAME | {netlify} | {xxx}.netlify.app | Netlify部署的二级域名CNAME解析 |