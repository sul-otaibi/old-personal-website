// const process = require("process");
// const path = require("path");
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const serverless = require("serverless-http");

// const PORT = 23353;
// const app = express();

// app.use(cors());
// app.use(express.json({ strict: false }));
// app.use(express.static(path.join(__dirname, "build")));

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.a1,
//     pass: process.env.a2,
//   },
// });

// contactEmail.verify((err) => {
//   if (err) {
//     console.error(err);
//     process.abort();
//   } else console.log(`ready man!`);
// });

// app.post("/api/sendmail", (req, res) => {
//   const mail = {
//     from: req.body.name,
//     to: process.env.a3,
//     subject: `Contact Form [${req.body.name}]`,
//     html: `<div>FROM: ${req.body.name}</div>
//     <div>EMAIL: ${req.body.mail}</div>
//     <div>Message:<br>
//     ${req.body.msg}</div>`,
//   };
//   contactEmail.sendMail(mail, (err) => {
//     if (err) res.sendStatus(500);
//     else res.sendStatus(200);
//   });
// });

// app.get("/", (req, res) => {
//   rse.sendFile("index.html");
// });

// app.listen(PORT, () => {
//   console.log(`running on port ${PORT}`);
// });

// module.exports.handler = serverless(app);

const process = require("process");
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.a1,
    pass: process.env.a2,
  },
});

const badRequest = {
  statusCode: 400,
  body: JSON.stringify({ message: 'bad request' })
};
const errorPayload = {
  statusCode: 500,
  body: JSON.stringify({ message: 'error in form submission' })
};


const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') return badRequest;
  const body = JSON.parse(event.body);
  const mail = {
    from: body.name,
    to: process.env.a3,
    subject: `Contact Form [${body.name}]`,
    html: `<div>FROM: ${body.name}</div>
<div>EMAIL: ${body.mail}</div>
<div>Message:<br>
${body.msg}</div>`,
  };
  contactEmail.sendMail(mail, (err) => {
    if (err) return errorPayload;
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'hi' })
  }
};

module.exports = { handler };