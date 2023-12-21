import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(data: User): Promise<User> {
    if (!data.name || !data.password)
      throw "Some fields invalidated in the data";

    const userAlreadyExists = await this.userRepository.UserExists(data.name);

    if (userAlreadyExists) throw "User already exists!";

    const passwordHash = await hash(data.password, 8);

    data.password = passwordHash;

    const user = await this.userRepository.createUser(data);

    return user;
  }

  async authenticateUser(data: User): Promise<string> {
    const userAlreadyExists = await this.userRepository.UserExists(data.name);

    if (userAlreadyExists) throw "User or password incorrect";

    const passwordMatch = compare(data.password, userAlreadyExists.password);

    if (!passwordMatch) throw "User or password incorrect";

    const token = sign({}, process.env.SECRET_KEY, {
      subject: userAlreadyExists.id,
      expiresIn: "20m",
    });

    return token;
  }
}

export { UserService };
