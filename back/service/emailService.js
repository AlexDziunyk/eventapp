const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', 
  port: 587, 
  secure: true, 
  auth: {
    user: '',  // вказати пошту для повідомлень, бо я не знаю де залутати її
    pass: '', // пароль, віповідно.
  },
});

module.exports = transporter;
