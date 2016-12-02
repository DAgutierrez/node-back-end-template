import babel from "babel-core/register";
import babelPolyfill from "babel-polyfill";

import express from 'express';
import expressRoutes from './routes/index';
import oauth2Server  from './lib/oauth2/index';
import bodyParser from 'body-parser';

import swagger from 'swagger-express';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit : '50mb'}));

app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    basePath: 'http://localhost:3000',
    swaggerURL: '/swagger',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './public/swagger/',
    apis: [ './api.yml' ]
}));

oauth2Server(app);
expressRoutes(app,express.Router());


app.listen(3000,  () => {
    console.log("server 127.0.0.1:3000");
});
