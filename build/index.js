"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require('path');
const navigate_1 = __importDefault(require("./routes/navigate"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(navigate_1.default);
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const PORT = process.env.PORT || 4000;
app.get('/ping', (_, res) => {
    console.log('someone pinged here!!');
    res.send('pong');
});
app.use((_, res, next) => {
    res.status(404).render('404.ejs');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
