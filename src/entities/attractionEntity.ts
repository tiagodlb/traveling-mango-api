export default class AttractionEntity {
  id?: number
  created_at?: Date | null
  title: string
  content: string | null
  imgURL: string | null
  lat?: number | null
  long?: number | null
  destinyId: number | null
  favoritedBy?: number | null

  constructor(
    title: string,
    content: string | null,
    destinyId: number | null,
    imgURL: string | null
  ) {
    this.title = title
    this.content = content
    this.destinyId = destinyId
    this.imgURL = imgURL
  }
}
