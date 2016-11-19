import babel from "babel-core/register";
import babelPolyfill from "babel-polyfill";

import express from 'express';
import expressRoutes from './routes/index';
import oauth2Server  from './lib/oauth2/index';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit : '50mb'}));

oauth2Server(app);
expressRoutes(app,express.Router());


app.listen(3000,  () => {
    console.log("server 127.0.0.1:3000");
});
