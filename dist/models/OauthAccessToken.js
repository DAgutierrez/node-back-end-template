"use strict";

/**
 * Created by diego on 15-10-16.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define("OauthAccessToken", {
        AccessToken: DataTypes.STRING,
        ClientId: DataTypes.TEXT,
        Expires: DataTypes.DATE
    }, {
        classMethods: {
            associate(models) {
                models.OauthAccessToken.belongsTo(models.User);
            }
        }
    });
};