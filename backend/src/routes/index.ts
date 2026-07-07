import { Router } from "express";

import { healthRoutes } from "../modules/health";
import { todoRoutes } from "../modules/todo";

const router = Router();

router.use(healthRoutes);
router.use(todoRoutes);

export default router;
