import { Router } from "express"
import DestinyController from "../controllers/destinyController.js"
import DestinyRepository from "@/repositories/destinyRepository.js"
import validateSchemaMiddleware from "@/middlewares/handleSchemaMiddleware.js"
import { destinySchema } from "@/schemas/destinySchema.js"

const destinyRouter = Router()
const destinyRepository = new DestinyRepository()
const destinyController = new DestinyController(destinyRepository)

destinyRouter.post("/destinies", validateSchemaMiddleware.validate(destinySchema), (req, res) =>
  destinyController.createDestiny(req, res)
)

destinyRouter.get("/destinies", (req, res) =>
  destinyController.listDestiny(req, res)
)

destinyRouter.put("/destinies/:id", validateSchemaMiddleware.validate(destinySchema), (req, res) =>
  destinyController.updateDestiny(req, res)
)

destinyRouter.delete("/destinies/:id", (req, res) =>
  destinyController.deleteDestiny(req, res)
)

destinyRouter.get("/healthy_destiny", (req, res) =>
  res.send("OK")
)


export default destinyRouter
