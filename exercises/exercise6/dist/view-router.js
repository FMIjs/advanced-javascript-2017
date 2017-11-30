"use strict";
exports.__esModule = true;
var express_1 = require("express");
exports.viewRouter = express_1.Router();
exports.viewRouter.get('/', function (req, res) {
    res.render('../views/index', { message: 'Hello world!!!' });
});
//# sourceMappingURL=view-router.js.map