require('dotenv').config()
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connect = require("./database/db");
const bodyParser = require('body-parser');



connect;
async () => {
  console.log("começou");
  const usuarios = await db.selectUsers();
  console.log(usuarios);
};

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(port, () =>
  console.log(`Server rodando na porta http://localhost:${port}`)
);
