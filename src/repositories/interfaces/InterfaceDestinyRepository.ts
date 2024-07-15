import DestinyEntity from "@/entities/destinyEntity.js"

export default interface InterfaceDestinyRepository {
  createDestiny(destiny: DestinyEntity): void | Promise<void>
  listDestiny(): Array<DestinyEntity> | Promise<DestinyEntity[]>
  atualizaDestinny(
    id: number,
    pet: DestinyEntity
  ): Promise<{ success: boolean; message?: string }> | void

  deletaDestiny(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void
}
