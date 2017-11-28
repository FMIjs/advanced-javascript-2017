"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("./base");
var UserStructure = (function () {
    function UserStructure() {
        this.index = 1;
        this.entities = [{}];
        this.emails = [null];
    }
    return UserStructure;
}());
var Users = (function (_super) {
    __extends(Users, _super);
    function Users() {
        var _this = _super.call(this, 'users', UserStructure) || this;
        _this.findByEmail = function (email) { return _this._db.entities[_this._db.emails.indexOf(email)]; };
        _this.findByUsername = function (username) { return username ?
            _this._db.entities.find(function (user) { return (user.firstName + "." + user.lastName).toLowerCase() === username.toLowerCase(); }) : null; };
        _this.findById = function (id) { return id ?
            _this._db.entities.find(function (user) { return user._id === id; }) : null; };
        return _this;
    }
    Users.prototype.insert = function (user) {
        if (this._db.emails.indexOf(user.email) !== -1)
            return Promise.reject(new Error('User already registered!'));
        this._db.emails.push(user.email);
        return _super.prototype.insert.call(this, user);
    };
    return Users;
}(base_1.DbModel));
exports.Users = Users;
exports["default"] = new Users();
//# sourceMappingURL=user.js.map