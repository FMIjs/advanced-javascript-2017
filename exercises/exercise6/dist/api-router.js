"use strict";
exports.__esModule = true;
var express_1 = require("express");
exports.apiRouter = express_1.Router();
var SortStrings = (function () {
    function SortStrings() {
    }
    SortStrings.prototype.sort = function () {
    };
    return SortStrings;
}());
var sort = new SortStrings;
sort.elements = ['1', '2', '3'];
sort.elements.push('1');
exports.apiRouter.get('/', function (req, res) {
    res.send("Hello from the API").end();
});
//# sourceMappingURL=api-router.js.map