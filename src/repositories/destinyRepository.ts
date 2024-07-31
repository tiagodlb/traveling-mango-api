import { PrismaClient } from "@prisma/client";
import DestinyEntity from "@/entities/destinyEntity.js";
import AttractionEntity from "@/entities/attractionEntity.js";
import InterfaceDestinyRepository from "./interfaces/InterfaceDestinyRepository.js";

export default class DestinyRepository implements InterfaceDestinyRepository {
  private prisma = new PrismaClient();

  async createDestiny({ title, content }: { title: string, content: string | null }): Promise<void> {
    await this.prisma.destiny.create({
      data: { title, content, favoritedBy: 0 },
    });
  }

  async listDestiny(): Promise<DestinyEntity[]> {
    const destinies = await this.prisma.destiny.findMany({
      include: {
        Attraction: true,
      },
    });

    // Map raw data to DestinyEntity and AttractionEntity instances
    return destinies.map(destiny => {
      const attractions = destiny.Attraction.map(attraction => new AttractionEntity(
        attraction.title,
        attraction.content,
        attraction.destinyId
      ));

      return new DestinyEntity(destiny.title as string, destiny.content).withId(destiny.id).withCreatedAt(destiny.created_at).withFavoritedBy(destiny.favoritedBy).withAttraction(attractions);
    });
  }

  atualizaDestinny(
    id: number,
    pet: DestinyEntity
  ): Promise<{ success: boolean; message?: string }> | void {
    throw new Error("Method not implemented.");
  }

  deletaDestiny(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void {
    throw new Error("Method not implemented.");
  }
}
