const KoaRouter = require('koa-router')
const router = new KoaRouter()

const uEmail = require('../../utils/email')
const numRandom = require('number-random')

const MailCode = require('../../db/mail-code')

// login

router.get('/email/code', async ctx => {
  // 取到email
  
  const email = ctx.query.email
  // 
  if (email) {
    const code = numRandom(100000, 999999)
    uEmail.send(email, code)
    ctx.body = `已发送`
    // 保存数据到数据库中
    let doc = new MailCode({
      code,
      mail: email
    })
    doc.save().then(res => {
      console.log('保存验证码成功')
    }).catch(err => {
      console.log(err)
    })

  } else {
    ctx.body = `email 不存在`
  }

  
})

router.get('/login', async ctx => {
  await ctx.render('login')
})

router.post('/login', async ctx => {
  ctx.body = `login api`
})

// register

router.get('/register', async ctx => {
  // 把 register.html 渲染出来..
  await ctx.render('register', {
    name: '注册页面'
  })
})

router.post('/register', async ctx => {
  ctx.body = ctx.request.body
})

// logout
router.get('/logout', async ctx => {
  ctx.body = `logout`
})

module.exports = router