import { AppError } from "../../../shared/errors/app-error";

import { CreateTodoDto } from "../dto/create-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { Todo } from "../entities/todo.entity";
import { TodoRepository } from "../repositories/todo.repository";

export class TodoService {
  constructor(private readonly repository: TodoRepository) {}

  async findAll(): Promise<Todo[]> {
    return this.repository.findAll()
  }

  async findById(id: string): Promise<Todo> {
    const todo = await this.repository.findById(id);

    if (!todo) {
      throw new AppError("Todo not found", 404)
    }

    return todo;
  }

  async create(data: CreateTodoDto): Promise<Todo> {
    return this.repository.create(data);
  }

  async update(id: string, data: UpdateTodoDto): Promise<Todo | null> {
    const todo = await this.repository.update(id, data);

    if (!todo) {
      throw new AppError("Todo not found", 404)
    }

    return todo
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.repository.delete(id);

    if (!deleted) {
      throw new AppError("Todo not found", 404);
    }

    return deleted
  }
}
