import AttractionEntity from "./attractionEntity.js"

export default class DestinyEntity {
  id?: number
  created_at?: Date | null
  title: string
  content: string | null
  imgURL: string | null
  lat?: number | null
  long?: number | null
  favoritedBy?: number | null
  Attraction?: AttractionEntity[]

  constructor(title: string, content: string | null, imgURL: string | null) {
    this.title = title
    this.content = content
    this.imgURL = imgURL
  }

  withId(id: number): this {
    this.id = id
    return this
  }

  withCreatedAt(created_at: Date | null): this {
    this.created_at = created_at
    return this
  }

  withFavoritedBy(favoritedBy: number | null): this {
    this.favoritedBy = favoritedBy
    return this
  }

  withImgURL(imgURL: string | null): this {
    this.imgURL = imgURL
    return this
  }

  withLat(lat: number | null): this {
    this.lat = lat
    return this
  }

  withLong(long: number | null): this {
    this.long = long
    return this
  }

  withAttraction(attractions: AttractionEntity[]): this {
    this.Attraction = attractions
    return this
  }
}
