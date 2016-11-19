"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by diego on 12-10-16.
 */
class User {
    constructor() {}

    static userIsValidInTheSystem(userExist) {
        if (userExist) {
            return true;
        } else {
            return false;
        }
    }

}
exports.default = User;