import UserEntity from "@/entities/userEntity.js"

export default interface InterfaceUserRepository {
  createUser(user: UserEntity): void | Promise<void>
  getUserByEmail(user: UserEntity): void | Promise<UserEntity | null>
  getUser(user: UserEntity): void | Promise<UserEntity | null>
}
