
const nodemailer = require('nodemailer')
const self = { user: `youeryouxi@126.com`, pass: `XMCBRKROYADUTBKX` }

module.exports = {
  async send(address, code) {

    let transporter = nodemailer.createTransport({
      host: "smtp.126.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: self.user, // generated ethereal user
        pass: self.pass, // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: '"王同步 👻" <youeryouxi@126.com>', // sender address
      to: address || "297278806@qq.com", // list of receivers
      subject: "您的邮箱验证码是：" + code, // Subject line
      text: '您的邮箱验证码是：' + code,
      html:  "<b>您的邮箱验证码是"  + code +  "</b>", // html body
    });
  }
}