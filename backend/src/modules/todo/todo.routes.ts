import { Router } from "express";

import { asyncHandler } from "../../middlewares/async-handler";
import { todoController } from "./todo.module";
import { validate } from "../../middlewares/validate.middleware";
import { CreateTodoSchema } from "./schemas/create-todo.schema";
import { UpdateTodoSchema } from "./schemas/update-todo.schema";
import { QueryTodoSchema } from "./schemas/query-todo.schema";

const router = Router();

router.get(
  "/todos",
  validate(QueryTodoSchema, "query"),
  asyncHandler(todoController.findAll),
);
router.get("/todos/:id", asyncHandler(todoController.findById));
router.post(
  "/todos",
  validate(CreateTodoSchema),
  asyncHandler(todoController.create),
);
router.put(
  "/todos/:id",
  validate(UpdateTodoSchema),
  asyncHandler(todoController.update),
);
router.delete("/todos/:id", asyncHandler(todoController.delete));

export default router;
