'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('./../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by diego on 13-10-16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


class UserAdapter {
    constructor() {}

    static userExist(username) {
        return _asyncToGenerator(function* () {
            try {
                let user = yield _index2.default.User.find({
                    where: {
                        username: username
                    }
                });

                if (user) {
                    return true;
                } else {
                    return false;
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }

}
exports.default = UserAdapter;