import { Router } from "express"
import destinyRouter from "./destinyRouter.js"
import userRouter from "./userRouter.js"
const router = Router()

router.use(destinyRouter)
router.use(userRouter)

export default router
