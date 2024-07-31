import AttractionEntity from "@/entities/attractionEntity.js"
import AttractionRepository from "@/repositories/attractionRepository.js"

export default class AttractionService {
  constructor(private repository: AttractionRepository) {
    this.repository = repository
  }

  async createAttraction(attraction: AttractionEntity) {
    const { title, content, destinyId } = <AttractionEntity>attraction
    if (!attraction.title) {
      throw "Error"
    }

    const newDestiny = new AttractionEntity(title, content, destinyId)

    await this.repository.createAttraction(newDestiny)
  }

  async listAttraction() {
    return await this.repository.listAttraction()
  }
}
