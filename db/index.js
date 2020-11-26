const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost:27017/syncword', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
db.then(res => {
  console.log(`数据库连接成功`)
})
db.catch(err => {
  console.log(`数据连接失败`)
})