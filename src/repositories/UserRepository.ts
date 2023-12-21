import { User } from "../models/User";
import { prismaClient } from "../database/prismaClient";

class UserRepository {
  async createUser({ name, password }: User): Promise<User> {
    try {
      const user = await prismaClient.user.create({
        data: {
          name,
          password,
        },
      });
      return user;
    } catch (error) {
      throw "User has not been created, please check the fields";
    }
  }

  async UserExists(name: string): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        name,
      },
    });

    return user;
  }
}

export { UserRepository };
