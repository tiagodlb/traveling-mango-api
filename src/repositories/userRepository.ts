import { prisma } from "./../config/database.js"
import { PrismaClient, Prisma } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"
import InterfaceUserRepository from "./interfaces/InterfaceUserRepository.js"
import UserEntity from "@/entities/userEntity.js"

export default class UserRepository implements InterfaceUserRepository {
  private prisma = prisma

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma
  }
  async createUser({
    email,
    name,
    password,
  }: {
    email: string
    name: string
    password: string
  }): Promise<void> {
    await this.prisma.user.create({
      data: { email, name, password },
    })
  }

  async getUserByEmail({
    email,
  }: {
    email: string
  }): Promise<UserEntity | null> {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    })
  }

  async getUser({
    email,
    password,
  }: {
    email: string
    password: string
  }): Promise<UserEntity | null> {
    return await this.prisma.user.findFirst({
      where: {OR: [{email},{password}]}
    });
  }
}
