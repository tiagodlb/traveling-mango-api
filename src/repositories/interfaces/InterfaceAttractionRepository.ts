import AttractionEntity from "@/entities/attractionEntity.js";

export default interface InterfaceAttractionRepository {
  createAttraction(destiny: AttractionEntity): void | Promise<void>
  listAttraction():  Array<AttractionEntity> | Promise<AttractionEntity[]>
  updateAttraction(
    id: number,
    title: string,
    content: string
  ): Promise<{ success: boolean; message?: string }> | void

  deleteAttraction(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void
}
