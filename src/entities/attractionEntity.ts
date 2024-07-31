export default class AttractionEntity {
    id?: number
    created_at?: Date | null
    title: string
    content: string | null
    destinyId: Number | null
    favoritedBy?: Number | null
  
    constructor(title: string, content: string | null, destinyId: Number | null) {
      this.title = title
      this.content = content
      this.destinyId = destinyId
    }
  }
  