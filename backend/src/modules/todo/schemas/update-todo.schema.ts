import { z } from "zod";

export const UpdateTodoSchema = z.object({
  title: z.string().trim().min(1).max(255).optional(),
  completed: z.boolean().optional(),
});
