const nodemailer = require("nodemailer");

const badRequest = {
  statusCode: 400,
  body: JSON.stringify({ message: 'bad request' })
};

const errorPayload = {
  statusCode: 500,
  body: JSON.stringify({ message: 'error in form submission' })
};

const success = {
  statusCode: 200,
  body: JSON.stringify({ message: 'OK' })
};


const handler = async (event, context, callback) => {
  if (event.httpMethod !== 'POST') return badRequest;
  const body = JSON.parse(event.body);
  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.a1,
      pass: process.env.a2,
    },
  });
  contactEmail.verify((err) => {
    if (err) {
      console.error(err);
      process.abort();
    }
  });
  const mail = {
    from: body.name,
    to: "sul.otaibi@outlook.sa",
    subject: `Contact Form [${body.name}]`,
    html: `<div>FROM: ${body.name}</div>
<div>EMAIL: ${body.mail}</div>
<div>Message:<br>
${body.msg}</div>`,
  };
  console.log(mail);
  contactEmail.sendMail(mail, (err) => {
    if (err) callback(err);
    else console.log(mail);
  })
  callback(null, success)
};

module.exports = { handler };
