import { ParticipantRepository } from "../repositories/ParticipantRepository";
import { Participant } from "../models/Participant";

class ParticipantService {
  private participantRepository: ParticipantRepository;

  constructor(participantRepository: ParticipantRepository) {
    this.participantRepository = participantRepository;
  }

  async createParticipant(data: Participant): Promise<Participant> {
    //realizar validações
    const newParticipant = await this.participantRepository.createParticipants(
      data
    );
    return newParticipant;
  }
}

export { ParticipantService };
