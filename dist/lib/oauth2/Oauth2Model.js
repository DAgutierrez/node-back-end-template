'use strict';

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let salt = 'DYhG93b0qyJfIxfs2guVoUubWwvniR2G0FgaC9miabc';

/* Hash passwords as lancass way */
var hashPassword = function (pass) {
    let shasum = _crypto2.default.createHash('sha1');
    shasum.update(salt + pass);
    return shasum.digest('hex');
};

var currentClientId = null;

module.exports = function (db) {
    /* @TODO get  authorized clients dynamicaly */
    var authorizedClientIds = ['s6BhdRkqt4'];

    var oauth2Model = {
        getClient: function (clientId, clientSecret, cb) {

            currentClientId = clientId;

            // console.log(color.cyan('Info: '), 'Exec getClient');
            db.query('SELECT ClientId, ClientSecret, RedirectUri FROM OauthClients WHERE ClientId = :ClientId', { replacements: { ClientId: clientId } }).spread(function (res) {

                if (!res.length) return cb(null);
                var client = res[0];

                if (clientSecret !== null && client.ClientSecret !== clientSecret) return cb();

                cb(null, {
                    clientId: client.ClientId,
                    clientSecret: client.ClientSecret,
                    redirectUri: client.RedirectUri
                });
            }, function (err) {
                if (err) {
                    // console.log(color.red('Error: '), err);
                    return cb(err);
                }
            });
        },
        grantTypeAllowed: function (clientId, grantType, cb) {
            if (grantType === 'password') {
                return cb(false, authorizedClientIds.indexOf(clientId) >= 0);
            }
            cb(false, true);
        },
        getUser: function (username, password, cb) {
            // console.log(color.cyan('Info: '), 'Exec getUser');


            db.query('SELECT Users.id from Users inner join Profiles \
        on Profiles.id = Users.ProfileId  inner join Systems \
        on Systems.id = Profiles.SystemId \
        where (Users.Email = :Email) and Users.Password = :Password and Systems.ClientId = :ClientId', { replacements: { Email: username, Password: hashPassword(password), ClientId: currentClientId } }).spread(function (res) {
                cb(null, res.length ? res : false);
            }, function (err) {
                if (err) {
                    // console.log(color.red('Error: '), err);
                    cb(err);
                }
            });
        },
        saveAccessToken: function (accessToken, clientId, expires, userId, cb) {
            // console.log('\n', color.cyan('Info: '), 'Exec saveAccessToken');
            db.query('INSERT INTO OauthAccessTokens(AccessToken, ClientId, UserId, Expires,CreatedAt,UpdatedAt) \
        VALUES (:AccessToken, :ClientId, :UserId, :Expires, NOW(), NOW())', { replacements: { AccessToken: accessToken, ClientId: clientId, UserId: userId[0].id, Expires: expires } }).spread(function (res) {
                console.log(JSON.stringify(res));
                cb(null);
            }, function (err) {
                if (err) {
                    // console.log('\n', color.red('Error: '), err);
                    cb(err);
                }
            });
        },
        getAccessToken: function (bearerToken, cb) {
            // console.log('\n', color.cyan('Info: '), 'Exec getAccessToken');
            db.query('SELECT AccessToken, ClientId, Expires, UserId \
                FROM OauthAccessTokens \
                WHERE AccessToken = :BearerToken', { replacements: { BearerToken: bearerToken } }).spread(function (res) {
                if (!res.length) return cb(null);
                var token = res[0];
                cb(null, {
                    accessToken: token.AccessToken,
                    clientId: token.ClientId,
                    expires: token.Expires,
                    userId: token.UserId
                });
            }, function (err) {
                if (err) {
                    // console.log('\n', color.red('Error: '), err);
                    return cb(err);
                }
            });
        },
        saveRefreshToken: function (token, clientId, expires, userId, cb) {
            // console.log(color.cyan('Info: '), 'Exec saveRefreshToken');

            db.query('INSERT INTO OauthRefreshTokens(Refreshtoken, ClientId, UserID, Expires, CreatedAt, UpdatedAt) \
        VALUES (:RefreshToken, :ClientId, :UserId, :Expires, NOW(), NOW())', { replacements: { RefreshToken: token, ClientId: clientId, UserId: userId[0].id, Expires: expires } }).spread(function (res) {
                cb(null);
            }, function (err) {
                if (err) {
                    // console.log('\n', color.red('Error: '), err);
                    cb(err);
                }
            });
        },
        getRefreshToken: function (bearerToken, cb) {
            // console.log(color.cyan('Info: '), 'Exec getRefreshToken');
            db.query('SELECT RefreshToken, ClientId, Expires, UserId \
                FROM OauthRefreshTokens \
                WHERE RefreshToken = :RefreshToken', { replacements: { RefreshToken: bearerToken } }).spread(function (res) {
                if (!res.length) return cb(null);
                var token = res[0];
                cb(null, {
                    accessToken: token.RefreshToken,
                    clientId: token.ClientId,
                    expires: token.Expires,
                    user: [{
                        id: token.UserId
                    }]
                });
            }, function (err) {
                if (err) {
                    // console.log('\n', color.red('Error: '), err);
                    cb(err);
                }
            });
        }
    };

    return oauth2Model;
};