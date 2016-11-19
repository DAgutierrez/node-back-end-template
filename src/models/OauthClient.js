/**
 * Created by diego on 15-10-16.
 */
/**
 * Created by diego on 15-10-16.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("OauthClient", {
        ClientId: DataTypes.STRING,
        ClientSecret: DataTypes.TEXT,
        RedirectUri: DataTypes.TEXT,
    })
}