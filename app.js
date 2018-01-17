const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

// Add headers

const mongoose = require('mongoose');
const Company = require('./models/company.model');

const MONGO_DB_URI = 'mongodb://arifkhan08:khanarif08@ds135777.mlab.com:35777/arif123';

var options = {
    "server": {
        "socketOptions": {
            "keepAlive": 300000,
            "connectTimeoutMS": 30000
        }
    },
    "replset": {
        "socketOptions": {
            "keepAlive": 300000,
            "connectTimeoutMS": 30000
        }
    }
}
mongoose.connect(MONGO_DB_URI, options);

mongoose.connection.on('connected', () => {
    console.log('app is connected to the mongodb', MONGO_DB_URI);
});

mongoose.connection.on('error', err => {
    console.log('error while creating to the mongo app', err);
});

app.listen('3000', () => {
    console.log('server is running on 3000 port');
});