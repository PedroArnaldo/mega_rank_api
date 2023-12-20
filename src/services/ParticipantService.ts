import { ParticipantRepository } from "../repositories/ParticipantRepository";
import { Participant } from "../models/Participant";

class ParticipantService {
  private participantRepository: ParticipantRepository;

  constructor(participantRepository: ParticipantRepository) {
    this.participantRepository = participantRepository;
  }

  async createParticipant(data: Participant): Promise<Participant> {
    const newParticipant = await this.participantRepository.createParticipants(
      data
    );
    return newParticipant;
  }

  async getAllParticipants(): Promise<Participant[]> {
    return this.participantRepository.getAllParticipants();
  }

  async updateParticipant(id: string, data: Participant): Promise<Participant> {
    return this.participantRepository.updateParticipant(id, data);
  }

  async deleteParticipant(id: string): Promise<Participant> {
    return this.participantRepository.deleteParticipant(id);
  }
}

export { ParticipantService };
