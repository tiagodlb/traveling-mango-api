import AttractionEntity from "@/entities/attractionEntity.js"
import ErrorHandler from "@/middlewares/handleErrorMiddleware.js"
import AttractionRepository from "@/repositories/attractionRepository.js"
import AttractionService from "@/services/attractionService.js"
import { Request, Response } from "express"

export default class AttractionController {
  constructor(private repository: AttractionRepository) {}

  async createAttraction(req: Request, res: Response) {
    const attraction = <AttractionEntity>req.body
    const newAttractionService = new AttractionService(this.repository)
    try {
      await newAttractionService.createAttraction(attraction)
      return res.sendStatus(201)
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }

  async listAttraction(req: Request, res: Response) {
    const newattractionService = new AttractionService(this.repository)
    try {
      const listAttractions = await newattractionService.listAttraction()
      return res.send(listAttractions)
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }

  async updateAttraction(req: Request, res: Response) {
    const id = req.params.id as string
    const attraction = <AttractionEntity>req.body
    const newAttractionService = new AttractionService(this.repository)
    try {
      await newAttractionService.updateAttraction(id, attraction)
      return res.sendStatus(201)
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }

  async deleteAttraction(req: Request, res: Response) {
    const id = req.params.id as string
    const newAttractionService = new AttractionService(this.repository)
    try {
      await newAttractionService.deleteAttraction(id)
      return res.sendStatus(204)
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }
}
