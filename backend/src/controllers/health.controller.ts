import { Request, Response } from "express";

import { healthService } from "../services/health.service.js";

class HealthController {
  getHealth(_: Request, res: Response) {
    const data = healthService.getHealth();
    res.status(200).json(data);
  }
}

export const healthController = new HealthController();
