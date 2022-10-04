// Import basic modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


// App setup
var app = express();
var serverPort = 3000;
var httpServer = require('http').Server(app);

// view engine setup
app.set('views', path.join(__dirname, 'server/views/pages'));
app.set('view engine', 'ejs');

// Setup public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import Controllers
var indexController = require('./server/controllers/index');
var loginController = require('./server/controllers/login');
var signupController = require('./server/controllers/signup');
var messageController = require('./server/controllers/message');
var requirementsController = require('./server/controllers/requirements');
var gatewayController = require('./server/controllers/gateway');


// Views
app.get('/', indexController.show)
app.get('/login', loginController.show)
app.get('/signup', signupController.show)
app.get('/message', messageController.show)
app.get('/requirements', requirementsController.show)
app.get('/gateway', gatewayController.show)


module.exports = app;
app.set('port', serverPort);

var server = httpServer.listen(app.get('port'), function (){
    console.log('http server running on port ' + server.address().port);
});