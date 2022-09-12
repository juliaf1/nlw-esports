"use strict";
// const express = require('express');
// Node liberou acesso ao ECMA Script Modules de forma nativa
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/ads', () => {
    console.log('GET /ads');
});
app.listen(3333, () => {
    console.log('Up on 3333');
});
