import fetchApi from './fetch'
import { log } from './logger'

// 入口2文件
fetchApi('/getList?alumId=2').then(res => {
  console.log(res);
  res.data.forEach(item => {
    log(item);
  });
})