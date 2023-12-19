import { Request, Response } from "express";

import { ParticipantService } from "../services/ParticipantService";

class ParticipantController {
  private participantService: ParticipantService;

  constructor(participantService: ParticipantService) {
    this.participantService = participantService;
  }

  async createParticipant(req: Request, res: Response): Promise<void> {
    try {
      const { name, imageUrl, xp, socialNetwork } = req.body;
      const newParticipant = await this.participantService.createParticipant({
        name,
        imageUrl,
        xp,
        socialNetwork,
      });
      res.status(201).json(newParticipant);
    } catch (error) {
      res.status(400).json({ messageError: error });
    }
  }

  async getAllParticipants(req: Request, res: Response): Promise<void> {
    try {
      const participants = await this.participantService.getAllParticipants();
      res.status(200).json(participants);
    } catch (error) {
      res.status(400).json({ messageError: error });
    }
  }

  async updateParticipan(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, imageUrl, xp, socialNetwork } = req.body;
      const updateParticipan = await this.participantService.updateParticipant(
        id,
        {
          name,
          imageUrl,
          xp,
          socialNetwork,
        }
      );
      res.status(200).json(updateParticipan);
    } catch (error) {
      res.status(400).json({ messageError: error });
    }
  }
}

export { ParticipantController };
