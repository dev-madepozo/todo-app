import { TodoController } from "./controllers/todo.controller";
import { PrismaTodoRepository } from "./repositories/prisma-todo.repository";
import { TodoService } from "./services/todo.service";

const repository = new PrismaTodoRepository();
const service = new TodoService(repository);
export const todoController = new TodoController(service);
