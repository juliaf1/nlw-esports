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
    
    const games = await prisma.game.findMany();

    return res.json(games);
});

app.get('/games/:id/ads', (req, res) => {
    consoleRequest(req);

    const { id } = req.params;

    return res.json([]);
});

app.get('/ads/:id/discord', (req, res) => {
    consoleRequest(req);

    const { id } = req.params;

    return res.json([]);
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