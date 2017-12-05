"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var enums_1 = require("./enums");
function auth(req, res, next) {
    var userId = +req.headers['auth'];
    var user = users_1.users.find(function (user) { return user.id === userId; });
    if (!user || user.role !== enums_1.UserRole.admin) {
        res.status(401).send('Unauthorized access 401').end();
        return;
    }
    next();
}
exports.auth = auth;
//# sourceMappingURL=auth.js.map