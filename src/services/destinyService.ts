import DestinyEntity from "@/entities/destinyEntity.js"
import DestinyRepository from "@/repositories/destinyRepository.js"

export default class DestinyService {
  constructor(private repository: DestinyRepository) {
    this.repository = repository
  }

  async createDestiny(destiny: DestinyEntity) {
    const { title, content, imgURL } = <DestinyEntity>destiny
    const newDestiny = new DestinyEntity(title, content, imgURL)
    await this.repository.createDestiny(newDestiny)
  }

  async listDestiny() {
    const list = await this.repository.listDestiny()
    if (list.length === 0)
      throw { type: "not_found", message: "Nenhum destino cadastrado" }
    return list
  }

  async updateDestiny(id: string, destiny: DestinyEntity) {
    const { title, content, imgURL } = <DestinyEntity>destiny
    const newId = parseInt(id)
    const exists = await this.repository.findById(newId)
    if (!exists) {
      throw { type: "not_found", message: "Destino não encontrado" }
    }
    const newDestiny = new DestinyEntity(title, content, imgURL)
    await this.repository.updateDestiny(newId, newDestiny)
  }

  async deleteDestiny(id: string) {
    const newId = parseInt(id)
    const exists = await this.repository.findById(newId)
    if (!exists) {
      throw { type: "not_found", message: "Atração não encontrada" }
    }
    await this.repository.deleteDestiny(newId)
  }
}
