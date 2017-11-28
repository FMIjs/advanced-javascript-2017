"use strict";
exports.__esModule = true;
var express_1 = require("express");
exports.apiRouter = express_1.Router();
exports.apiRouter.get('/', function (req, res) {
    res.send("Hello from the API").end();
});
//# sourceMappingURL=api-router.js.map