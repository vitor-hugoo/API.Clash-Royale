import { Router } from "express";
import { playerInformation, upComingChests } from "../controller/playerInformation_serviceController";

const playerRouter = Router()

playerRouter.get('/', playerInformation)
playerRouter.get('/upcomingchests', upComingChests)

export default playerRouter