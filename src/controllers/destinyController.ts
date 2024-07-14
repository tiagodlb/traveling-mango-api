import DestinyEntity from "@/entities/destinyEntity.js"
import DestinyRepository from "@/repositories/destinyRepository.js"
import DestinyService from "@/services/destinyService.js"
import { Request, Response } from "express"

export default class DestinyController {
  constructor(private repository: DestinyRepository) {}
  async createDestiny(req: Request, res: Response) {
    const destiny = <DestinyEntity>req.body
    const newDestinyService = new DestinyService(this.repository)
    newDestinyService.createDestiny(destiny)
    console.log("Teste")
    return res.sendStatus(201)
  }
}
