//import { Sequelize, Model, DataTypes } from "sequelize";
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  host: process.env.HOST,
  username: process.env.USERDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  dialect: process.env.DIALECT,
  multipleStatements: true
});

sequelize.authenticate()
  .then(function () {
    console.log("MySQL conectado");
  })
  .catch(function (erro) {
    console.log("Falha na conexão" + erro);
  });

module.exports = sequelize
