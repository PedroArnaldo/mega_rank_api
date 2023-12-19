import { Router } from "express";
import { participantController } from "./controllers";

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

export { router };
