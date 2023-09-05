const express = require("express");
const { Server } = require("http");
const path = require("path");
const caminho = path.join(__dirname, "template");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(`${caminho}/index.html`);
});

app.get("/:parametro", (req, res) => {
  res.send(`<h1> Parametro da requisição get: ${req.params.parametro}</h1>`);
});

app.get("/usuario", (req, res) => {
  res.sendFile(`${caminho}/pagina.html`);
});

app.post("/cadastro/save", (req, res) => {
  console.log("Informação do corpo da requisição" + req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`O App esta rodando na porta ${port}`);
});
