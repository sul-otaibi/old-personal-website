const path = require("path");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const serverless = require("serverless-http");

const PORT = 23353;
const app = express();

app.use(cors());
app.use(express.json({ strict: false }));
app.use(express.static(path.join(__dirname, "build")));

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
  } else console.log(`ready man!`);
});

app.post("/api/sendmail", (req, res) => {
  const mail = {
    from: req.body.name,
    to: process.env.a3,
    subject: `Contact Form [${req.body.name}]`,
    html: `<div>FROM: ${req.body.name}</div>
    <div>EMAIL: ${req.body.mail}</div>
    <div>Message:<br>
    ${req.body.msg}</div>`,
  };
  contactEmail.sendMail(mail, (err) => {
    if (err) res.sendStatus(500);
    else res.sendStatus(200);
  });
});

app.get("/", (req, res) => {
  rse.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
