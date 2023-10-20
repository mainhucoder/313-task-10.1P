const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js'); 
const cors = require('cors');
const app = express();
//app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/subscribe', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Initialize the Mailgun API with your credentials
  const mg = mailgun({ apiKey: 'key-df5e61dde3cae3e8c30b3282358b1050', domain: 'sandbox360410a7d50346738a78e15204b9a743.mailgun.org' });

  // Configure the email data
  const data = {
    from: 'udaygupta2592004@gmail.com',
    to: email,
    subject: 'Welcome to DEV@Deakin Newsletter',
    text: `Hello ${name},\n\nThank you for subscribing to the DEV@Deakin Newsletter. We're excited to have you on board!\n\nBest regards,\nThe DEV@Deakin Team`
  };

  // Send the email
  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }

    console.log('Email sent:', body);
    res.send('Welcome email sent successfully');
  });
});

app.listen(5000, () => {
  console.log('Server is running at port 3080');
});
