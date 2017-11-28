"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var api_router_1 = require("./api-router");
var port = 8000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api_router_1.apiRouter);
app.listen(port, function () { return console.log("Server is listening on " + port); });
//# sourceMappingURL=index.js.map