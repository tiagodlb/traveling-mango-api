import UserRepository from '@/repositories/userRepository.js';
import jwt from 'jsonwebtoken';

class UserUtil{
    jwtkey: string = "JWTKEY" as string;

    constructor(private repository: UserRepository) {
        this.repository = repository
      }

    async userAlreadyExists({email}) {
        const user = this.repository.getUserByEmail(email);
        return user
    }

    generateToken(email: string): Promise<String> {
        const token =  jwt.sign({ email: email }, this.jwtkey, {
          expiresIn: "1h",
        });
        return token;
      }
}

export default UserUtil