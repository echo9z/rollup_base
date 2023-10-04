// 解析json文件
import json from "@rollup/plugin-json" 
// @rollup/plugin-node-resolve 加载npm模块插件，使用这个插件可以代码中导入模块直接使用
import resolve from '@rollup/plugin-node-resolve'
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';

// @rollup/plugin-commonjs插件，用于将CommonJS模块转换为ES6模块的Rollup插件
import commonjs from '@rollup/plugin-commonjs';// 引入commojs

export default {
  input: {
    // 多入口打包
    foo: 'src/index.js',
    bar: 'src/album.js',
  },
  output: { // 指定打包的文件输出的位置
    // file: 'dist/bundle.js', // 指定输出文件名
    // format: 'iife', // 打包的函数类型
    // 代码拆分，不直接打包到一个bundle文件中
    dir: 'dist',
    format: 'amd'
  },
  // rollup中唯一插件配置plugins，向webpack中存在
  plugins: [ // 导入
    json(),
    resolve(), // 用于加载 node_modules中npm下载模块
    commonjs(), // 用于CommonJS模块转换为ES6模块
    babel({ babelHelpers: 'bundled' }), // 处理一
    // getBabelOutputPlugin({
    //   presets: ['@babel/preset-env',  {modules: 'amd'}]
    // })
  ],
  // 用来指定代码执行环境的参数，解决this执行undefined问题  (!) "this" has been rewritten to "undefined"
  // context: 'window'
}