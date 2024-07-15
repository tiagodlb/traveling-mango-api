import DestinyEntity from "@/entities/destinyEntity.js"
import InterfaceDestinyRepository from "./interfaces/InterfaceDestinyRepository.js"
import { prisma } from "./../config/database.js"
import { PrismaClient, Prisma } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"

export default class DestinyRepository implements InterfaceDestinyRepository {
  private prisma = prisma

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma
  }

  async createDestiny({ title, content }): Promise<void> {
    await this.prisma.destiny.create({
      data: { title, content, favoritedBy: 0 },
    })
  }

  async listDestiny(): Promise<DestinyEntity[]> {
    return await this.prisma.destiny.findMany()
  }

  atualizaDestinny(
    id: number,
    pet: DestinyEntity
  ): Promise<{ success: boolean; message?: string }> | void {
    throw new Error("Method not implemented.")
  }
  deletaDestiny(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void {
    throw new Error("Method not implemented.")
  }
}
