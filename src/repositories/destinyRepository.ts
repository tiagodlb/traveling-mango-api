import { PrismaClient } from "@prisma/client"
import DestinyEntity from "@/entities/destinyEntity.js"
import AttractionEntity from "@/entities/attractionEntity.js"
import InterfaceDestinyRepository from "./interfaces/InterfaceDestinyRepository.js"

export default class DestinyRepository implements InterfaceDestinyRepository {
  private prisma = new PrismaClient()

  async createDestiny({
    title,
    content,
    imgURL,
  }: {
    title: string
    content: string | null
    imgURL: string | null
  }): Promise<void> {
    try {
      await this.prisma.destiny.create({
        data: {
          title,
          content: content ?? null,
          imgURL: imgURL ?? null,
          favoritedBy: 0,
        },
      })
    } catch (error) {
      console.error("Failed to create destiny:", error)
      throw new Error("Unable to create destiny")
    }
  }

  async listDestiny(): Promise<DestinyEntity[]> {
    const destinies = await this.prisma.destiny.findMany({
      include: {
        Attraction: true,
      },
    })

    // Map raw data to DestinyEntity and AttractionEntity instances
    return destinies.map((destiny) => {
      const attractions = destiny.Attraction.map(
        (attraction) =>
          new AttractionEntity(
            attraction.title,
            attraction.content,
            attraction.destinyId,
            attraction.imgURL
          )
      )

      return new DestinyEntity(
        destiny.title as string,
        destiny.content,
        destiny.imgURL
      )
        .withId(destiny.id)
        .withCreatedAt(destiny.created_at)
        .withFavoritedBy(destiny.favoritedBy)
        .withImgURL(destiny.imgURL)
        .withLat(destiny.lat)
        .withLong(destiny.long)
        .withAttraction(attractions)
    })
  }

  async updateDestiny(
    id: number,
    {
      title,
      content,
      imgURL,
    }: {
      title: string
      content: string | null
      imgURL: string | null
    }
  ): Promise<void> {
    try {
      await this.prisma.destiny.update({
        where: {
          id: id,
        },
        data: {
          title,
          content: content ?? null,
          imgURL: imgURL ?? null,
          favoritedBy: 0,
        },
      })
    } catch (error) {
      console.error("Failed to create destiny:", error)
      throw new Error("Unable to create destiny")
    }
  }

  async deleteDestiny(id: number): Promise<void> {
    await this.prisma.destiny.delete({
      where: {
        id: id,
      },
    })
  }

  async findById(id: number): Promise<DestinyEntity> {
    const result = await this.prisma.destiny.findUnique({
      where: { id: id },
    })

    if (result === null) {
      throw new Error(`DestinyEntity with id ${id} not found`)
    }

    return new DestinyEntity(
      result.title as string,
      result.content,
      result.imgURL
    )
      .withId(result.id)
      .withCreatedAt(result.created_at)
      .withFavoritedBy(result.favoritedBy)
  }
}
