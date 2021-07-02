const express = require('express');
//const morgan = require('morgan'); log view request detail to server
const config = require('config');
const mongo = require('./config/mongo');
var cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public')); //static rsc from public folder
app.set('view engine', 'ejs');
app.set('views', './views'); // html client side from views folder
//app.use(morgan('tiny'));

const server = require("http").Server(app);

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());
app.use(cookieParser(config.get('jwtSecret')));

server.listen(8181, () => console.log('Project manager-Started on port 8181...'));

app.use(express.json());
app.use(cors());

mongo.connect();

app.get('/', function(req, res) {
    res.render("home.ejs");
});
app.get('/preview', function(req, res) {
    res.render("preview.ejs");
});


