# Acrobat自动添加书签

## 准备

1、Adobe Acrobat  
2、[AutoBookmark Standard Plug-in](http://www.evermap.com/downloads.asp)：adobe acrobat的自动生成书签的插件(1)
{.annotate}

1.  解压后将目录拷贝到Adobe\\AcrobatDC\\Acrobat\\plug_ins文件夹下 

## 流程

### 1、导出PDF目录内容到Word

将word 内容拷贝到新建的txt文本中(TXT需要使用ANSI编码(1))
{.annotate}

1.  用记事本打开txt文件，选择另存为，编码修改为ANSI ![修改编码](https://i.loli.net/2021/04/23/VvINfuXsZWo9GM5.png)

### 2、TXT文件格式编辑

最后TXT文件内容格式：

> \[标签名称\],\[目录页码\],\[目录页码和实际页码的偏移量\]

![处理过后的txt](https://i.loli.net/2021/04/23/bL2VhIo9FHczCJ8.png)

处理流程：

1.  tab替换为空格
2.  多个空格替换为一个空格
3.  使用正则表达式，修改每行的内容
4.  使用正则表达式，修改各级目录的缩进

常用正则表达式语法：

> \\w: 数字或大小写字母  
> +: 一次或多次匹配前面的字符  
> (): 捕获包含在括号中的表达式并对其进行隐式编号  
> $1: 引用第一个隐式编号内容  
> e.g.: (\\w+,\\w)\\n 替换为 $1,+11\\n\\t
> 
> > ![替换效果](https://i.loli.net/2021/04/23/PSywqdYsxp3Wkfj.png){ width=50% }

### 3、导入TXT，自动生成书签

1.  增效工具 -> Bookmarks -> Create From TextFile
2.  选择TXT文件，Field delimiter要设为Comma，点击OK后自动生成书签