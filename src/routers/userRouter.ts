import { Router } from "express"
import { prisma } from "@/config/database.js"
import UserRepository from "@/repositories/userRepository.js"
import UserController from "@/controllers/userController.js"
import validateSchemaMiddleware from "@/middlewares/handleSchemaMiddleware.js"
import { signInSchema, signUpSchema } from "@/schemas/UserSchema.js"

const userRouter = Router()
const userRepository = new UserRepository(prisma)
const userController = new UserController(userRepository)

userRouter.post("/login",validateSchemaMiddleware.validate(signInSchema), (req, res) =>
    userController.getUser(req, res)
)

userRouter.post("/register",validateSchemaMiddleware.validate(signUpSchema), (req, res) =>
    userController.createUser(req, res)
)


export default userRouter
