"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_router_1 = require("./base.router");
class HumeRoute extends base_router_1.BaseRouter {
    constructor() {
        super(); // Call the constructor of the BaseRouter class
    }
    routes() {
        this.router.get('/hume', (req, res) => {
            res.status(200).json({ message: 'Pong!' });
        });
    }
}
exports.default = new HumeRoute();
