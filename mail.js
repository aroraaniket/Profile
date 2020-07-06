const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: 'c248f2f8ce0a8e53817e3633f41d1c65-913a5827-dc46e393',
    domain: 'sandbox17f2eedd28a84081b78822459b56291e.mailgun.org',
  },
};
const transporter = nodemailer.createTransport(mailGun(auth));
const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'aniketarora568@gmail.com',
    subject,
    text,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
