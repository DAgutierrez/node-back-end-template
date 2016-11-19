import UserEntity from './../../entities/UserEntity';


module.exports =  function(app,router) {

    router
        .use(app.oauth.authorise())
        .get('/', async function(req, res) {

            UserEntity.userIsValidInTheSystem()


            res.send("users!");

        })



    return router;
}
