// send yourself an email task

const nodemailer = require("nodemailer");

const senderEmail = "bmistress545@gmail.com";
const senderPassword = "necxcxlzigtikihr";

// receive email
const receiverEmail = "owolabidavidolorunfemi@gmail.com";

// create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

// send email

const text = {
  from: "bmistress545@gmail.com",
  to: "owolabidavidolorunfemi@gmail.com",
  subject: "Test Email",
  text: "Yoooo, what's up? Dave,This is a test email from Nodemailer",
};

transporter.sendMail(text, (error, info) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
