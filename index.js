const Koa = require('Koa')
const app = new Koa()

const conf = require('./config')

app.use(ctx=>{
    ctx.body ='hello koa2'
})

app.listen(conf.server.PORT,()=>{
    console.log(`Server run at http://localhost:${conf.server.PORT}`)
})