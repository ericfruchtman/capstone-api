const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/Users/ericfruchtman/capstone-api/path/to/database.sqlite'
  });
module.exports = {sequelize};
