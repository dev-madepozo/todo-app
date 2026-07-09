import z from "zod";

export const QueryTodoSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  completed: z.enum(["true", "false"]).optional(),
  search: z.string().optional(),
  sort: z.enum(["title", "createdAt", "updatedAt"]).default("createdAt"),
  order: z.enum(["asc", "desc"]).default("desc"),
});
