# 全民磕袁立项

## 背景

一磕头永流传，绝不不是为了面试积累经验，堆出来的屎山

## 一期功能

PRD（假）：https://www.xiaopiu.com/h5/byId?type=project&id=6298d955ecd2105ef7ad5fb7

### 注册

<del>方案1：提供注册流程，使用邮箱 / 手机</del>

方案2：免密码，短信验证码直接登录

方案3：微信授权

### 磕头编辑器

- 标题、正文、图片（单张）

- 正文与图片可选，根据填入的内容，展示不同的磕头卡片

- 实时预览

### 磕头广场

- 日榜、周榜、总榜（点赞数 x 发布时间排序）

- 点赞

- 分享（待定）

### 收藏

- 我的收藏

### 个人中心

- 昵称、头像

- 日历热力图

- 磕头积分（兑换红包封面等）

## 技术选型

### 前端 @sosohime

APP: RN，先开发安卓

### 后端 @WormW

Golang

#### 接口列表

- 短信认证
- 图片上传
- 昵称、头像修改
- 新增 / 修改磕头
- 磕头列表
  - 支持按user filter
  - 支持筛选时间
  - 支持按点赞数排序
- 点赞
