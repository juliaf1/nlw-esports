import { PrismaClient } from '@prisma/client';

import { convertMinutesToTimeString, convertTimeStringToMinutes } from '../utils/parse-time';
import { consoleRequest } from '../utils/log-request';

const prisma = new PrismaClient({
    log: ['query'],
});

export async function listAds(req: any, res: any) {
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
};

export async function getDiscord(req: any, res: any) {
    consoleRequest(req);

    const { id } = req.params;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: { id },
    });

    return res.json({ discord: ad.discord });
};

export async function createAd(req: any, res: any) {
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
}