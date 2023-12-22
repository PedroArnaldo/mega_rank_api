import { UserService } from "../services/UserService";
import { UserRepositoryInMemory } from "../repositories/in-memory/UserRepositoryInMemory";
import { User } from "../models/User";

let userRepositoryInMemory: UserRepositoryInMemory;
let userService: UserService;

describe("Create User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userService = new UserService(userRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user = await userService.createUser({
      name: "Test Name",
      password: "test-password",
    });

    expect(user).toHaveProperty("id");
  });
});
