"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var view_router_1 = require("./view-router");
var api_router_1 = require("./api-router");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(view_router_1.viewRouter);
app.use('/api', api_router_1.apiRouter);
app.listen(8000, function () { return console.log('Server is listening on 8000'); });
//# sourceMappingURL=index.js.map