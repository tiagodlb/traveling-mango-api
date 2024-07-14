import DestinyEntity from "@/entities/destinyEntity.js"

export default interface InterfaceDestinyRepository {
  criaDestiny(destiny: DestinyEntity): void | Promise<void>
  listaDestiny(): Array<DestinyEntity> | Promise<DestinyEntity[]>
  atualizaDestinny(
    id: number,
    pet: DestinyEntity
  ): Promise<{ success: boolean; message?: string }> | void

  deletaDestiny(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void
}
