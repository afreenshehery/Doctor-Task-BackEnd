const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const getTree = sequelize.define('getTree', {
      id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
      },
      programing: {
            type: Sequelize.JSON,
            allowNull: false,
            gggg: {
                  type: Sequelize.JSON,
                  allowNull: false,
            }
      },

      networking: {
            type: Sequelize.JSON,
            allowNull: false,

      },






}, {
      timestamps: false,
      freezeTableName: true
});




module.exports = getTree;
