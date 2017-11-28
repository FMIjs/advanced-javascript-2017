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
        return _super.call(this) || this;
    }
    return Users;
}(base_1.DbModel));
exports.Users = Users;
exports["default"] = new Users();
//# sourceMappingURL=user.js.map