const express = require("express");
const fs = require("fs");
const app = express();
const router = require("./routes/login_criar");

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Servidor está funcionado certinho, porta 3000");
});