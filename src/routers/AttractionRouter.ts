import { Router } from "express"
import { prisma } from "@/config/database.js"
import AttractionRepository from "@/repositories/attractionRepository.js"
import AttractionController from "@/controllers/attractionController.js"

const attractionRouter = Router()
const attractionRepository = new AttractionRepository(prisma)
const attractionController = new AttractionController(attractionRepository)

attractionRouter.post("/attractions", (req, res) =>
    attractionController.createAttraction(req, res)
)

attractionRouter.get("/attractions", (req, res) =>
    attractionController.listAttraction(req, res)
)

attractionRouter.get("/healthy_attraction", (req, res) =>
    res.send("OK")
)



export default attractionRouter;
