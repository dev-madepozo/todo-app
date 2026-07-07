import { Router } from "express";

import { healthController } from "./health.controller.js";

const router = Router();

router.get("/health", healthController.getHealth);

export default router;
