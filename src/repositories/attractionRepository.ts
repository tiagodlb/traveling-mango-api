import { prisma } from "./../config/database.js"
import { PrismaClient, Prisma } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"
import InterfaceAttractionRepository from "./interfaces/InterfaceAttractionRepository.js"
import AttractionEntity from "@/entities/attractionEntity.js"

export default class AttractionRepository
  implements InterfaceAttractionRepository
{
  private prisma = prisma

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma
  }
  async listAttraction(): Promise<AttractionEntity[]> {
    return await this.prisma.attraction.findMany()
  }
  updateAttraction(
    id: number,
    attraction: AttractionEntity
  ): Promise<{ success: boolean; message?: string }> | void {
    throw new Error("Method not implemented.")
  }
  deleteAttraction(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void {
    throw new Error("Method not implemented.")
  }

  async createAttraction({ title, content, destinyId }): Promise<void> {
    await this.prisma.attraction.create({
      data: { title, content, destinyId },
    })
  }

  async findById(id: number): Promise<AttractionEntity> {
    const result = await this.prisma.attraction.findUnique({
      where: { id: id },
    })

    if (result === null) {
      throw new Error(`DestinyEntity with id ${id} not found`)
    }

    return new AttractionEntity(
      result.title as string,
      result.content,
      result.destinyId,
      result.imgURL
    )
  }
}
