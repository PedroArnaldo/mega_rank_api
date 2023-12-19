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

  async getAllParticipants(): Promise<Participant[]> {
    return this.participantRepository.getAllParticipants();
  }

  async updateParticipant(id: string, data: Participant): Promise<Participant> {
    //validar dados antes de realizar atualização do participante
    return this.participantRepository.updateParticipant(id, data);
  }
}

export { ParticipantService };
