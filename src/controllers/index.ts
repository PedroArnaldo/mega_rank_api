import { ParticipantRepository } from "../repositories/ParticipantRepository";
import { ParticipantService } from "../services/ParticipantService";
import { ParticipantController } from "./ParticipantController";

import { UserController } from "./UserController";

const participantRepository = new ParticipantRepository();
const participantService = new ParticipantService(participantRepository);
const participantController = new ParticipantController(participantService);

const userController = new UserController();

export { participantController, userController };
