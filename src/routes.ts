import { Router } from "express";
import { participantController } from "./controllers";

import { UserRepository } from "./repositories/UserRepository";
import { UserService } from "./services/UserService";
import { UserController } from "./controllers/UserController";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = Router();

router.post("/participant", (request, response) => {
  return participantController.createParticipant(request, response);
});

router.get("/participant", (request, response) => {
  return participantController.getAllParticipants(request, response);
});

router.put("/participant/:id", (request, response) => {
  return participantController.updateParticipan(request, response);
});

router.delete("/participant/:id", (request, response) => {
  return participantController.deleteParticipant(request, response);
});

router.post("/users", userController.createUser);

export { router };
