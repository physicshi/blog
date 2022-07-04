---
sidebar_position: 10
---

## day01

vscode 安装 vim 插件。

刚打开时是 normal 模式，利用 `h`（左）、`j`（下）、`k`（上）、`l`（右） 可以移动光标；

按键 `i` 进入 insert 插入模式（此时光标在当前单位前，按键 `a` 进入 insert 模式，光标在当前单位后面），按键 `esc` 或者 `control` + `[` 组合键，退出 insert 模式；

:::tip
在终端中退出 Vim：

- `:q!` —— 强制退出
- `:wq` —— 退出并保存

:::

vscode 中的 Esc 键的修改：

```json
// 在 settings.json 中配置

"vim.insertModeKeyBindings": [{ "before": ["j", "k"], "after": ["<Esc>"] }],
```

[快速移动](https://github.com/VSCodeVim/Vim#mac)：

Mac，To enable key-repeating, execute the following in your Terminal, log out and back in, and then restart VS Code:

```
$ defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false              # For VS Code
$ defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false      # For VS Code Insider
$ defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool false         # For VS Codium
$ defaults write com.microsoft.VSCodeExploration ApplePressAndHoldEnabled -bool false   # For VS Codium Exploration users
$ defaults delete -g ApplePressAndHoldEnabled                                           # If necessary, reset global default
```

We also recommend increasing Key Repeat and Delay Until Repeat settings in System Preferences -> Keyboard.

## day 02

> 行相关的命令

移动到行首：

- `0` —— 到行首
- `^` —— 到本行第一个不是 blank 的位置（空格、tab、换行、回车等）

移动到行尾：

- `$` —— 到行尾
- `g`+`_` —— 到本行最后一个不是 blank 的位置（空格、tab、换行、回车等）

改键：

```json
"vim.normalModeKeyBindings": [
    {
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["g", "_"]
    }
  ],
```

插入：

- 行首插入：`I`
- 行尾插入：`A`
- 行前插入：`O`
- 行后插入：`o`

复制当前行：

- `yy`

> 和 ctrl + c 不冲突

粘贴：

- `p`

删除当前行：

- `dd`

## day 03

> vim 的语法

vim 语法的内容就是 `操作符+动作（范围）`：

- `操作符`：比如 `d`（delete）
- `动作`：比如 `h`、`j`、`k`、`l`

删除操作符：

- `d`
  - 比如按下 `d` + `L`：就是删除当前光标到行尾的内容（这里当前光标到行尾就是操作符作用的**范围**）

```json
"vim.operatorPendingModeKeyBindings": [
    {
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["g", "_"]
    }
  ],
```

- `c`：删除完成后，进入 `insert` 模式，剩下的和 `d` 一样

复制操作符：

- `y`
  - 比如按下 `y` + `L`：就是复制当前光标到行尾的内容（再按下 `p` 就可以粘贴）
  - 实际上对于删除操作符，比如`d`+`L`，是把光标到行尾的内容复制到 vim 的寄存器，然后删除，这里是一样的，也可以用 `p` 取到

基于单词的移动：

- 移动到单词的结尾：`e` (从左到右)
- 移动到上一个单词的开头：`b` （从右到左）
- 移动到单词的开头：`w`
- 移动到上一个单词的结尾：`ge`

> 符号会被视作一个单词，字串是以空格分隔的单词，将上面基于单词的移动操作符改为大写即可

以上操作符的组合举例，覆盖常用场景：

- `cw`：删除当前单词（光标至单词尾部的范围）
- `ea`：在当前单词结尾处添加

## day 04

> 处理单字符 & undo/redo

删除光标所在的字符：

- `x`

删除当前光标前的字符：

- `X`

删除当前光标的字符并进入 insert 模式：

- `s`

删除当前光标所在行并进入 insert 模式：

- `S`

替换一个字符：

- `r`

替换多个字符：

- `R`（`control` + `[` 退出）

undo/redo：

- `u` —— undo
- `control` + `r` —— redo

:::tip

可撤销块：进入 insert 模式开始，直到回到 normal 模式，在此期间输入或者删除的任何内容都被当成一次修改

undo/redo 就是基于可撤销块。

这里有一个细节，按上下左右也会被视作一个可撤销块（从按上下左右到回到 normal 模式是一个可撤销块）

:::

## day 05

> 掌握可视化模式

基于字符：

- `v` —— `v` 配合移动来选择字符(`hjkl`)

基于行：

- `V` —— `V` 配合移动来选择一行或者多行

基于块：

- `control` + `v` —— 处理多行文本时会用到

退出可视化模式：

- `esc`
- `control` + `[`
- `v`
- `V`

:::tip

注意，可以在一种可视化模式下切到另一种可视化模式

:::

导航：

- 配合动作范围(比如 `v` + `e` 选中当前单词)
  - `o` 切换可视区的光标位置
  - `gv` 回到上一次选择的可视化区域

:::caution
注意，在可视化模式下，语法规则是 **先选中再操作**
:::

技巧：

- 跨多行编辑：给多个行后面加分号 —— 配合`A` 或者 `I`
- 尽可能少的使用可视化模式 —— 会增加操作的步骤

## day 06

> 掌握文本对象

文本对象就是一个结构化的，可以快速选择的范围

语法：

- operator + 内部/外部 + 文本对象
- 可视化模式 + 内部/外部 + 文本对象

> - 内部 —— `i` (`in`)
> - 外部 —— `a`

比如 `v` + `i` + `(` 就可以选中括号内的部分，`v` + `a` + `(` 可以选中括号以及括号内的部分

> `d` + `i` + `(` 可以删除括号内的部分

文本对象分类：

- `w` —— 一个单词 （`ciw` 删除一个单词 `change in words`）
- `(` 或者 `)` —— 一对 `()`
- `b` —— 一对 `()` （`bracket`）
- `[` 或者 `]` —— 一对 `[]`
- `{` 或者 `}` —— 一对 `{}`
- `B` —— 一对块 `{}`
- `<` 或者 `>` —— 一对 `<>`
- `t` —— xml 标签内容
- `'` —— 一对 `'`
- `"` —— 一对 `"`
- `s` —— 一个句子（以 `.` `!` `?` 结尾的）
- `p` —— 一个段落（以空格间隔开的）

vscode 集成，默认开启的：

- vim-textobj-arguments
  - `ia` 不包含分隔符（一个参数），一般修改用到，比如 `cia`
  - `aa` 包含分隔符（包含分隔符`,`的参数），一般删除用到 `caa`
- vim-textobj-entire (匹配所有文本)
  - `ae` —— 删除当前文本所有内容
  - `ie` —— 删除当前文本所有内容，但是不包括前面和后面的空格

## day 07

> 在单文件中快速移动

滚动：

- 向下滚动一屏 —— `control` + `f` (forward)
- 向上滚动一屏 —— `control` + `b` (backward)
- 向下滚动半屏 —— `control` + `d`
- 向上滚动半屏 —— `control` + `u`
- 向下滚动一行 —— `control` + `e` （光标不动）
- 向上滚动一行 —— `control` + `y` （光标不动）

基于配置：

- 上 5 行：`shift` + `k`
- 下 5 行：`shift` + `j`

```json
"vim.visualModeKeyBindings": [
    {
      "before": ["J"],
      "after": ["5", "j"]
    },
    {
      "before": ["K"],
      "after": ["5", "k"]
    }
  ],
  "vim.normalModeKeyBindings": [
    {
      "before": ["L"],
      "after": ["g", "_"]
    },
    {
      "before": ["J"],
      "after": ["5", "j"]
    },
    {
      "before": ["K"],
      "after": ["5", "k"]
    }
  ],
```

- 将当前行置于屏幕中央：`zz`
- 将当前行置于屏幕顶部：`zt` (top)
- 将当前行置于屏幕底部：`zb` (bottom)
- 跳到文件首：`gg`
- 跳到文件尾：`G`
- 跳到指定行：
  - 行数 + `gg`
  - 行数 + `G`

## day 08

> 掌握搜索

单行：

- `f` —— 正向移动到下一个字符所在处，比如按键 `f,` 移动到下一个`,`
- `F` —— 反向移动到上一个字符所在之处，
- `t` —— 正向移动到下一个字符所在位置的前一个字符上
- `T` —— 反向移动到上一个字符所在位置的后一个字符上
- `;` —— 重复上次的字符查找命令
- `,` —— 回到上一次的字符查找位置（反转方向查找上次的字符查找命令）

技巧：

- 移动的时候用 `f`
- 结合 `c/d` 使用 `t` (比如 `dt` + 某个字符 就是删除当前光标到该字符前的范围)
- 在可视化模式下可以结合 `t`/`f` 选择一个范围

全局：

- `/` —— 向下搜索
- `?` —— 向上搜索

> 通过 `n`/`N` 进行跳转 `n` 跳到下一个匹配的，`N` 回到上一个匹配的搜索结果

- 查看搜索历史
  - `/` + 上下方向键 （`k` 或者 `j`）

技巧：

- 写单词的前几个字母即可
- 搜索 `/` 结合可视化模式进行删除，比如 `v/` + 字符 + `d` 删除
- 搜索 `/` 结合操作符，比如 `d/` + 字符 + `enter` 进行删除

```text
this phrase takes time but eventually gets to the point.

> d/ge + enter

gets to the point.
```

严格匹配的搜索：

- `#` —— 向上查找当前光标所在单词
- `*` —— 向下查找

:::caution

需要多在实际场景下练习总结

:::

## day 09

> 更高效的移动

已经集成到 vscode 了

插件 vim-easymotion

```json
// 开启
"vim.easymotion": true,
```

首先改键，vim 中`<leader>` 是 `\`，这里改成：

```json
"vim.leader": "<Space>",
```

基于单词的跳转：

- `<Leader> <Leader> w`：高亮光标后的所有单词的开头，键入对应单词实现快速跳转
- `<Leader> <Leader> b`：高亮光标前的所有单词的开头
- `<Leader> <Leader> e`：高亮光标后的所有单词的结尾
- `<Leader> <Leader> ge`：高亮光标前的所有单词的结尾
- `<Leader> <Leader> l`：高亮光标后的单词的开头和结尾、驼峰、`_` 或 # 之后的内容
- `<Leader> <Leader> h`：高亮光标前的单词的开头和结尾、驼峰、`_` 或 # 之后的内容

基于行的跳转：

- `<Leader> <Leader> j`：高亮光标后的所有行的开头
- `<Leader> <Leader> k`：高亮光标前的所有行的开头
- `<Leader> <Leader> <Leader> j`：高亮所有的单词的开头和结尾、驼峰、`_` 或 # 之后的内容

插件 vim-sneak

> 代替原生的 `f` 功能

vim 中的 `f` 只能在当前行进行跳转，sneak 可以在全局进行跳转，vim-sneak 使用 `s` 操作符 + `字符` + `回车` 实现向下搜索（`S` + `字符` + `回车` 实现向上搜索），后面可以接两个字符，并且类似于`f`，`;` 重复上次的字符查找命令，`,` 回到上一次的字符查找位置（反转方向查找上次的字符查找命令）

开启：

```json
"vim.sneak": true,
```

改键：

```json
// 非递归
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["f"],
      "after": ["s"]
    },
    {
      "before": ["F"],
      "after": ["S"]
    },
    {
      "before": ["s"], // 删除当前字符，并进入 insert 模式
      "after": ["c", "l"]
    },
    {
      "before": ["S"], // 删除所在行非 blank 到行尾的内容，光标停在初始非 blank 的位置
      "after": ["^", "C"]
    }
  ],
```

配置 normal mode 下的 f/F 映射为 vim-sneak 的 s/S，映射后，为了让 s/S 恢复为最原始的功能（删除光标所在字符并进入 insert 模式；删除所在行非 blank 到行尾的内容，光标停在初始非 blank 的位置），需要把 s/S 的原始功能用 c/C 实现一下，而且由于在这个映射过程中，存在递归映射的情况（如 f → s → cl），所以会在 vim.normalModeKeyBindingsNonRecursive（非递归）模式下。

可视化模式下的统一（即将可视化模式下 `f` 映射为 `s`，插件不支持可视化模式下的 `S`）：

```json
 "vim.visualModeKeyBindingsNonRecursive": [
    {
      "before": ["f"],
      "after": ["s"]
    }
  ],
```

若想在 visual mode 和 operater-pending 模式（即当输入了如 d c 等操作符后，vim 等待输入范围和文本对象时的状态，简而言之就是可以让 vim 支持如 df + 两个字符的这种操作，因为不配置的话在 operater-pending 模式中 vim-sneak 使用的是 z 操作符），则需要继续配置：

```json
"vim.operatorPendingModeKeyBindingsNonRecursive": [
    {
        "before": ["f"],
        "after": ["z"]
    },
    {
        "before": ["F"],
        "after": ["Z"]
    },
]
```

## day 10

> 数字 && 点的威力

数字：

> 语法：
>
> - 数字 + operator + 动作（范围）
> - operator + 数字 + 动作（范围）

比如 删除三个单词，可以是连续三次 `dw` 也可以是 `3dw` 或者 `d3w`

点：

重复上一次的修改：

- 更新操作
  - 增
  - 删
  - 改
- 离开 insert 模式之前的全部按键操作都记录

优化之前的操作，比如删除一个单词的命令：

- `bde`
- `dbx`
- `diw` (支持 `.` 操作)

> 思想：一键移动一键操作；能够重复就不要用次数 `.` 命令
> 案例 1. 加分号 `A;` 2. 查找手动替换

1. 加分号

推荐使用 `A;` 的方式，因为 `A` 直接跳转到末尾并进入 insert 模式，输入 `;` 加了分号后回到 normal 模式，此时点操作符会记录整个 `A;` 的过程，这样一来无论在哪一行的哪一个位置，都可以直接无脑按下点操作符实现添加分号的目的

2. **查找手动替换**：

第一次是

`f` + `some char`，然后 `cw` + 一些修改 + `esc` 然后 `;` 或者 `,` 上下查找，然后`.`

或者是

`/` + `some char` + `enter` ，然后 `cw` + `一些修改` + `esc`，然后 `n` 或者 `N` 上下查找，然后 `.`

最佳实践是用 `f` 搜索到目标字符串，然后 `cw` 修改完毕后回到 normal 模式，按下 `;` 跳转到下一个结果，遇到想要修改的就按下点 `.`，不想改的就按下 `;` 继续跳转

:::tip

1. vim 的核心就是选出最佳实践，形成肌肉记忆
2. 自己也要总结一套常规操作形成肌肉记忆

:::

## day 11

> 掌握多文件间的跳转

定位:

- 标记
  - 单文件：m + 小写字母
  - 多文件：m + 大写字母
- 跳转
  - `'` 跳转到标记的行
  - <code>`</code> 跳转到标记的行和列（更准确）

比如在文件的某一行 键入 `mm`，这时光标移到别的地方，键入 `'m` 就可以回到标记的那一行（键入<code>`m</code> 就可以回到具体行和列）

跳转到 函数/变量 定义：

- `gd` (go to definition)

在函数处键入 `gd` 可以跳转到定义处

对于跨文件调用，在定义处键入 `gd`，可以显示该函数被调用的地方，

> 非常有用，结合 `hjkl`

![image](https://tva4.sinaimg.cn/large/008cOUgNgy1h36y65z897j31eq0fs7l2.jpg)

![image](https://tva2.sinaimg.cn/large/008cOUgNgy1h36y31dti7j31fa0h4aib.jpg)

跳转：

> 任何大于一个单词或者超过当前行导航的移动都是一个跳转

`control + i` 和 `control` + `o` 可以理解为跳转操作的 redo 和 undo

- 撤销跳转（向前跳）：`control` + `o`
- 重做跳转（向后跳）：`control` + `i`

> 支持多文件级别的

常用的场景就是结合 `gd` 跳转到某个引用后，可以键入 `control` + `o` 返回变量定义的地方（键入 `control` + `i`再回去）

需要注意：

- vim-sneak 的跳转只会记录一次
  - 当使用 `f` 搜索完结果，并且按下了多次 `;` 跳转到下一个搜索结果的时候，按下 `ctrl` + `o` 会回到最初搜索的地方，而不是回到上一次按下 `;` 前的地方
- 平常的 `hjkl` 也不会被记录到跳转历史里

另外也可以用 `:jumps` 命令查看跳转记录（并不常用）

## day 12

> 处理包裹字符的符号

环绕字符编辑 vim-surround

快速编辑围绕在内容两端的字符（pairs of things surrounding things），比如成对出现的括号、引号，甚至 HTML/XML 标签等

normal 模式下常用的三个命令：

- 修改环绕字符：`cs<existing><desired>` (change surround)
  - 比如：<code>cs"`</code>
    ![image](https://tvax1.sinaimg.cn/large/008cOUgNly1h380bc55jej313e0i8trc.jpg)
- 新增环绕字符：`ys<motion><desired>`(这里 motion 可以理解为一个动作范围)
  - 比如：`ysiw{`
    ![image](https://tvax4.sinaimg.cn/large/008cOUgNly1h38014p2fgj313c0octol.jpg)
- 删除环绕字符：`ds<existing>`
  ![image](https://tva1.sinaimg.cn/large/008cOUgNly1h3803qnrsdj31300b64a6.jpg)

可视化模式下：

- 新增环绕字符：`S<desired>`
  - (normal 模式下的`ys<motion><desired>`更常用)

## day 13

> 替换字符串

替换的基本规则是：

```
:[ranges]s[ubstitute]/{pattern}/{string}/{flag}
```

> 这里 `[]` 包裹的部分都是可选的

- `ranges` 指的是匹配 `范围`
  - `$` 到尾部
  - `%` 全文
  - `number,number` 行数闭区间，比如 3,5 指的就是 从第 3 行到第 5 行
- `{pattern}` 正则模式，用于匹配字符
- `{string}` 替换字符
- `{flag}`
  - `g` 当前行的范围
  - `c` 弹框选择替换

还有可视化模式下的全部替换

多选操作：`gb`，匹配后面的与当前光标相同的字符，连续 `gb` 选中相同的字符，比如`gb gb c`

举例：

- `:s/vivian/sky/` 替换**当前行第一个** vivian 为 sky
- `:s/vivian/sky/g` 替换**当前行所有** vivian 为 sky
- `:n,$s/vivian/sky/` 替换第 n 行开始到最后一行中每一行的第一个 vivian 为 sky
- `:n,$s/vivian/sky/g` 替换第 n 行开始到最后一行中每一行所有 vivian 为 sky
- `:%s/vivian/sky/g` 替换全文的 vivian 为 sky

## day 14

> 悬浮显示 & 大小写 & 注释

悬浮显示：

- `gh` (hover) 和鼠标悬浮是一样的效果
  - `control` + `[` 或者 `esc` 退出

大小写切换

- normal 模式下：
  - `gu` 小写
  - `gU` 大写
  - 比如 `gUiw` interface -> INTERFACE
- 可视化模式下：
  - `u` 小写
  - `U` 大写
  - 比如 `veU` interface -> INTERFACE
- 大小写互换：`~` f -> F;F -> f

注释（normal 模式和可视化模式下通用）：

- `gc` 单行注释 比如： `gcl`、`gcj`、`gc2j` 注释当前行和下两行的代码
- `gC` 多行注释 比如：`gCiw`

> 使用可视模式选中几段代码，然后使用 `gc` 就可以注释选中的代码

一些常用操作：

- `gcc` 注释光标所在的当前行
  - `{count}gcc` 注释，或取消注释光标所在行。`count` 默认为 1 ，即对当前行生效。`count` 如果大于 1 ，表示对连续的 `count` 行生效
- `gcap` 注释段落。如果函数之间是用空行分隔的，那么 `gcap` 会注释光标所在整个的函数

## day 15

> 掌握窗口的管理

对于 vim 的窗口操作存在一个命令前缀：`control` + `w`

新建窗口：

- 左右：`control` + `w` + `v`
- 上下：`control` + `w` + `s`

窗口切换：

- `control` + `w` + `hjkl` 或者 `control` + `w` + `w`

关闭窗口：

- `control` + `w` + `c`

保留当前窗口，关闭其他窗口：

- `control` + `w` + `o`

扩展：

> 利用 vscode 的自定义快捷键

- 新建窗口：
  - 左右：`cmd` + `\`
  - 上下：`control` + `cmd` + `\` (split editor up 配置)
- 关闭窗口：
  - `cmd` + `w`
  - 关闭所有窗口：`cmd` + `k` + `w`
- 窗口切换：
  - 需要打开 `keybindings.json` 下配置
  ```json
  {
    "key": "shift+left",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "h"]
    }
  },
  ```

## day 16

> 如何删除一个函数

首先有一个知识点是匹配括号：`%`

> 当光标在括号上时， 可以使用 `%` 跳到与当前括号成对的另一个括号上

所以，当光标在括号上时，可以在可视化模式下，键入 `v%` + `(`、 `{`、`[` 等就可以选中括号及内部

```js
function setName() {
  return "name";
}
```

vim-indent-object

这是 vim 的一个自带的扩展插件，这个插件基于缩进级别定义了一个新的文本对象 `i`：即使用缩进来进行一些操作：

- `vii` —— 选中同缩进等级的多行，光标会在选中的最后一行的下方
- `vai` —— 会在 `vii` 的基础上多选上面一行
- `vaI` —— 会在 `vai` 的基础上再多选下面一行

总结删除函数的方式：

- 基于段落 test-object：`dap` （但是段落是基于空格，所以函数里有空行就没办法全删）
- 基于 vim-indent-object：`dal` （前提是在函数里 `daI` 但是这是基于缩进，所以如果是在函数上键入 `daI` 与该函数相同缩进的内容均会被删除）
- `V$%d` 大写的 `V` 是基于行的，`$` 是结尾，`%` 是括号匹配 （前提是光标需要在 `function` 定义那一行）
  - 对于多个参数的话，可能格式化后参数会分行，这样可以使用两次，即 `v$%$%`

如果觉得 `I` 麻烦，可以改键：

![image](https://tvax2.sinaimg.cn/large/008cOUgNly1h3f6c7k2eej30km0gy7aa.jpg)
![image](https://tva3.sinaimg.cn/large/008cOUgNly1h3f6dijzbfj30g60qstgh.jpg)

## day 17

> 掌握宏

宏可以理解为一系列基本操作的集合，这样键入这个宏的名字，就可以执行这个宏对应的一系列基本操作

- 开始录制: q + 寄存器名称(一般就用 abcd 即可)
- 结束录制: q
- 查看录制好的宏: `:reg + 寄存器名称`
- 使用宏： @ + 寄存器名称
- 调用最后一次执行的宏： @@
- 重复执行： 10 + @ + 寄存器名称
- 安全机制： 如果输入了错误动作，或动作的行为不能够进行下去会报错并且停止，这样重复执行时用`1000@@`，降低数数的时间，降低了心智负担
- 追加: q + A（大写的寄存器名称）
- 修改宏：
  - 修改宏就是修改寄存器的内容
  - 取出来——通过`寄存器名称 + p` 或 `:put + 寄存器名称` 将寄存中的动作复制到编辑器中
  - 将修改后的动作使用`寄存器名称 + yy` or `寄存器名称 + yw` 复制进寄存器当中，完成修改

注意**写入动作命令时，需要把控光标位置，推荐使用相对位置进行定位，这样动作指令才不太会出错**

> hjkl 属于绝对位置，we text-object /f t 属于相对位置

## day 18

> vim 调用 vscode 的命令

- 格式化
- 重命名
- 折叠代码

```json
"vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<Leader>", "f", "d"],
      "commands": ["editor.action.formatDocument"]
    },
    {
      "before": ["<Leader>", "r", "n"],
      "commands": ["editor.action.rename"]
    },
    {
      "before": ["<Leader>", "["],
      "commands": [
        { "command": "editor.fold" },
        {
          "command": "vim.remap",
          "args": {
            "after": ["$", "%"]
          }
        }
      ]
    },
  ]
```

## vscode 篇章

### day 01

> 操作文件

以切换到 files explorer 区域为例：

```json
// 将键绑定放在此文件中以覆盖默认值auto[]
[
  // 切到 files explorer
  {
    "key": "ctrl+;",
    "command": "workbench.view.explorer",
    "when": "viewContainer.workbench.view.explorer.enabled"
  }
]
```

切到 editor：

```json
[
  {
    "key": "ctrl+'",
    "command": "workbench.action.focusActiveEditorGroup"
  }
]
```

折叠/展开 文件夹：

- jk 是移动，在文件处键入 l 是进入文件
- 在文件夹处键入 l 是展开/折叠文件夹
- 在文件处键入 h 是回到文件夹处

创建文件：

- 在 file explorer 处键入 a

```json
[
  {
    "key": "a",
    "command": "explorer.newFile",
    "when": "filesExplorerFocus && !inputFocus"
  }
]
```

- 在 editor 中，想要直接在当前目录下创建对应文件

```json
"vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<Leader>", "n", "f"],
      "commands": ["explorer.newFile"]
    },
]
```

创建文件夹：

- 在 file explorer：A

```json
[
  {
    "key": "shift+a",
    "command": "explorer.newFolder",
    "when": "filesExplorerFocus && !inputFocus"
  }
]
```

- 在 editor 处：

```json
 "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<Leader>", "n", "d"],
      "commands": ["explorer.newFolder"]
    },
 ]
```

重命名、删除：

```json
[
  {
    "key": "r",
    "command": "renameFile",
    "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "d",
    "command": "deleteFile",
    "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
  }
]
```

### day 02

> 操作多个 vscode 窗口

打开新的窗口：

- command + shift + n

选择工作区：

- command + r

多个窗口切换：

- command + `

关闭 vscode 窗口：

- shift + command + w

### day 03

> 掌握搜索

全局搜索：

- shift + command + f 打开搜索面板
  - command + 方向键 跳到搜索结果，这样就可以继续 `j`、`k` 移动，`l` 打开关闭（和文件操作一致）
  - 键入 shift + command + j 进一步筛选搜索结果

工作区搜索：

- command + t

当前文件下进行搜索：

- shift + command + o
  - 在上一步的基础上键入 `:` 可以对搜索结果按类别进行分组

命令搜索：

- command + shift + p

搜索文件：

- command + p
  - 按最近打开排序

文件快速切换：

- ctrl + tab

### day 04

> 搞定 git

首先是打开 `source control` 面板，vscdoe 默认是 `control + shift + g`，我们改成 (normal 模式下)：`<Leader> + g + g`：

```json
{
  "before": ["<Leader>", "g", "g"],
  "commands": ["workbench.view.scm"]
}
```

把一个文件提交到 `staged changes` (暂存的更改)：

```json
{
  "before": ["<Leader>", "g", "s"],
  "commands": ["git.stage"]
}
```

diff 操作 (在 commit 之前要去看一下文件的改动情况)：

`df -> diff`

```json
{
  "before": ["<Leader>", "g", "d", "f"],
  "commands": ["git.openChange"]
}
```

commit 操作：

```json
{
  "before": ["<Leader>", "g", "c"],
  "commands": ["git.commit"]
}
```

unstage change (把已经提交到 stage 的文件删除)：

```json
{
  "before": ["<Leader>", "g", "u"],
  "commands": ["git.unstage"]
}
```

一个插件：`edamagit`
