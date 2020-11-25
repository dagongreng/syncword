const user = require('./routes/user')
const app = require('../koa')
const readDir = require('require-directory')
const Router = require('koa-router')


const visitor = (obj) => {
  // 待优化
  // 目前只支持一层
  // console.log(obj)
  if (obj instanceof Router) {
    app.use(obj.routes())
  } 
}

// 第一个：固定的module
// 第二个：要读取的目录
// 第三个：可以理解成完成一个的回调
readDir(module, './routes', {visit: visitor} )