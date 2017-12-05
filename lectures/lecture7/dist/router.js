"use strict";
exports.__esModule = true;
var express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/', function (req, res) {
    res.render('../views/index', { message: 'Hello world!!!' });
});
//# sourceMappingURL=router.js.map