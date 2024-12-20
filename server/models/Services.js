const { DataTypes, ForeignKeyConstraintError } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Services = sequelize.define("Services", {
        title: {
            type: DataTypes.STRING,
            primeryKey: true,
            allownull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allownull: false
        },
        shortDescription: {
            type: DataTypes.STRING,
            primeryKey: false,
            allownull: false
        },
        fullDescription: {
            type: DataTypes.STRING,
            primeryKey: false,
            allownull: false
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            primeryKey: false,
            allownull: false
        },
        address: {
            type: DataTypes.STRING, 
            primeryKey: false,
            allownull: false
        },
        email: {
            type: DataTypes.STRING,
            primeryKey: false,
            allownull: false
        }
    })
    return Services
}