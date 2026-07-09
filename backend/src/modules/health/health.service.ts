import { env } from "../../config";

import packageJson from "../../../package.json" with { type: "json" };

export class HealthService {
  getHealth() {
    return {
      status: "ok",
      version: packageJson.version,
      environment: env.NODE_ENV,
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
    };
  }
}

export const healthService = new HealthService();
