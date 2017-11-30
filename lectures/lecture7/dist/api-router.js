"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_1 = require("./models/user");
var enums_1 = require("./enums");
var users_1 = require("./users");
exports.apiRouter = express_1.Router();
var counter = 0;
exports.apiRouter.get('/users', function (req, res) {
    res.send(users_1.users).end();
});
exports.apiRouter.post('/user', function (req, res) {
    var _a = req.body, firstName = _a.firstName, lastName = _a.lastName;
    var id = counter++;
    var newUser = new user_1.User(id, firstName, lastName, enums_1.UserRole.user);
    users_1.users.push(newUser);
    res.send(users_1.users).end();
});
//# sourceMappingURL=api-router.js.map