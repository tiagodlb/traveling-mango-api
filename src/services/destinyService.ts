import DestinyEntity from "@/entities/destinyEntity.js"
import DestinyRepository from "@/repositories/destinyRepository.js"

export default class DestinyService {
  constructor(private repository: DestinyRepository) {
    this.repository = repository
  }

  async createDestiny(destiny: DestinyEntity) {
    const { title, content } = <DestinyEntity>destiny
    const newDestiny = new DestinyEntity(title, content)
    const destinyExists = await this.repository.listDestiny()
    if (destinyExists.length != 0)
      throw { type: "Conflict", message: "Esse destino já existe" }
    await this.repository.createDestiny(newDestiny)
  }

  async listDestiny() {
    const list = await this.repository.listDestiny()
    if (list.length === 0)
      throw { type: "not_found", message: "Nenhum destino cadastrado" }
    return list
  }
}
