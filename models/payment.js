'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    betid: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    optid: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    addressto: {
      allowNull: false,
      type: DataTypes.STRING
    },
    addressfrom: {
      allowNull: false,
      type: DataTypes.STRING
    },
    txid: {
      allowNull: false,
      type: DataTypes.STRING
    },
    amount: {
      allowNull: false,
      type: DataTypes.DECIMAL(36, 18)
    }
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};