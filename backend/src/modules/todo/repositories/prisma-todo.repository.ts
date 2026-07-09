import { prisma } from "../../../config/prisma";

import { CreateTodoDto } from "../dto/create-todo.dto";
import { QueryTodoDto } from "../dto/query-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { Todo } from "../entities/todo.entity";
import { TodoRepository } from "./todo.repository";

export class PrismaTodoRepository implements TodoRepository {
  async findAll(query: QueryTodoDto): Promise<{
    data: Todo[];
    total: number;
  }> {
    const {
      page,
      limit,
      completed,
      search,
      sort,
      order
    } = query;

    const where = {
      ...(completed !== undefined && {
        completed: completed === "true",
      }),
      ...(search && {
        title: {
          contains: search,
          mode: "insensitive" as const,
        }
      })
    }

    const [data, total] = await prisma.$transaction([
      prisma.todo.findMany({
        where,
        orderBy: {
          [sort]: order,
        },
        skip: (page - 1) * limit,
        take: limit
      }),
      prisma.todo.count({ where }),
    ]);

    return {
      data, total
    }
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
