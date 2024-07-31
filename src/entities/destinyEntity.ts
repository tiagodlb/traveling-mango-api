import AttractionEntity from "./attractionEntity.js";

export default class DestinyEntity {
  id?: number;
  created_at?: Date | null;
  title: string;
  content: string | null;
  favoritedBy?: number | null;
  Attraction?: AttractionEntity[];

  constructor(title: string, content: string | null) {
    this.title = title;
    this.content = content;
  }

  withId(id: number): this {
    this.id = id;
    return this;
  }

  withCreatedAt(created_at: Date | null): this {
    this.created_at = created_at;
    return this;
  }

  withFavoritedBy(favoritedBy: number | null): this {
    this.favoritedBy = favoritedBy;
    return this;
  }

  withAttraction(attractions: AttractionEntity[]): this {
    this.Attraction = attractions;
    return this;
  }
}
