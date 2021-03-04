//import router 
const router = require('express').Router();

const { contact } = require("../config/db")




router.get("/getAll", (req, res, next) => {
    contact.find((err, contact) => {
        if (err) { next(err) } else { res.send(contact) }
    })
});
router.post("/create", (req, res, next) => {
    const Email = new contact(req.body);
    Email.save().then((contact) => {
        res.status(201).send(`${contact.name} email has been added successfully!`)
    })
        .catch((err) => next(err));

});
var transport = {
    host: 'smtp.example.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})
module.exports = router;