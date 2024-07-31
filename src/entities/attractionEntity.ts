export default class AttractionEntity {
    id?: number;
    created_at?: Date | null;
    title: string;
    content: string | null;
    destinyId: number | null;
    favoritedBy?: number | null;
  
    constructor(title: string, content: string | null, destinyId: number | null) {
      this.title = title;
      this.content = content;
      this.destinyId = destinyId;
    }
  }
  