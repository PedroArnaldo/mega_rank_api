import { Participant } from "../../models/Participant";
import { ParticipantRepository } from "../ParticipantRepository";

class ParticipantRepositoryInMemory implements ParticipantRepository {
  async createParticipants(participant: Participant): Promise<Participant> {
    throw new Error("Method not implemented.");
  }
  async getAllParticipants(): Promise<Participant[]> {
    throw new Error("Method not implemented.");
  }
  async updateParticipant(id: string, data: Participant): Promise<Participant> {
    throw new Error("Method not implemented.");
  }
  async deleteParticipant(id: string): Promise<Participant> {
    throw new Error("Method not implemented.");
  }
}

export { ParticipantRepositoryInMemory };
