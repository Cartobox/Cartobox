const { json } = require("stream/consumers")

const nodemailer = require("nodemailer");
require('dotenv').config();

// async..await is not allowed in global scope, must use a wrapper
async function main() { 
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ptempresas.pt",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <comercial@cartobox.pt>', // sender address
      to: "comercial@cartobox.pt", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  



    console.log("Message sent: %s", info.messageId);
  }
  
  

exports.handler = async function(event, contexct) {

    main().catch(console.error);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "hello world " + process.env.EMAIL
        })
    }
}