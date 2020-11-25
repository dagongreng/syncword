const app = require('./koa')
const conf = require('./config')

// 当我们配制 ejs 模板引擎的时候
// 配制的代码一定要放在router 配制代码之前 
// 这个比较容易被忽略

const router = require('./router')


app.use(ctx => {
  ctx.body = 'hello Syncword'
})

app.listen(conf.server.PORT, () => {
  console.log(`Server run at http://localhost:${conf.server.PORT}`)
})