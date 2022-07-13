//import { Sequelize, Model, DataTypes } from "sequelize";
const Sequelize = require('sequelize')

const sequelize = new Sequelize("todo", "root", "250202joaov", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(function () {
    console.log("MySQL conectado");
  })
  .catch(function (erro) {
    console.log("Falha na conexão" + erro);
  });

module.exports = sequelize
