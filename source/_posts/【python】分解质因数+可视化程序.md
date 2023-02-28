---
title: 【python】分解质因数+可视化程序
tags:
  - python
  - pythonGUI
categories:
  - python
abbrlink: '39734791'
date: 2023-02-19 14:54:44
updated:
description:
cover: 'https://figure.pages.dev/img/python.png'
---
{% note info flat %}
使用python设计一个分解质因数的可视化程序，输入任意一个数，程序进行分解质因数。要求如下：
- 设置输入框，要求在输出结果后输入框内的数字清空；
- 设置输出框，显示出所有成功分解的数和分解公式，要求新的结果出现在旧的结果的上面；
- 设置复制按钮，复制输出结果框内的所有结果；
- 设置清空按钮，清空输出结果框内的结果；
- 在分解质因数前判断输入的内容，如果输入的内容不是数则报错，如果输入的内容不是大于等于2的正整数则报错；
{% endnote %}

```python
import tkinter as tk
from tkinter import messagebox

def factorize():
    # 获取输入框内的内容
    n_str = input_entry.get()

    # 判断输入的内容是否为正整数
    try:
        n = int(n_str)
        if n < 2:
            raise ValueError("输入必须大于等于2的正整数！")
    except ValueError:
        messagebox.showerror("错误", "请输入大于等于2的正整数！")
        return

    # 分解质因数
    factors = []
    d = 2
    while d * d <= n:
        while n % d == 0:
            factors.append(d)
            n //= d
        d += 1
    if n > 1:
        factors.append(n)

    # 构造分解公式
    formula = f"{n_str} = "
    for i, factor in enumerate(factors):
        if i > 0:
            formula += " × "
        formula += str(factor)

    # 在输出框中显示分解结果
    output_text.insert("1.0", formula + "\n")

    # 清空输入框
    input_entry.delete(0, tk.END)


def copy_result():
    # 将输出框中的内容复制到剪贴板
    root.clipboard_clear()
    root.clipboard_append(output_text.get("1.0", tk.END))


def clear_result():
    # 清空输出框中的内容
    output_text.delete("1.0", tk.END)


# 创建窗口
root = tk.Tk()
root.title("分解质因数")
root.geometry("640x480")
root.resizable(False, False)
root.attributes("-alpha", 0.9)

# 在屏幕中央显示窗口
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()
x = (screen_width - 640) // 2
y = (screen_height - 480) // 2
root.geometry(f"640x480+{x}+{y}")

# 设置全局字体
font = ("楷体", 14)

# 创建输入框
input_label = tk.Label(root, text="请输入一个大于等于2的正整数：", font=font)
input_label.grid(row=0, column=0, padx=5, pady=5)
input_entry = tk.Entry(root, font=font)
input_entry.grid(row=0, column=1, padx=5, pady=5)
input_entry.focus()

# 创建分解按钮
factorize_button = tk.Button(root, text="分解", command=factorize, font=font)
factorize_button.grid(row=0, column=2, padx=5, pady=5)

# 创建输出框
output_label = tk.Label(root, text="分解结果：", font=font)
output_label.grid(row=1, column=0, padx=5, pady=5)
output_text = tk.Text(root, height=10, width=30, font=font)
output_text.grid(row=2, columnspan=3, padx=5, pady=5)

# 创建复制按钮
copy_button = tk.Button(root, text="复制", command=copy_result, font=font)
copy_button.grid(row=3, column=0, padx=5, pady=5)

# 创建清空按钮
clear_button = tk.Button(root, text="清空", command=clear_result, font=font)
clear_button.grid(row=3, column=1, padx=5, pady=5)

# 居中显示所有控件
for child in root.winfo_children():
    child.grid_configure(padx=10, pady=10)

# 运行窗口
root.mainloop()
```