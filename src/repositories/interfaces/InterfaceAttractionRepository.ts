import AttractionEntity from "@/entities/attractionEntity.js"

export default interface InterfaceAttractionRepository {
  createAttraction(attraction: AttractionEntity): void | Promise<void>
  listAttraction(): Array<AttractionEntity> | Promise<AttractionEntity[]>
  updateAttraction(
    id: number,
    attraction: AttractionEntity
  ): Promise<{ success: boolean; message?: string }> | void

  deleteAttraction(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void
}
