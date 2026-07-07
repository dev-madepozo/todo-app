import { TodoController } from "./controllers/todo.controller";
import { InMemoryTodoRepository } from "./repositories/in-memory-todo.repository";
import { TodoService } from "./services/todo.service";

const repository = new InMemoryTodoRepository();
const service = new TodoService(repository);
export const todoController = new TodoController(service);
