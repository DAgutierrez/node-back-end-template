/**
 * Created by diego on 12-10-16.
 */
export default class User {
    constructor() {

    }

    static userIsValidInTheSystem(userExist)
    {
        if(userExist) {
            return true;
        } else {
            return false;
        }
    }

}