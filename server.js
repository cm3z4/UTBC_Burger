var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 5000;
var exphbs = require('express-handlebars');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Server is listening on...
app.listen(PORT, function () {
    console.log('Application is listening on PORT ' + PORT + '.');
});