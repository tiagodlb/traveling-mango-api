import DestinyEntity from "@/entities/destinyEntity.js"
import ErrorHandler from "@/middlewares/handleErrorMiddleware.js"
import DestinyRepository from "@/repositories/destinyRepository.js"
import DestinyService from "@/services/destinyService.js"
import { Request, Response } from "express"

export default class DestinyController {
  constructor(private repository: DestinyRepository) {}

  async createDestiny(req: Request, res: Response) {
    const destiny = <DestinyEntity>req.body
    const newDestinyService = new DestinyService(this.repository)
    try {
      await newDestinyService.createDestiny(destiny)
      return res.sendStatus(201)
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }

  async listDestiny(req: Request, res: Response) {
    const newDestinyService = new DestinyService(this.repository)
    try {
      const listDestiny = await newDestinyService.listDestiny()
      return res.send(listDestiny)
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }

  async updateDestiny(req: Request, res: Response) {
    const id = req.params.id as string
    const destiny = <DestinyEntity>req.body
    const newDestinyService = new DestinyService(this.repository)
    try {
      await newDestinyService.updateDestiny(id, destiny)
      return res.sendStatus(201)
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }

  async deleteDestiny(req: Request, res: Response) {
    const id = req.params.id as string
    const newDestinyService = new DestinyService(this.repository)
    try {
      await newDestinyService.deleteDestiny(id)
      return res.sendStatus(204)
    } catch (error: any) {
      return ErrorHandler.handle(error, req, res)
    }
  }
}
