// const express = require('express');
// Node liberou acesso ao ECMA Script Modules de forma nativa

import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
    console.log('GET /ads');
    return res.json([
        { "id": 1 },
        { "id": 2 }
    ])
});

app.listen(3333, () => {
    console.log('Up on 3333');
});