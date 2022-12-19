const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");
// sequelize.sync({ force: true })
const products = sequelize.define("products", {
       id: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
       },
       title: {
              type: Sequelize.STRING,
              allowNull: false,
       },


       price: {
              type: Sequelize.INTEGER,

       },
       category: {
              type: Sequelize.STRING,
              allowNull: false,
       },

       // Image: {
       //        type: Sequelize.TEXT,
       //        allowNull: false,
       // },





},
       {
              timestamps: false,
              freezeTableName: true
       });

module.exports = products;