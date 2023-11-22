import { Router } from "express";
import { clanInformation, clanMembers, currentRiverRace, riverRaceLog, searchClans } from "../controller/clanInformation_serviceController";

const clanRouter = Router()

clanRouter.get('/members', clanMembers)
clanRouter.get('/currentriverrace', currentRiverRace)
clanRouter.get('/riverracelog', riverRaceLog)
clanRouter.get('/search/:name?', searchClans)
clanRouter.get('/', clanInformation)

export default clanRouter