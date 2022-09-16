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

    function parseHour(minutes: number) {
        const hour = Math.floor(minutes / 60)
        let min = minutes % 60
        return `${hour}:${min === 0 ? '00' : min}`
    }

    const { id } = req.params;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true
        },
        where: {
            gameId: id,
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    const formattedAd = ads.map (ad => {
        return({
            ...ad,
            hourStart: parseHour(ad.hourStart),
            hourEnd: parseHour(ad.hourEnd),
        });
    });

    return res.json(formattedAd);
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