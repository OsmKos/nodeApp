var app = require('express')();
var nodemailer = require('nodemailer');
var credentials = require('./credentials.js');
var mailTransport = nodemailer.createTransport('SMTP',{
service: 'Gmail',
auth: {
user: credentials.gmail.user,
pass: credentials.gmail.pass,
}
});






app.get('/mail', function(err, req) {
    console.log('/c: error deteccted but not passed on');
    mailTransport.sendMail({
      from: '"Meadowlark Travel" <info@meadowlarktravel.com>',
      to: 'osmkos10@gmail.com',
      subject: 'Ваш тур Meadowlark Travel',
      text: 'Спасибо за заказ поездки в Meadowlark Travel. ' +
          'Мы ждем Вас с нетерпением!',
  }, function(err) {
      if (err) console.error('Невозможно отправить письмо: ' + error);
  });
});
app.use(function(err, req, res, next) {
    console.log('unhandled error detected: ' + err.message);
    res.send('500 - server error');
});
app.use(function(req, res) {
    console.log('route not handled');
    res.send('404 - not found');
});
app.listen(3000, function() {
    console.log('listening on 3000');
});
