const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Country = sequelize.define(
  "Country",
  {
    country_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "country",
    timestamps: false,
  }
);

module.exports = Country;
