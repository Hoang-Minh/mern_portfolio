const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  console.log("hello");
  res.json({ hi: "there" });
});

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
