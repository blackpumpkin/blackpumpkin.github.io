---
title: 【hexo】markdown书写规范速查
tags: [markdown,博客技巧,hexo]
categories: [博客技巧]
cover: 'https://figure.pages.dev/img/post2.jpg'
background: 'url(https://figure.pages.dev/img/post2.jpg)'
reprint: false
description: 一些markdawn的书写规范
abbrlink: '13950859'
date: 2023-01-02 23:08:36
updated:
top_img:
post_copyright:
---
{% note info flat %}
总结一些markdown的编写格式。
具体可参考：[Markdown语法图文全面详解(10分钟学会)](https://blog.csdn.net/u014061630/article/details/81359144)
{% endnote %}
# 一、标题级别

{% tabs test1 %}

<!-- tab 编写规范 -->

```
# 第一级标题
## 第二级标题
### 第三级标题
#### 第四级标题
##### 第五级标题
###### 第六级标题
```

<!-- endtab -->

<!-- tab 编写效果 -->

![post2_1](https://figure.pages.dev/post/post2/post2_1.png)

<!-- endtab -->

{% endtabs %}

---

# 二、文字格式
{% note info flat %}
实际上，如果比较熟悉HTML语言的话，这些差不多都是共通的，除了加粗、斜体等少量markdown表达方式可能有些不同。如加粗，除了 `**markdown**`方式以外，你依然可以使用 `<b>HTML</b>`方式。
以下文字格式包括加粗、斜体、下划线、删除线、颜色、字号、文字背景色。
{% endnote %}

{% tabs test1 %}

<!-- tab 编写规范 -->

```
**加粗文字**
*斜体文字*
<u>下划线</u>
~~删除线~~
***加粗斜体文字***
<font size = 6>6号字</font>
<font face="楷体">楷体</font>
<font color=green>绿色</font>
<table><tr><td bgcolor=Orange>橙色背景色</td></tr></table>
```

<!-- endtab -->

<!-- tab 编写效果 -->

**加粗文字**

*斜体文字*

<u>下划线</u>

~~删除线~~

***加粗斜体文字***

<font size = 6>6号字</font><br>

<font face="楷体">楷体</font><br>

<font color=green>绿色</font><br>

<table><tr><td bgcolor=Orange>橙色背景色</td></tr></table>
<!-- endtab -->
{% endtabs %}

---

# 三、代码

## 1.代码块

{% tabs test1 %}

<!-- tab 编写规范 -->

```
`我是高亮代码块`
```

<!-- endtab -->

<!-- tab 编写效果 -->

`print（'hello world'）`

<!-- endtab -->

{% endtabs %}

## 2.代码区块

{% tabs test1 %}

<!-- tab 编写规范 -->
```
\```java
public class Hello{
	public static void main(String args[]){
		System.out.println("Hello World");
	}
}
\```
```
<!-- endtab -->

<!-- tab 编写效果 -->

```java
public class Hello{
	public static void main(String args[]){
		System.out.println("Hello World");
	}
}

```

<!-- endtab -->

{% endtabs %}

---

# 四、列表

{% tabs test1 %}

<!-- tab 编写规范 -->

```
有序号列表（注意后面有空格）：
1. 
2. 
3. 

无序号列表：
* 姓名
* 年龄

+ 入学日期
+ 毕业日期

- 兴趣
- 爱好

下面展示嵌套序号列表：
- 技能
  - Adobe
    - PS
    - PR
    - AE
```

<!-- endtab -->

<!-- tab 编写效果 -->

有序号列表（注意后面有空格）：
1. 
2. 
3. 

无序号列表：
* 姓名
* 年龄

+ 入学日期
+ 毕业日期

- 兴趣
- 爱好

下面展示嵌套序号列表：
- 技能
  - Adobe
    - PS
    - PR
    - AE
<!-- endtab -->

{% endtabs %}

---

# 五、引用区块

{% tabs test1 %}

<!-- tab 编写规范 -->

```
>引用文字第一行<br>
>引用文字第二行
>>引用文字第二层嵌套
>>>引用文字第三层嵌套
>
>引用文字第三行列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
```

<!-- endtab -->

<!-- tab 编写效果 -->

> 引用文字第一行`<br>`
> 引用文字第二行
>
>> 引用文字第二层嵌套
>>
>>> 引用文字第三层嵌套
>>>
>>
>
> 引用文字第三行列表
>
> 1. 第一项
> 2. 第二项
>
> + 第一项
> + 第二项

<!-- endtab -->

{% endtabs %}

---

# 六、分隔线

{% tabs test1 %}

<!-- tab 编写规范 -->

```
---

***
```

<!-- endtab -->

<!-- tab 编写效果 -->

---

---

<!-- endtab -->

{% endtabs %}

---

# 七、表格

{% tabs test1 %}

<!-- tab 编写规范 -->

```
|序号|工程量|备注|
|---|---|---|
|1|50|无|
|2|60|无|
|3|70|有扣减|
```

<!-- endtab -->

<!-- tab 编写效果 -->

| 序号 | 工程量 | 备注   |
| ---- | ------ | ------ |
| 1    | 50     | 无     |
| 2    | 60     | 无     |
| 3    | 70     | 有扣减 |

<!-- endtab -->

{% endtabs %}

---

# 八、链接和图片

{% tabs test1 %}

<!-- tab 编写规范 -->

```
[百度一下](https://www.baidu.com)

<https://www.baidu.com>

![code](https://figure.pages.dev/img/post1.jpg)
```

<!-- endtab -->

<!-- tab 编写效果 -->

[百度一下](https://www.baidu.com)

[https://www.baidu.com](https://www.baidu.com)

![code](https://figure.pages.dev/img/post1.jpg)

<!-- endtab -->

{% endtabs %}

---

# 九、公式
{% note info flat %}
Markdown Preview Enhanced 使用 KaTeX 或者 MathJax 来渲染数学表达式。
{% endnote %}
{% tabs test1 %}

<!-- tab 编写规范 -->

```
行内公式：$${f(x)=ax^2+bx+c}$$

块内公式：
$$
{Ax^2+By^2+Cx+Dy+E=0}
$$
```

<!-- endtab -->

<!-- tab 编写效果 -->

行内公式：

$$
{f(x)=ax^2+bx+c}
$$

块内公式：

$$
{Ax^2+By^2+Cx+Dy+E=0}
$$

<!-- endtab -->

{% endtabs %}
