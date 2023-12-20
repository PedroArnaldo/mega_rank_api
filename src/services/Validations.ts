import { Request, Response } from "express";

const isValidParticipant = (req: Request, res: Response): void => {
  const { name, imageUrl, xp, socialNetwork } = req.body;

  if (!name || !imageUrl || !xp || !socialNetwork)
    throw "Missing mandatory fields.";

  if (
    typeof name !== "string" ||
    typeof imageUrl !== "string" ||
    typeof xp !== "number" ||
    typeof socialNetwork !== "string"
  )
    throw "some field has an invalid type";

  if (name.length > 50 || name.length < 5)
    throw "Name must be between 5 and 50 characters";

  if (imageUrl.length > 220 || imageUrl.length < 8) throw "Invalid imageUrl!";

  if (socialNetwork.length > 220 || socialNetwork.length < 8)
    throw "Invalid socialNetwork url";
};

const isValidUUID = (uuid: string): void => {
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const isValidUUUid = uuidPattern.test(uuid);
  if (!isValidUUUid) throw "Error id is invalid";
};

export { isValidParticipant, isValidUUID };
