const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// sequelize.sync({ force: true })


// sequelize.sync({ force: true })
const treeView = sequelize.define('treeView', {
      id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
      },
      course: {
            type: Sequelize.STRING,
            allowNull: false,

      },

}, {

      freezeTableName: true
});




module.exports = treeView;
