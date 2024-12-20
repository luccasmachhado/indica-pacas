const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            allownull: false,
            primaryKey: true
            
        },
        firstName: {
            type: DataTypes.STRING,
            allownull: false,
            primaryKey: false 
        },
        lastName: {
            type: DataTypes.STRING,
            allownull: false,
            primaryKey: false
        },
        password:{
            type: DataTypes.STRING,
            allownull: false,
            primaryKey: false
        }
    })
    return Users
}