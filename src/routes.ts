import { Router } from "express";
import { participantController } from "./controllers";

const router = Router();

router.post("/participant", (request, response) => {
  return participantController.createParticipant(request, response);
});

export { router };
