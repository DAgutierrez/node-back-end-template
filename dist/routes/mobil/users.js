"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (app, router) {

    router.use(app.oauth.authorise()).get('/validateUser', (() => {
        var _ref = _asyncToGenerator(function* (req, res) {

            res.send("prueba");
        });

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    })());

    return router;
};