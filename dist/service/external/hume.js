"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hume_1 = require("hume");
class HumeClass {
    constructor() {
        this.client = new hume_1.HumeClient({
            apiKey: process.env.HUME_API_KEY || '',
            secretKey: process.env.HUME_SECRET_KEY || '',
        });
    }
}
exports.default = HumeClass;
