---
sidebar_position: 11
---

一个学习 git 的神奇网站：https://learngitbranching.js.org/?NODEMO=

![image](https://tvax3.sinaimg.cn/large/008cOUgNgy1h3u6xvtx2lj317m0co49e.jpg)

## 基本操作

### 本地仓库上的操作：

- 查看本地仓库关联的远程仓库：`git remote`；在克隆完每个远程仓库后，远程仓库默认为 origin；加上-v 的参数后，会显示远程仓库的 url 地址
- 从远程仓库中抓取本地仓库中没有的更新：`git fetch [remote-name]`，如 git fetch origin；使用 fetch 只是将远端数据拉到本地仓库，并不自动合并到当前工作分支，只能人工合并。如果设置了**某个分支关联到远程仓库的某个分支的话**，可以使用 git pull 来拉去远程分支的数据，然后将远端分支自动合并到本地仓库中的当前分支
- 将本地仓库某分支推送到远程仓库上：`git push [remote-name] [branch-name]`，如 `git push origin master`
- 将本地分支推送到远程仓库的不同名分支：`git push <remote-name> <local-branch>:<remote-branch>`，如`git push origin serverfix:awesomebranch`
- 删除远程分支：`git push [romote-name]:<remote-branch>`，如`git push origin:serverfix`。这里省略了本地分支，也就相当于将空白内容推送给远程分支，就等于删掉了远程分支

> 添加远程仓库，一般会取一个简短的别名：`git remote add [remote-name] [url]`，比如：git remote add example git://github.com/example/example.git;

### 分支操作：

- 查看远程分支：`git branch -a`
- 显示本地仓库的所有分支：`git branch`
- 创建分支：`git branch <branch-name>`，如 git branch testing
- 从当前所处的分支切换到其他分支：`git checkout <branch-name>`，如 git checkout testing
- 新建并切换到新建分支上：`git checkout -b <branch-name>`
- 删除分支：`git branch -d <branch-name>`
- 将其他分支合并到当前分支：`git merge <branch-name>`
- 把远程分支合并到当前分支：`git merge <remote-name>/<branch-name>`
  - 如 git merge origin/serverfix；如果是单线的历史分支不存在任何需要解决的分歧，只是简单的将 HEAD 指针前移，所以这种合并过程可以称为快进（Fast forward），而如果是历史分支是分叉的，会以当前分叉的两个分支作为两个祖先，创建新的提交对象；如果在合并分支时，遇到合并冲突需要人工解决后，再才能提交
- 在远程分支的基础上创建新的本地分支：`git checkout -b <branch-name> <remote-name>/<branch-name>`，如 git checkout -b serverfix origin/serverfix
- 从远程分支 checkout 出来的本地分支，称之为跟踪分支。在跟踪分支上向远程分支上推送内容：git push。该命令会自动判断应该向远程仓库中的哪个分支推送数据；在跟踪分支上合并远程分支：git pull

:::tip
你在本地新建的分支开发好后，可以直接 `git push <remote-name> <branch-dev>`，那么远程仓库自动会创建一个 `<branch-dev>` 分支

或者 `git push --set-upstream 远程仓库名 本地分支名`
:::

### rebase

- 将一个分支里提交的改变移到基底分支上重放一遍：`git rebase <rebase-branch> <branch-name>`，如 `git rebase master server`，将特性分支 `server` 提交的改变在基底分支 `master` 上重演一遍；使用 `rebase` 操作最大的好处是像在单个分支上操作的，提交的修改历史也是一根线；如果想把基于一个特性分支上的另一个特性分支变基到其他分支上，可以使用--onto 操作：`git rebase --onto <rebase-branch> <feature branch> <sub-feature-branch>`，如 `git rebase --onto master server client`；使用 `rebase` 操作应该遵循的原则是：一旦分支中的提交对象发布到公共仓库，就千万不要对该分支进行 `rebase` 操作
- `git rebase xxx` 当前分支在 xxx 的基础上，以 xxx 为基

- [git rebase 详解（图解+最简单示例，一次就懂）](https://blog.csdn.net/weixin_42310154/article/details/119004977)
- [git rebase 的两种用法(最全)](https://blog.csdn.net/small_white_123/article/details/121563248)

### reset

- 版本回退 `HEAD` 上一版 `HEAD^` 上上版 `HEAD^^` 当往上 100 个版本写 100 个^比较容易数不过来，所以写成 `HEAD~100`
- 取消暂存区已经暂存的文件：`git reset HEAD <file>...`

## 结合 vim

> 搞定 git

首先是打开 `source control` 面板，vscdoe 默认是 `control + shift + g`，我们的配置：

- (normal 模式下)：`<Leader> + g + g`

把一个文件提交到 `staged changes` (暂存的更改)：

- (normal 模式下)：`<Leader> + g + s`

diff 操作 (在 commit 之前要去看一下文件的改动情况)：

- (normal 模式下)：`<Leader> + g + d + f`

commit 操作：

- (normal 模式下)：`<Leader> + g + c`

unstage change (把已经提交到 stage 的文件删除)：

- (normal 模式下)：`<Leader> + g + u`

:::tip
一个插件：`edamagit`，非常极客
:::

## lazygit

```shell
brew install lazygit
```

配置别名：

```shell
echo "alias lg=lazygit">>~/.zshrc
```

![image](https://tva4.sinaimg.cn/large/008cOUgNgy1h3v08vag8jj324k1cmhdt.jpg)

通过 hl 来切换面板，比如当前切换到 commits 里，可以通过 jk 来在内部进行切换

可以通过 `x` 打开菜单

![image](https://tva2.sinaimg.cn/large/008cOUgNgy1h3v0i9iiqsj317y10wngr.jpg)

当选中 files 面板后，可以通过 `Space` 来进行 add 操作，将文件放到 staged changes，也可以通过 `Space` 来进行 remove 操作，将文件从 staged changes 删除

可以通过 `c` 来进行提交操作，如果想要 reset，只需要选中某次提交的 commit，然后按 `g` 即可：

![image](https://tvax3.sinaimg.cn/large/008cOUgNgy1h3v12aidbaj318m06ogql.jpg)

![image](https://tva3.sinaimg.cn/large/008cOUgNgy1h3v12nha5jj30zc0h4dpq.jpg)

![image](https://tvax2.sinaimg.cn/large/008cOUgNgy1h3v25ae7ctj30qw172k7j.jpg)

键入 `p` 进行 push 操作。

当然还可以进行更复杂的操作：

![image](https://tvax2.sinaimg.cn/large/008cOUgNgy1h3v2ejufobj323u1akhdt.jpg)

可以在第二个面板，按下 `Enter` 进入右侧区域，通过 `tab` 来回切换 `staged` 区域和 `unstaged` 区域，通过 `Space` 来以行为单位进行 add 操作或者 remove 操作

如果要退出当前的 changes 面板，可以键入 `esc` 或者 `ctrl+[`

`Space` 是单文件级别的 add，如果要把工作区的文件全部放到暂存区，可以在工作区键入 `a`，就可以全部放到 staged 暂存区，再次键入 `a` 就可以移出暂存区

如果要取消某文件的修改，可以键入 `d`（discard changes）；键入 `D` 是针对于所有的修改过的文件来做 discard

:::tip
图标也值得注意，修改过的是 `M`，未跟踪的是 `??`(新创建的或者从未 add 过的文件就是未跟踪的)，添加到暂存区的是 `A`
:::
