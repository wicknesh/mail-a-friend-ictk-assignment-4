const nodeMailer = require('nodemailer');
require('dotenv').config();

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.sender,
        pass: process.env.pass
    }
})

async function main() {
    const info = transporter.sendMail({
        from: `Anon <${process.env.sender}>`,
        to: process.env.recipient,
        subject: 'Nodemailer test 3',
        html: "<b>Ground control to Major Tom</b>"
    })
    console.log('Message sent!' + (await info).messageId);
};

main()
.catch(e => console.log(e))