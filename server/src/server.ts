// const express = require('express');
// Node liberou acesso ao ECMA Script Modules de forma nativa

import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';

import { convertMinutesToTimeString, convertTimeStringToMinutes } from './utils/parse-time';
import { consoleRequest } from './utils/log-request';

import { createAd, getDiscord, listAds } from './controllers/ads_controller';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({
    log: ['query'],
});

app.get('/games', async (req, res) => {
    consoleRequest(req);
    
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    });

    return res.json(games);
});

app.get('/games/:id/ads', listAds);

app.get('/ads/:id/discord', getDiscord);

app.post('/games/:id/ads', createAd);

app.listen(3333, () => {
    console.log('Up on 3333');
});