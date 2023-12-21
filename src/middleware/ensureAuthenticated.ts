import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    return response.status(401).json({
      messgae: "Token invalid",
    });
  }
};
