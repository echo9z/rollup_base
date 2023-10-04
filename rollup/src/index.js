// 入口1文件
import fetchApi from './fetch'
import { log } from './logger'

fetchApi('/getList?alumId=1').then(res => {
  console.log(res);
  res.data.forEach(item => {
    log(`${item.name} ${item.age}`);
  });
})