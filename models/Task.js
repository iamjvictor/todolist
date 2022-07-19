const Sequelize = require("sequelize");
const sequelize = require("../database/db.js");

const post = sequelize.define("postagens", {
  task: {
    type: Sequelize.STRING,
    require: true,
  },
  check: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
});

//post.sync({ force: true });

module.exports = post;
