// 导入npm下载的模块
// import _ from 'lodash';

import { camelCase } from 'lodash';
import { log } from "./logger";
import message from "./message";
import { name, version } from "../package.json";
import cjs from './cjs-module'

const msg = message.hi
log(msg)
log(name)
log(version)
log(camelCase('hello abc'))
log(cjs)

// 拆分代码 浏览器中华遵循amd
import('./logger').then(({ log }) => {
  log('代码 拆分')
}) 
