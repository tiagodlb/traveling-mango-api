import { NextFunction, Request, Response } from "express";

export default class validateSchemaMiddleware {
  static validate(schema: any) {
    return (req: Request, res: Response, next: NextFunction) => {
      const validation = schema.validate(req.body);
      if (validation.error) {
        return res
          .status(422)
          .send(
            validation.error.details.map(
              (obj: { message: string }) => obj.message
            )
          );
      }
      next();
    };
  }
}