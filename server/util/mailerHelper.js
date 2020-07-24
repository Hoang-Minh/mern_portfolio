const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: { user: process.env.USER_EMAIL, pass: process.env.USER_PASSWORD },
});

module.exports.sendMail = (mailOptions) => {
  transporter.sendMail(mailOptions);
};
