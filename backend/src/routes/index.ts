import { Router } from "express";

import { healthRoutes } from "../modules/health";

const router = Router();

router.use(healthRoutes);

export default router;
