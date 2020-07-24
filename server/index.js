const express = require("express");
const app = express();
const mailerHelper = require("./util/mailerHelper");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  console.log("hello");
  res.json({ hi: "there" });
});

app.post("/api/send_feedback", async (req, res) => {
  console.log(req.body);

  const content = `Hi ${req.body.name}. Thank you for contacting me.`;

  const mailOptions = {
    to: req.body.email,
    from: "taolaobidaomail@gmail.com",
    subject: "Thank You",
    text: content,
  };

  await mailerHelper.sendMail(mailOptions);
  res.json({ message: "Thank you !!!" });
});

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
