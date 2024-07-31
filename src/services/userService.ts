import UserEntity from "@/entities/userEntity.js"
import UserRepository from "@/repositories/userRepository.js"
import Cryptography from "@/utils/crypthography.js"

export default class UserService {
  constructor(private repository: UserRepository) {
    this.repository = repository
  }

  async createUser(user: UserEntity) {
    const { email, name, password } = <UserEntity>user
    const info = await this.repository.getUserByEmail({ email: email })
    const emailExists = info?.email
    if (emailExists) throw {type: "Conflict", message:"Email já cadastrado"}
    const cryptography = new Cryptography("secret_key123", "10")
    const hashedPassword = cryptography.encryptString(password)

    const newUser = new UserEntity(email, name, hashedPassword)

    await this.repository.createUser(newUser)
  }

  async getUser(user: UserEntity) {
    const { email, password } = <UserEntity>user
    const cryptography = new Cryptography("secret_key123", "10")
    const hashedPassword = cryptography.encryptString(password)
    const checkUser = { email: email, password: hashedPassword }
    const userExists = await this.repository.getUser(checkUser)
    if(userExists === null) throw {type: "Unauthorized", message: "Email ou Senha não existem"}
    return userExists
  }
}
