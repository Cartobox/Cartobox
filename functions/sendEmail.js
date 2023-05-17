/*const { json } = require("stream/consumers")

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
}*/

const nodemailer = require("nodemailer");
const { json } = require("stream/consumers");

exports.handler = async (event, context, callback) => {
    const data = JSON.parse(event.body);

    const error = false;

    const senderEmail = data.email || null;
    const assunto = data.customassunto || data.assunto || null;
    const nome = data.name || null
    const empresa = data.empresa || null
    const tel = data.tel || null
    const msg = data.mensagem || null

    const cartao = data.tipocartao || null
    const medidas = data.medidas || null
    const impressao = data.impressao || null
    const quantidade = data.quantidade || null

    if (!senderEmail || !assunto || !nome || !empresa || !tel || !msg) error = true
    

    const transporter = nodemailer.createTransport({
        host: "smtp.ptempresas.pt",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });



    let info = await transporter.sendMail({
        from: `"${nome}" <${process.env.EMAIL}>`,
        to: `${process.env.EMAIL}`,
        subject: `${empresa} | ${assunto}`,
        text: `
            <b>${assunto}</b> \n
            nome da pessoa de contacto: ${nome} \n
            empresa: ${empresa} \n
            tel: ${tel} \n
            email: ${senderEmail} \n\n
            tipo de cartão: ${cartao}\n
            medidas: ${medidas}\n
            impressao: ${impressao}\n
            quantidade: ${quantidade}\n

            \n\n
            ${msg}

            \n\n\n\n
            Enviado através de cartobox.pt. Não respondam a este email.
        
        `,
        html: `
            <b>${assunto}</b><br/> <br/>
            nome da pessoa de contacto: ${nome} <br/>
            empresa: ${empresa} <br/>
            tel: ${tel} <br/>
            email: ${senderEmail} <br/><br/>
            tipo de cartão: ${cartao}<br/>
            medidas: ${medidas}<br/>
            impressao: ${impressao}<br/>
            quantidade: ${quantidade}<br/>

            <br/><br/>
            ${msg}

            
            <br/><br/><br/><br/>
            Enviado através de cartobox.pt. Não respondam a este email.
        `,
        headers: {
            replyTo: senderEmail,
        },
    });

    

    if (info.messageId && !error) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "sended"
            })
        }
    }
  
    return {
        statusCode: 500,
        body: "Oops"
    }
};