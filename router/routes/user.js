const KoaRouter = require('koa-router')
const router = new KoaRouter()

//register
router.post('/register',async ctx =>{
    ctx.body = `register api`
})
//login
router.get('/login', async ctx => {
    ctx.body = `login api`
})
//logout
router.get('/logout', async ctx => {
    ctx.body = `logout api`
})
module.exports = router