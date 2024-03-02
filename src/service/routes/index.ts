import express from "express"
import clanRouter from "./clan_serviceRoute"
import playerRouter from "./player_serviceRoute"

const routerService = express.Router()

routerService.use('/clan', clanRouter)
routerService.use('/player', playerRouter)

export default routerService