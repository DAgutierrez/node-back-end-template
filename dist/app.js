"use strict";

var _register = require("babel-core/register");

var _register2 = _interopRequireDefault(_register);

var _babelPolyfill = require("babel-polyfill");

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./routes/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./lib/oauth2/index");

var _index4 = _interopRequireDefault(_index3);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _swaggerExpress = require("swagger-express");

var _swaggerExpress2 = _interopRequireDefault(_swaggerExpress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json({ limit: '50mb' }));

app.use(_swaggerExpress2.default.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    basePath: 'http://localhost:3000',
    swaggerURL: '/swagger',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './public/swagger/',
    apis: ['./api.yml']
}));

(0, _index4.default)(app);
(0, _index2.default)(app, _express2.default.Router());

app.listen(3000, () => {
    console.log("server 127.0.0.1:3000");
});