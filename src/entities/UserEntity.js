/**
 * Created by diego on 12-10-16.
 */
export default class User {
    constructor(id) {
        var u = US.get(id)
        this.id = u.id;
        this.name = u.name
    }

    static userIsValidInTheSystem(userExist)
    {
        if(userExist) {
            return true;
        } else {
            return false;
        }
    }
    static isValid(){

    }

}