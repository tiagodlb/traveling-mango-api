export default class UserEntity {
    id?: number
    name: string
    email: string
    password: string
  
    constructor(email: string, name: string,  password: string) {
      this.email = email
      this.name = name
      this.password = password
    }
  }
  