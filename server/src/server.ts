// const express = require('express');
// Node liberou acesso ao ECMA Script Modules de forma nativa

import express from 'express';
import cors from 'cors';

import { createAd, getDiscord, listAds } from './controllers/ads_controller';
import { listGames } from './controllers/games_controller';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/games', listGames);

app.get('/games/:id/ads', listAds);

app.get('/ads/:id/discord', getDiscord);

app.post('/games/:id/ads', createAd);

app.listen(3333, () => {
    console.log('Up on 3333');
});