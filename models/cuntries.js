const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cuntries = sequelize.define('cuntries', {
      id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
      },
      cuntry: {
            type: Sequelize.STRING,
            allowNull: false,

      },

      state: {
            type: Sequelize.STRING,
            allowNull: false,

      },
      date: {
            type: Sequelize.STRING,
            allowNull: false,

      },





}, {
      timestamps: false,
      freezeTableName: true
});




module.exports = Cuntries;
