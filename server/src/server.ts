// const express = require('express');
// Node liberou acesso ao ECMA Script Modules de forma nativa

import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const app = express();
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

app.get('/games/:id/ads', async (req, res) => {
    consoleRequest(req);

    const { id } = req.params;

    const ads = await prisma.ad.findMany({
        where: {
            gameId: id,
        }
    });

    return res.json(ads);
});

app.get('/ads/:id/discord', async (req, res) => {
    consoleRequest(req);

    const { id } = req.params;

    const discord = await prisma.ad.findFirst({
        select: {
            discord: true,
        },
        where: { id },
    });

    return res.json(discord);
});

app.post('/ads', (req, res) => {
    consoleRequest(req);

    return res.status(201).json({});
});


function consoleRequest(req: any) {
    console.log(`GET ${req.url}`);
};

app.listen(3333, () => {
    console.log('Up on 3333');
});