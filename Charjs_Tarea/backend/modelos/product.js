const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/db');
// modelado de la tabla product
const product = sequelize.define('product', {
partNumber : {
type: DataTypes.STRING,
},
productType : {
type: DataTypes.STRING,
},
category_code : {
type: DataTypes.STRING,
},
brand_code : {
type: DataTypes.STRING,
},
family_code : {
type: DataTypes.STRING,
},
line_code : {
type: DataTypes.STRING,
},
productSegment_code : {
type: DataTypes.STRING,
},
status : {
type: DataTypes.STRING,
},
value : {
type: DataTypes.DOUBLE,
},
valueCurrency : {
type: DataTypes.STRING,
},
defaultQuantityUnits : {
type: DataTypes.STRING,
},
name : {
type: DataTypes.STRING,
},
description : {
type: DataTypes.STRING,
},
plannerCode : {
type: DataTypes.STRING,
},
sourceLink : {
type: DataTypes.STRING,
},
},
{ tableName: 'product',
    timestamps: false
})

module.exports = product;

