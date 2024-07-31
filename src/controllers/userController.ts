import UserEntity from "@/entities/userEntity.js"
import ErrorHandler from "@/middlewares/handleErrorMiddleware.js"
import UserRepository from "@/repositories/userRepository.js"
import UserService from "@/services/userService.js"
import UserUtil from "@/utils/user.js"
import { Request, Response } from "express"

export default class UserController {
  constructor(private repository: UserRepository) {}

  async createUser(req: Request, res: Response) {
    try {
      const user = <UserEntity>req.body
      const newUserService = new UserService(this.repository)
      await newUserService.createUser(user)
      return res.sendStatus(201) 
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const user = <UserEntity>req.body
      const newUserService = new UserService(this.repository)
      await newUserService.getUser(user)
      const util = new UserUtil(this.repository)
      const token = util.generateToken(user.email as string)
      return res.send({"token":token}).status(201)
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }
}
