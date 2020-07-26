require("dotenv").config();
const express = require("express");
const app = express();
const mailerHelper = require("./util/mailerHelper");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file or main.css file
  app.use(express.static("client/build"));

  // Express will serve up the index.html file if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.post("/api/send_feedback", async (req, res) => {
  console.log(req.body);

  const thankYou = `Hi ${req.body.name}. Thank you for contacting me.`;

  const mailOptionsToSender = {
    to: req.body.email,
    from: process.env.USER_EMAIL,
    subject: "Thank You",
    text: thankYou,
  };

  const mailOptionsToMe = {
    to: process.env.USER_EMAIL,
    from: req.body.email,
    subject: "From my Portfolio",
    text: req.body.message,
  };

  await mailerHelper.sendMail(mailOptionsToSender);
  await mailerHelper.sendMail(mailOptionsToMe);
  res.json({ message: "Your Message has been received. Thank You." });
});

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
