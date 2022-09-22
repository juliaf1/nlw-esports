"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAd = exports.getDiscord = exports.listAds = void 0;
const client_1 = require("@prisma/client");
const parse_time_1 = require("../utils/parse-time");
const log_request_1 = require("../utils/log-request");
const prisma = new client_1.PrismaClient({
    log: ['query'],
});
function listAds(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, log_request_1.consoleRequest)(req);
        const { id } = req.params;
        const ads = yield prisma.ad.findMany({
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
        const formattedAd = ads.map((ad) => {
            return (Object.assign(Object.assign({}, ad), { hourStart: (0, parse_time_1.convertMinutesToTimeString)(ad.hourStart), hourEnd: (0, parse_time_1.convertMinutesToTimeString)(ad.hourEnd) }));
        });
        return res.json(formattedAd);
    });
}
exports.listAds = listAds;
;
function getDiscord(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, log_request_1.consoleRequest)(req);
        const { id } = req.params;
        const ad = yield prisma.ad.findUniqueOrThrow({
            select: {
                discord: true,
            },
            where: { id },
        });
        return res.json({ discord: ad.discord });
    });
}
exports.getDiscord = getDiscord;
;
function createAd(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, log_request_1.consoleRequest)(req);
        const gameId = req.params.id;
        const body = req.body;
        const ad = yield prisma.ad.create({
            data: Object.assign(Object.assign({}, body), { hourStart: (0, parse_time_1.convertTimeStringToMinutes)(body.hourStart), hourEnd: (0, parse_time_1.convertTimeStringToMinutes)(body.hourEnd), gameId })
        });
        return res.status(201).json(ad);
    });
}
exports.createAd = createAd;
