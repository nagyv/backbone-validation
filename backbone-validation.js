// extend the backbone namespace with our custom validation solution
var nstatic = require('node-static');
require('./public/backbone-validation.js');

var fileServer = new nstatic.Server(__dirname + '/public');
module.exports = function(app, path){
  app.get(path, function(req, res){
    fileServer.serveFile('backbone-validation.js', 200, {}, req, res);
  });
};
