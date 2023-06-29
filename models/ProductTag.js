const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    product_id:{//foreignkey
      type:DataTypes.INTEGER,
      references:{
        model:'product',
        key:'id',
        unique:false
    }
  },
    tag_id:{//foreignkey
      type:DataTypes.INTEGER,
      references:{
        model:'tag',
        key:'id',
        unique:false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productTag',
  }
);

module.exports = ProductTag;
