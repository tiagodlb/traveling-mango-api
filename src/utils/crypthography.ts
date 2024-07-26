import bcrypt from "bcrypt"
import Cryptr from "cryptr"

class Cryptography {
  saltRounds: string
  secretKey: string
  cryptr: any

  constructor(secretKey: string, saltRounds: string) {
    this.secretKey = secretKey
    this.saltRounds = saltRounds
  }

  hashString(text: string | Buffer): string {
    const hashString: string = bcrypt.hashSync(text, Number(this.saltRounds))
    return hashString
  }

  compareHashedString(data: string | Buffer, encrypted: string): boolean {
    const match: boolean = bcrypt.compareSync(data, encrypted)
    return match
  }

  encryptString(string: string): string {
    const cryptr: Cryptr = new Cryptr(this.secretKey)
    const encryptedString: string = cryptr.encrypt(string)
    return encryptedString
  }

  decryptString(encryptedString: string): string {
    const cryptr: Cryptr = new Cryptr(this.secretKey)
    const decryptedString: string = cryptr.decrypt(encryptedString)
    return decryptedString
  }
}

export default Cryptography
