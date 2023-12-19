import { ParticipantRepository } from "../repositories/ParticipantRepository";
import { ParticipantService } from "../services/ParticipantService";
import { ParticipantController } from "./ParticipantController";

const participantRepository = new ParticipantRepository();
const participantService = new ParticipantService(participantRepository);
const participantController = new ParticipantController(participantService);

export { participantController };
