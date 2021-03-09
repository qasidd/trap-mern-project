//import router 
const router = require('express').Router();
const { Email_USER, Email_PASS } = require('../config/creds');
const nodemailer = require('nodemailer');

// POST route from contact form
router.post('/sendemail', (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: Email_USER,
      pass: Email_PASS
    }
  });

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: Email_USER,
    subject: `${req.body.subject}`,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      // res.render('contact-failure') // Show a page indicating failure
      console.log("error branch:");
      console.log(error);
    }
    else {
      // res.render('contact-success') // Show a page indicating success
      console.log("response branch:");
      console.log(response);
    }
  })
})

module.exports = router;