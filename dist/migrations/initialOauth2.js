'use strict';

/**
 * Created by diego on 15-10-16.
 */
/**
 * Created by diego on 15-10-16.
 */
var db = require('./../models/index');
var crypto = require('crypto');

let salt = 'DYhG93b0qyJfIxfs2guVoUubWwvniR2G0FgaC9miabc';

module.exports = {
    up: function (queryInterface, Sequelize) {
        // logic for transforming into the new state
        let oauthClient = {
            clientId: 's6BhdRkqt4',
            clientSecret: 'gX4fBat3bV',
            redirectUri: '/private',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        let user = {
            email: 'oauth@gmail.com',
            username: 'oauth',
            password: hashPassword('oauth'),
            createdAt: new Date(),
            updatedAt: new Date(),
            ProfileId: 1
        };

        let profile = {
            name: 'Administrador',
            active: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            SystemId: 1
        };

        let system = {
            name: 'my app',
            description: 'my app system',
            clientId: 's6BhdRkqt4',
            active: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        queryInterface.bulkInsert('OauthClients', [oauthClient]).then(function () {
            queryInterface.bulkInsert('Systems', [system]).then(function () {
                queryInterface.bulkInsert('Profiles', [profile]).then(function () {
                    return queryInterface.bulkInsert('Users', [user]).then(function () {});
                });
            });
        });
    },

    down: function (queryInterface, Sequelize) {}
};

var hashPassword = function (pass) {
    let shasum = crypto.createHash('sha1');
    shasum.update(salt + pass);
    return shasum.digest('hex');
};