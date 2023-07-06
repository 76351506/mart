# vue3-ts-cli

### 准备工作

安装 vscode

### vscode 插件

1. [volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
2. [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
3. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 环境准备

- nvm 安装及 nodejs 环境搭建 （nodejsV14.18.1）
- nrm 镜像源管理
- yarn 全局安装

### 脚手架安装

```cmd
    npm i -g @vue/cli
    vue create <projectName>
```

## 项目开发

### 目录规范

- eslint+perttier 配置及分离配置
- 格式化代码命令及 githook+lint-stage 提交格式化
- .editorconfig 编辑器配置统一

### 状态管理

- 动态引入状态管理相关 module
- 状态管理相关配置及抽离
- vue3 使用 vuex 及相关配置

### ant-design-vue 动态引入

<!-- 06-25上午 -->

### 回顾了 vuex 状态管理的使用

- 动态创建 modules
- 严格模式
- 命名空间 namespaced
- utils/common 开发 getStorage
- utils/common 开发 setStorage
- utils/common 开发 isLogin 登录态判断

### 配置路由

- 路由拆分
- 路由按需加载

### 框架选择

- pc **ant-design-vue**
- h5 **ant-design-vue**

### 实现登录功能

- 登录表单开发
- 路由拦截
- 路由拦截器添加访问 url 的重定向问题
- encodeURI & encodeURIComponent

### 配置路由拦截判断登录态

- 配置式 menu 菜单
- MenuIcon 组件开发
- 根据需求拆分组合路由表
- layout 布局组件开发
- form 表单提交
- 基础 table 渲染
- api 请求页面获取数据范例
- 用户权限页面开发
- 轮播图接口及相关 ts 模型开发

### 6-26

- 请求接口服务端返回登录态过期，请求拦截的重定向问题
- 装饰器封装 loading 效果 （bug）
- token 获取 uid，状态管理保存

### 6-27

- 添加轮播图、表单校验
- 编辑轮播图表单
- 成功、失败的服务端的提示信息
- 初步实现轮播图的增删改查
- 表单校验、细节处理（点击编辑回显了数据，在新建的时候清空）
- 组件拆分，利用 vuex 来维护父子组件之间共享数据
- 表单项中参数不同导致表单校验不通过的，可以通过手动维护
- 新建、编辑按钮的类型和按钮名称维护
- 创建 ENV 配置文件区分环境
- loading 装饰器 bug 修改
- 商品管理的 CURD
- 一级、二级分类的联动

## 7.4作业
1. 数据可视化饼图、柱状图、折线图
2. pc端菜单的折叠效果
3. 深色主题切换

## 7.5 作业1
- 脚手架的devServer开发接口，mockjs或者sql操作
- 搭建egg|koa|express web服务器，mockjs或者sql操作

根据素材设计合理的数据结构，完成文章列表、文章详情的数据据抽象
正确创建表结构
开发文章管理相关接口，实现文档的增删改查
实现文章列表的分页功能 （sql limit）
    - pageSize 每页的个数
    - pageCount  第几页
- 实现文章的增删改查
- 通过富文本编辑来编写文章内容
- 通过vhtml预览文章内容
- 主题切换、日间夜间模式切换，放到头像的下拉菜单。

## TODO 
- vue3 学习及文档制作 （学习、凝练言语、知识积累、公司要）
    - one note
    - yuque
    - wolai
    - 网易印象
- vuex
- pina  支持 compostion的状态管理工具
- webpack 优化
    - 了解
    - 掌握
    - 沟通
- vite  比webpack更快、更高效的前端构建工具