import { Participant } from "../models/Participant";
import { prismaClient } from "../database/prismaClient";

class ParticipantRepository {
  async createParticipants(participant: Participant): Promise<Participant> {
    const { name, imageUrl, xp, socialNetwork } = participant;

    const newParticipant = await prismaClient.participant.create({
      data: {
        name,
        imageUrl,
        xp,
        socialNetwork,
      },
    });
    return newParticipant;
  }

  async getAllParticipants(): Promise<Participant[]> {
    const manyParticipants = await prismaClient.participant.findMany();
    return manyParticipants;
  }

  async updateParticipant(id: string, data: Participant): Promise<Participant> {
    const { name, imageUrl, xp, socialNetwork } = data;

    const updateParticipant = await prismaClient.participant.update({
      where: {
        id: id,
      },
      data: {
        name,
        imageUrl,
        xp,
        socialNetwork,
      },
    });

    return updateParticipant;
  }

  async deleteParticipant(id: string): Promise<Participant> {
    const deleteUser = await prismaClient.participant.delete({
      where: {
        id: id,
      },
    });
    return deleteUser;
  }
}

export { ParticipantRepository };
