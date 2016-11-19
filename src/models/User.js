module.exports = function(sequelize, DataTypes) {

    let User = sequelize.define("User", {
        Email: DataTypes.STRING,
        Username: DataTypes.STRING,
        Password: DataTypes.TEXT
    }, {
        classMethods: {
            associate(models) {
                models.User.belongsTo(models.Profile);
            }
        }
    })

    return User;
}