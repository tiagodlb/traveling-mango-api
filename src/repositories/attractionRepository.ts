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
    title: string,
    content: string
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
}
