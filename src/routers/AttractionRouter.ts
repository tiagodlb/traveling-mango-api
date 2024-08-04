import { Router } from "express"
import { prisma } from "@/config/database.js"
import AttractionRepository from "@/repositories/attractionRepository.js"
import AttractionController from "@/controllers/attractionController.js"
import validateSchemaMiddleware from "@/middlewares/handleSchemaMiddleware.js"
import { attractionSchema } from "@/schemas/attractionSchema.js"

const attractionRouter = Router()
const attractionRepository = new AttractionRepository(prisma)
const attractionController = new AttractionController(attractionRepository)

attractionRouter.post("/attractions",   validateSchemaMiddleware.validate(attractionSchema), (req, res) =>
    attractionController.createAttraction(req, res)
)

attractionRouter.get("/attractions", (req, res) =>
    attractionController.listAttraction(req, res)
)

attractionRouter.put("/attractions/:id",    validateSchemaMiddleware.validate(attractionSchema), (req, res) =>
    attractionController.updateAttraction(req, res)
)

attractionRouter.delete("/attractions/:id", (req, res) =>
    attractionController.deleteAttraction(req, res)
)

attractionRouter.get("/healthy_attraction", (req, res) =>
    res.send("OK")
)



export default attractionRouter;
