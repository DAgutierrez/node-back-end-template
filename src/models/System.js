module.exports = function(sequelize, DataTypes) {
    return sequelize.define("System", {
        Name: DataTypes.STRING,
        Description: DataTypes.STRING,
        ClientId: DataTypes.TEXT,
        Active: DataTypes.INTEGER
    })
}