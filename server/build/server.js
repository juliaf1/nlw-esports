"use strict";
// const express = require('express');
// Node liberou acesso ao ECMA Script Modules de forma nativa
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ads_controller_1 = require("./controllers/ads_controller");
const games_controller_1 = require("./controllers/games_controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/games', games_controller_1.listGames);
app.get('/games/:id/ads', ads_controller_1.listAds);
app.get('/ads/:id/discord', ads_controller_1.getDiscord);
app.post('/games/:id/ads', ads_controller_1.createAd);
app.listen(3333, () => {
    console.log('Up on 3333');
});
