import { z } from "zod";
import { CreateTodoSchema } from "../schemas/create-todo.schema";

export type CreateTodoDto = z.infer<typeof CreateTodoSchema>;
