"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
// src/routes/base.router.ts
const express_1 = require("express");
class BaseRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes(); // Call the routes method to define routes in subclasses
    }
}
exports.BaseRouter = BaseRouter;
