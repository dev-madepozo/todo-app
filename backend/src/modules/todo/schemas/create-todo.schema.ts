import { z } from "zod";

export const CreateTodoSchema = z.object({
  title: z.string().trim().min(1).max(255),
});
