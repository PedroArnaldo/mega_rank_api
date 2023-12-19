import { Participant } from "../models/Participant";

class ParticipantRepository {
  async createParticipants(data: Participant): Promise<Participant> {
    console.log("Estou no repository");
    console.log(data);
    data.id = "1";
    data.created_at = new Date();
    return data;
  }
}

export { ParticipantRepository };
