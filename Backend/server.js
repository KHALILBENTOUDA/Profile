const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require("dotenv").config();


const app = express();
const port = 3201;

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      service: process.env.EMAIL_SERVICE,
      secure: process.env.EMAIL_SECURE,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
});

// Handle form submission
app.post('/send-email', (req, res) => {
  const { name, gmail, text } = req.body;

  console.log(req.body);
  // Send email
  transporter.sendMail({
    from: gmail,
    to: 'benkhaliltouda3201@gmail.com',
    subject: 'New Message from Your Website',
    text: `Name: ${name}\nEmail: ${gmail}\nMessage: ${text}`
  }, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({status:'send', message: 'Email sent successfully' });
    }
  });
});

// Serve the PDF file
app.get('/download', (req, res) => {
  console.log('hello')
  const file = path.join(__dirname, './Dark Blue & Orange Professional Modern CV Resume.pdf'); // Update with the actual path to your CV PDF file
  console.log(file)
  res.download(file, 'KHALIL_CV.pdf');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
