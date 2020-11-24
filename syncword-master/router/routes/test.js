const KoaRouter = require('koa-router')
const router = new KoaRouter()


// login
router.get('/aa', async ctx => {
  ctx.body = `aa api`
})

module.exports = router