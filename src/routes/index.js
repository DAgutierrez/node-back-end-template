/**
 * Created by diego on 15-10-16.
 */
var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';


export default function (app,router) {

    fs.readdirSync(__dirname)
        .filter(function(file) {

            var isDirectory = fs.lstatSync(__dirname+ "/" +file).isDirectory();
            return isDirectory;

        })
        .forEach(function (directory) {

           var directoryPath = __dirname + "/" + directory;
            
            fs
                .readdirSync(directoryPath)
                .forEach(function (fileName) {
                    let route = require(directoryPath + '/' + fileName)
                    let RouterExpress = route(app,router)
                    let routePath = "/" + directory + '/' + fileName.substring(0,fileName.length-3);
                     app.use(routePath, RouterExpress)
                })
        })

}



