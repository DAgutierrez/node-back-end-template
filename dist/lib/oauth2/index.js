'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {

    var database = new _sequelize2.default('sequelize-test', 'root', 'root');

    app.oauth = (0, _oauth2Server2.default)({
        model: require('./Oauth2Model')(database),
        grants: ['password', 'refresh_token'],
        //debug  : true,
        accessTokenLifetime: 604800
    });

    app.all('/oauth/token', app.oauth.grant());
};

var _oauth2Server = require('oauth2-server');

var _oauth2Server2 = _interopRequireDefault(_oauth2Server);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }