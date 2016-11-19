module.exports =  function(app,router) {

    router
        .use(app.oauth.authorise())
        .get('/validateUser', async function(req, res) {





            res.send("prueba");

        })

    return router;
}
