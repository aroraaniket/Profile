const express = require('express');
const sendMail = require('./mail');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'public/resume/Resume.pdf'));
});
app.post('/', (req, res) => {
  console.log('Data:', req.body);
  const { fname, email, msg } = req.body;
  sendMail(email, fname, msg, function (err, data) {
    if (err) {
      res.sendFile(path.join(__dirname + '/failure.html'));
    } else {
      res.sendFile(path.join(__dirname + '/success.html'));
    }
  });
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log('server started on port' + ' ' + PORT);
});
