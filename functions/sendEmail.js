const nodemailer = require("nodemailer");
const { json } = require("stream/consumers");

exports.handler = async (event, context, callback) => {
    let data =  {}
    try {
        data = JSON.parse(event.body)
    } catch {
        return {
            statusCode: 500,
            body: "Oops"
        }
    }


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

    const modelo = data.modelo || null

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
            modelo: ${modelo} \n

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
            modelo: ${modelo}<br/>

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