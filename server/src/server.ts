// const express = require('express');
// Node liberou acesso ao ECMA Script Modules de forma nativa

import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';

import { convertMinutesToTimeString, convertTimeStringToMinutes } from './utils/parse-time';

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

app.get('/games/:id/ads', async (req, res) => {
    consoleRequest(req);

    const { id } = req.params;

    const ads: any = await prisma.ad.findMany({
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

    const formattedAd: any = ads.map ((ad: any) => {
        return({
            ...ad,
            hourStart: convertMinutesToTimeString(ad.hourStart),
            hourEnd: convertMinutesToTimeString(ad.hourEnd),
        });
    });

    return res.json(formattedAd);
});

app.get('/ads/:id/discord', async (req, res) => {
    consoleRequest(req);

    const { id } = req.params;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: { id },
    });

    return res.json({ discord: ad.discord });
});

app.post('/games/:id/ads', async (req, res) => {
    consoleRequest(req);

    const gameId = req.params.id;
    const body = req.body;

    const ad = await prisma.ad.create({
        data: {
            ...body,
            hourStart: convertTimeStringToMinutes(body.hourStart),
            hourEnd: convertTimeStringToMinutes(body.hourEnd),
            gameId
        }
    });

    return res.status(201).json(ad);
});


function consoleRequest(req: any) {
    console.log(`GET ${req.url}`);
};

app.listen(3333, () => {
    console.log('Up on 3333');
});