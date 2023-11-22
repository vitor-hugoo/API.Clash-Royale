import express from "express"
import clanRouter from "./clan_serviceRoute"

const routerService = express.Router()

routerService.use('/clan', clanRouter)

export default routerService