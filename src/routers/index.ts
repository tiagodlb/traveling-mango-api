import { Router } from "express"
import destinyRouter from "./destinyRouter.js"
import userRouter from "./userRouter.js"
import attractionRouter from "./AttractionRouter.js"
const router = Router()

router.use(destinyRouter)
router.use(userRouter)
router.use(attractionRouter)

export default router
