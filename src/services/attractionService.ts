import AttractionEntity from "@/entities/attractionEntity.js"
import AttractionRepository from "@/repositories/attractionRepository.js"

export default class AttractionService {
  constructor(private repository: AttractionRepository) {
    this.repository = repository
  }

  async createAttraction(attraction: AttractionEntity) {
    const { title, content, destinyId, imgURL } = <AttractionEntity>attraction
    if (!attraction.destinyId) {
      throw { type: "not_found", message: "Destino não encontrado" }
    }

    const newDestiny = new AttractionEntity(title, content, destinyId, imgURL)

    await this.repository.createAttraction(newDestiny)
  }

  async listAttraction() {
    const list = await this.repository.listAttraction()
    if (list.length === 0)
      throw { type: "not_found", message: "Nenhuma atração cadastrada" }
    return list
  }

  async updateAttraction(id: string, attraction: AttractionEntity) {
    const { title, content, destinyId, imgURL } = <AttractionEntity>attraction
    if (!attraction.destinyId) {
      throw { type: "not_found", message: "Destino da atração não encontrado" }
    }
    const newId = parseInt(id)
    const exists = await this.repository.findById(newId)
    if (!exists) {
      throw { type: "not_found", message: "Atração não encontrada" }
    }
    const newDestiny = new AttractionEntity(title, content, destinyId, imgURL)

    await this.repository.createAttraction(newDestiny)
  }

  async deleteAttraction(id: string) {
    const newId = parseInt(id)
    const exists = await this.repository.findById(newId)
    if (!exists) {
      throw { type: "not_found", message: "Atração não encontrada" }
    }
    await this.repository.deleteAttraction(newId)
  }
}
