import { Router } from "express"
import { prisma } from "@/config/database.js"
import UserRepository from "@/repositories/userRepository.js"
import UserController from "@/controllers/userController.js"

const userRouter = Router()
const userRepository = new UserRepository(prisma)
const userController = new UserController(userRepository)

userRouter.post("/login", (req, res) =>
    userController.getUser(req, res)
)

userRouter.post("/register", (req, res) =>
    userController.createUser(req, res)
)


export default userRouter
