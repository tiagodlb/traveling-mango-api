export default class DestinyEntity {
  id?: number
  created_at?: Date | null
  title: string
  content: string | null
  favoritedBy?: Number | null

  constructor(title: string, content: string | null) {
    this.title = title
    this.content = content
  }
}
