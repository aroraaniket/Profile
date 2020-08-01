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
  res.download(path.join(__dirname, 'public/resume/AniketAroraResume.pdf'));
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
let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}

app.listen(port, function () {
  console.log('Server started on port 3000');
});
