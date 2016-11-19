/**
 * Created by diego on 16-10-16.
 */
import oauthserver from 'oauth2-server';
import Sequelize from 'sequelize';

export default function (app) {

    var database = new Sequelize(
        'sequelize-test',
        'root',
        'root');

    app.oauth = oauthserver({
        model  : require('./Oauth2Model')(database),
        grants : ['password', 'refresh_token'],
        //debug  : true,
        accessTokenLifetime : 604800
    });


    app.all('/oauth/token', app.oauth.grant());

}


