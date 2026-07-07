import { Request, Response } from "express";

import { healthService } from "./health.service.js";
import { ApiResponse } from "../../shared/http/api-response.js";

class HealthController {
  getHealth(_: Request, res: Response) {
    const data = healthService.getHealth();
    return ApiResponse.success(res, data, "Health check successfull")
  }
}

export const healthController = new HealthController();
