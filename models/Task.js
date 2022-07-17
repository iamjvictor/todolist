const Sequelize = require("sequelize");
const sequelize = require("../database/db.js");

const post = sequelize.define("postagens", {
  task: {
    type: Sequelize.STRING,
  },
  check: {
    type: Sequelize.BOOLEAN,
  },
  date: {
    type: Sequelize.DATE,
    default: Date.now(),
  },
});

//post.sync({ force: true });

module.exports = post;
