import { z } from "zod";
import { UpdateTodoSchema } from "../schemas/update-todo.schema";

export type UpdateTodoDto = z.infer<typeof UpdateTodoSchema>;
