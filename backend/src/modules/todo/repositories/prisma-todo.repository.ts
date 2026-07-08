import { prisma } from "../../../config/prisma";

import { CreateTodoDto } from "../dto/create-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { Todo } from "../entities/todo.entity";
import { TodoRepository } from "./todo.repository";

export class PrismaTodoRepository implements TodoRepository {
  async findAll(): Promise<Todo[]> {
    return prisma.todo.findMany({
      orderBy: {
        createdAt: "asc"
      }
    })
  }

  async findById(id: string): Promise<Todo | null> {
    return prisma.todo.findUnique({
      where: { id },
    });
  }

  async create(data: CreateTodoDto): Promise<Todo> {
    return prisma.todo.create({
      data,
    });
  }

  async update(id: string, data: UpdateTodoDto): Promise<Todo | null> {
    try {
      return prisma.todo.update({
        where: { id },
        data,
      });
    } catch {
      return null;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await prisma.todo.delete({
        where: { id },
      });

      return true;
    } catch {
      return false;
    }
  }
}
