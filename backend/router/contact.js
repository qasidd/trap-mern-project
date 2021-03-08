//import router 
const router = require('express').Router();
const Email_USER = require('../config/creds')
const Email_PASS = require('../config/creds')
const nodemailer = require('nodemailer')

// POST route from contact form
router.post('/contact', (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.live.com',
      port: 465,
      secure: true,
      auth: {
        user: Email_USER,
        pass: Email_PASS
      }
    })
  
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
        res.render('contact-failure') // Show a page indicating failure
      }
      else {
        res.render('contact-success') // Show a page indicating success
      }
    })
  })
  module.exports = router;