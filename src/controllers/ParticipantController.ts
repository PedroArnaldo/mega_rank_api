import { Request, Response } from "express";

import { ParticipantService } from "../services/ParticipantService";

class ParticipantController {
  private participantService: ParticipantService;

  constructor(participantService: ParticipantService) {
    this.participantService = participantService;
  }

  async createParticipant(req: Request, res: Response): Promise<void> {
    const { name, imageUrl, xp, socialNetwork } = req.body;
    const newParticipant = await this.participantService.createParticipant({
      name,
      imageUrl,
      xp,
      socialNetwork,
    });
    res.status(201).json(newParticipant);
  }
}

export { ParticipantController };
