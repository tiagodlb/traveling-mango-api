import DestinyEntity from "@/entities/destinyEntity.js"
import DestinyRepository from "@/repositories/destinyRepository.js"

export default class DestinyService {
  constructor(private repository: DestinyRepository) {
    this.repository = repository
  }
  async createDestiny(destiny: DestinyEntity) {
    const { title, content } = <DestinyEntity>destiny
    if (!destiny.title) {
      throw "Error"
    }

    const newDestiny = new DestinyEntity(title, content)

    await this.repository.createDestiny(newDestiny)
  }
}
