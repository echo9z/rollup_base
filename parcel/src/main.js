// import $ from 'jquery';
import foo from "./foo";
import './index.css'
import miss from './miss1.png'

foo.bar()

// $(document.body).append('<h1>parcel</h1>')
// $(document.body).append(`<img src=${miss}></img>`)

// 动态导入
import('jquery').then($ => {
  $(document.body).append('<h1>parcel</h1>')
  $(document.body).append(`<img src=${miss}></img>`)
})

// parcel提供hot Api
if(module.hot){
  module.hot.accept(() => {
    console.log('hmr');
  })
}