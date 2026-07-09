import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

type Property =
  | "body"
  | "query"
  | "params"

export function validate(schema: ZodObject, property: Property = "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[property]);

    if (!result.success) {
      return next(result.error);
    }

    res.locals[property] = result.data;
    next();
  };
}
