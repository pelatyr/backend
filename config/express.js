var express = require('express');
var mysql = require('mysql');
var bodyPaser = require('body-parser');
const connect = require('../db')(mysql);

module.exports = function() {
    var app = express();

    app.use(bodyPaser.urlencoded({
        extended: true
    }));
    app.use(bodyPaser.json());

    require('../app/routes/all.routes')(app, connect);
    return app;
} 