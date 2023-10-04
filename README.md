## rollup
> 指定rollup打包的函数类型 iife自调用函数 (function(n){}))(a)
yarn rollup ./src/index.js --format iife --file dist/bundle.js

> --config 指定不同文件进行打包处理
yarn rollup --config rollup.production.config.js
yarn rollup --config rollup.development.config.js

处理将es6转es5
@babel/core：babel核心实现
@babel/preset-env：es6转es5，使用这个包要基于 @babel/core
@rollup/plugin-babel：babel 插件

rollup备用原则
加载非ESM的第三方模块比较复杂
模块最终都被打包到一个函数中，无法实现HMR 无法热更新
浏览器环境中，码代码拆分功能依赖AMD库 比如 requirejs@2.3.6



## parcel
parcel零配置前端打包器，傻瓜式使用体验
parcel-bundler构建前端应用程序
yarn add parcel-bundler
parcel推荐使用 index.html 做入口文件
执行 `yarn parcel src/index.html`
parcel会运行一个服务器 Server running at http://localhost:1234，当html中scrip标签中js文件发生，变化就会hrm热更新效果
``` js
// parcel提供hot Api
if(module.hot){
  module.hot.accept(() => {
    console.log('hmr');
  })
}
```
parcel支持自动安装npm模块
在文件中import $ from 'jquery'，会自动下载
同时也支持自动引入样式，图片自动加载在main.js中添加import 'index.css'
使用yarn parcel build src/index.html 进行生产打包