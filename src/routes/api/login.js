import UserEntity from './../../entities/UserEntity';
import UserAdapter from './../../entities/UserAdapter';


module.exports =  function(app,router) {



    router
        .use(app.oauth.authorise())
        .get('/', async function(req, res) {

            /**
             * @api {get} /user/:id Request User information
             * @apiName GetUser
             * @apiGroup User
             *
             * @apiParam {Number} id Users unique ID.
             *
             * @apiSuccess {String} firstname Firstname of the User.
             * @apiSuccess {String} lastname  Lastname of the User.
             */


            var user = new UserEntity(userId)
            user.isValid()
            let isValid = UserEntity.userIsValidInTheSystem(usersValid, 2,3,4);
            user.disabled()
            res.send(isValid);

        })

        .get('/getAll', async function(req, res) {

            UserEntity.userIsValidInTheSystem()


            res.send("users!");

        })




    return router;
}
