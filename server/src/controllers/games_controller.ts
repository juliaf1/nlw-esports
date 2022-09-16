import { PrismaClient  } from '@prisma/client';

import { consoleRequest } from '../utils/log-request';

const prisma = new PrismaClient({
    log: ['query'],
});

export async function listGames(req: any, res: any) {
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
};