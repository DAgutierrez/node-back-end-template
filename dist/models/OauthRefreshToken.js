"use strict";

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("OauthRefreshToken", {
        RefreshToken: DataTypes.STRING,
        ClientId: DataTypes.TEXT,
        Expires: DataTypes.DATE
    }, {
        classMethods: {
            associate(models) {
                models.OauthRefreshToken.belongsTo(models.User);
            }
        }
    });
};