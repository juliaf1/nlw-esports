// const express = require('express');
// Node liberou acesso ao ECMA Script Modules de forma nativa
import express from 'express';
const app = express();
app.get('/ads', () => {
    console.log('GET /ads');
});
app.listen(3333, () => {
    console.log('Up on 3333');
});
