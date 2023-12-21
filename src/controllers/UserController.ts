import { Request, Response, response } from "express";

import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const userRepository = new UserRepository();
      const userService = new UserService(userRepository);

      const { name, password } = req.body;

      const user = await userService.createUser({ name, password });

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ messageError: error });
    }
  }
}

export { UserController };
