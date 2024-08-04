import DestinyEntity from "@/entities/destinyEntity.js"

export default interface InterfaceDestinyRepository {
  createDestiny(destiny: DestinyEntity): void | Promise<void>
  listDestiny(): Array<DestinyEntity> | Promise<DestinyEntity[]>
  updateDestiny(id: number, destiny: DestinyEntity): void | Promise<void>
  deleteDestiny(id: number): void | Promise<void>
  findById(id: number): Promise<DestinyEntity>
}
