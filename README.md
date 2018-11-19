# 这是一个NB的项目

## 牛不牛逼， 用心去感受，每一行代码中的诗情雅意

### 我们是有灵魂程序员，所以，我们的代码富有诗意；

#### 丫的，实在编不下去了,哈哈哈

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

##修改后上传到github上面
###简单的方式：都是在本地的master分支上进行操作修改代码
1. git status   
2. git add -A   
3. git commit -a -m "first commit"  

###安全一点的方式：在分支上进行代码的操作
1. 创建一个新的分支test,并切换至该分支：
$git checkout -b test

2. 在该分支可以对代码进行修改，删除，增加等。

3. 提交sixi这个分支修改，删除、增加的代码：
$ git commit -a -m 'commit all files'

4. 切换至master分支，把分支sixi合并到本地master中。
$git checkout master
$git merge sixi

6. 上传至远程仓库：
git push origin master
（我这里是默认本地matser传到github上面）

###用(传统方式)命令行把修改过后的代码上传到码云？？？
1. git add .
2. git commit -m "提交信息"
3. git push
###提示：
1. git add -A  提交所有变化  
2. git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)  
3. git add .  提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件  