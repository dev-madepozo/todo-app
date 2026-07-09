import { z } from "zod";
import { QueryTodoSchema } from "../schemas/query-todo.schema";

export type QueryTodoDto = z.infer<typeof QueryTodoSchema>
