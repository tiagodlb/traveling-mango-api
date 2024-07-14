import { Router } from "express"
import destinyRouter from "./destinyRouter.js"
const router = Router()

router.use(destinyRouter)

export default router
