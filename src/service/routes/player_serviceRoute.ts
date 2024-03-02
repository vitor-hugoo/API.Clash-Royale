import { Router } from "express";
import { battleLog, playerInformation, upcomingChests } from "../controller/playerInformation_serviceController";

const playerRouter = Router()

playerRouter.get('/', playerInformation)
playerRouter.get('/upcomingchests', upcomingChests)
playerRouter.get('/battlelog', battleLog)

export default playerRouter