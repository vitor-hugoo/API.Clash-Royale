import { Router } from "express";
import { playerInformation } from "../controller/playerInformation_serviceController";

const playerRouter = Router()

playerRouter.get ('/', playerInformation)

export default playerRouter