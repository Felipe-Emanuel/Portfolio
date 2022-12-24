require("dotenv").config();
const path = require("path");
const mailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const { host, port, user } = require("../config/mail.json");

const smtp = mailer.createTransport({
  host,
  port,
  secure: false,
  auth: {
    user,
    pass: process.env.SENDGRID_API_KEY,
  },
});

smtp.use('compile', hbs({
  viewEngine: {
    defaultLayout: undefined,
    partialsDir: path.resolve('./resources/mail/')
  },
  viewPath: path.resolve('./resources/mail/'),
  extName: '.html',
}))

module.exports = smtp;
