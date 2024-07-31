import { Request, Response } from "express";

class ErrorHandler {
  handle(error: { type: string; message: string }, req: Request, res: Response) {
    switch (error.type) {
      case 'Bad_Request':
        return res.status(400).send(error.message);
      case 'Unauthorized':
        return res.status(401).send(error.message);
      case 'Not_Found':
        return res.status(404).send(error.message);
      case 'Conflict':
        return res.status(409).send(error.message);
      default:
        return res.sendStatus(500);
    }
  }
}

export default new ErrorHandler();