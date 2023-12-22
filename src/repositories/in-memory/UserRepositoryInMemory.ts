import { User } from "../../models/User";
import { UserRepository } from "../UserRepository";

class UserRepositoryInMemory implements UserRepository {
  users: User[] = [];

  async createUser({ name, password }: User): Promise<User> {
    const user = new User();

    console.log(this.users);

    Object.assign(user, {
      id: 1,
      name,
      password,
    });

    this.users.push(user);
    return user;
  }

  async UserExists(name: string): Promise<User> {
    const user = this.users.find((user) => {
      user.name === name;
    });
    return user;
  }
}

export { UserRepositoryInMemory };
