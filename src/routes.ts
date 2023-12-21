import { Router } from "express";

import { participantController, userController } from "./controllers";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/participant", ensureAuthenticated, (request, response) => {
  return participantController.createParticipant(request, response);
});

router.get("/participant", ensureAuthenticated, (request, response) => {
  return participantController.getAllParticipants(request, response);
});

router.put("/participant/:id", ensureAuthenticated, (request, response) => {
  return participantController.updateParticipan(request, response);
});

router.delete("/participant/:id", ensureAuthenticated, (request, response) => {
  return participantController.deleteParticipant(request, response);
});

router.post("/users", userController.createUser);

router.post("/login", userController.authenticateUser);

export { router };
