'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./views'));

app.use(express.static('./src'));
app.use(express.static('./dist'));

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("listening at port %s",port);
})