import { Router } from "express";

import { asyncHandler } from "../../middlewares/async-handler";
import { todoController } from "./todo.module";

const router = Router();

router.get("/todos", asyncHandler(todoController.findAll));
router.get("/todos/:id", asyncHandler(todoController.findById));
router.post("/todos", asyncHandler(todoController.create));
router.put("/todos/:id", asyncHandler(todoController.update));
router.delete("/todos/:id", asyncHandler(todoController.delete));

export default router;
