/**
 * Created by diego on 13-10-16.
 */
import db from './../models/index';

export default class UserAdapter {
    constructor() {

    }

    static async userExist(username)
    {
        try {
            let user = await db.User.find({
                where: {
                    username: username
                }
            })

            if(user) {
                return true;
            } else {
                return false;
            }
        } catch(err) {
            console.log(err);
        }

    }

}

