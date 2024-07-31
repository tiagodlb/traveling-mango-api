
import AttractionEntity from "@/entities/attractionEntity.js"
import AttractionRepository from "@/repositories/attractionRepository.js"
import AttractionService from "@/services/attractionService.js"
import { Request, Response } from "express"

export default class AttractionController {
  constructor(private repository: AttractionRepository) {}

  async createAttraction(req: Request, res: Response) {
    const attraction = <AttractionEntity>req.body
    const newattractionService = new AttractionService(this.repository)
    await newattractionService.createAttraction(attraction)
    return res.sendStatus(201)
  }

  async listAttraction(req: Request, res: Response) {
    const newattractionService = new AttractionService(this.repository)
    const listAttractions = await newattractionService.listAttraction()
    return res.send(listAttractions)
  }
}
