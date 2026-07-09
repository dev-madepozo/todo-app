import { NextFunction, Request, Response } from "express";

import { AppError } from "../shared/errors/app-error";
import { logger } from "../config/logger";

export function errorMiddleware(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  logger.error(error);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}
