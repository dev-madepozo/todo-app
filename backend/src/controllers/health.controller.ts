import { Request, Response } from "express";

import { healthService } from "../services/health.service.js";
import { ApiResponse } from "../utils/api-response.js";

class HealthController {
  getHealth(_: Request, res: Response) {
    const data = healthService.getHealth();
    return ApiResponse.success(res, data, "Health check successfull")
  }
}

export const healthController = new HealthController();
