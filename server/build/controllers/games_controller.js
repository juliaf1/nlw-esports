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
exports.listGames = void 0;
const client_1 = require("@prisma/client");
const log_request_1 = require("../utils/log-request");
const prisma = new client_1.PrismaClient({
    log: ['query'],
});
function listGames(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, log_request_1.consoleRequest)(req);
        const games = yield prisma.game.findMany({
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
}
exports.listGames = listGames;
;
