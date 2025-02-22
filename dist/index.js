"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ping_route_1 = __importDefault(require("./routes/ping.route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)()); // Enable CORS for all routes
app.use(express_1.default.json()); // Parse JSON request bodies
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Backend!');
});
app.post('/example', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.json({ message: 'Data received successfully', receivedData: data });
});
// Mount the routers
app.use('/', ping_route_1.default.router); // Mount the PingRouter at the root
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
