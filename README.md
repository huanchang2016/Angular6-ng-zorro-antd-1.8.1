# web-source
    1. 网页前端项目前期准备：基础结构的创建、模块的分类、以及用户登录注册等；
    2. 目前版本：
        Angular@6.1.10
        Angular-cli@6.1.5
        Node@8.10.0
        Npm@5.6.0
        Ng-zorro-antd@1.8.1

### 基础
    1. 前端项目每次构建时，均会执行命令新建项目、下载安装依赖、UI库等；
    2. 为了提升效率，大致整理了前端前期准备会用到的基础结构；
    3. 当前_base 项目中包含的功能有：
        1. 基础路由搭建完成：web首页、登录注册、找回密码、关于我们等；
        2. 在httpRequestService中模拟权限配置数据，对路由进行权限配置;
        3. 在账号管理和关于我们路由下进行了权限判断；
        4. 错误页面404；
    4. 做设备判断，和移动端页面之间互相跳转；
        1. PC路由---> 移动端可以正常访问；
    5. 移动端页面访问时，需要引入 hammer.js ---> 在angular.json文件中配置；

### 下一步
    1. wap路由，PC端访问（路由适配暂未成功）：PC端要视频wap路由地址；
    2. wap端目前只能访问对应的路由页面，页面中的功能表单未完成；
