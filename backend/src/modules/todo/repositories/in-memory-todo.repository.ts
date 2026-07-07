import { randomUUID } from "node:crypto";

import { CreateTodoDto } from "../dto/create-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { Todo } from "../entities/todo.entity";

import { TodoRepository } from "./todo.repository";

export class InMemoryTodoRepository implements TodoRepository {
  private todos: Todo[] = [];

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async findById(id: string): Promise<Todo | null> {
    const todo = this.todos.find((todo) => todo.id === id);
    return todo ?? null;
  }

  async create(data: CreateTodoDto): Promise<Todo> {
    const now = new Date();

    const todo: Todo = {
      id: randomUUID(),
      title: data.title,
      completed: false,
      createAt: now,
      updatedAt: now,
    };

    this.todos.push(todo);

    return todo;
  }

  async update(id: string, data: UpdateTodoDto): Promise<Todo | null> {
    const todo = await this.findById(id);

    if (!todo) {
      return null;
    }

    Object.assign(todo, {
      ...data,
      updateAt: new Date(),
    });

    return todo;
  }

  async delete(id: string): Promise<boolean> {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return false;
    }

    this.todos.splice(index, 1);
    return true;
  }
}
