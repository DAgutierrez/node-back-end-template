module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Profile", {
        Name: DataTypes.STRING,
        Active: DataTypes.INTEGER
    }, {
        classMethods: {
            associate(models) {
                models.Profile.belongsTo(models.System);
            }
        }
    })
}