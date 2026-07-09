import { Request, Response } from "express";

import { ApiResponse } from "../../../shared/http/api-response";
import { TodoService } from "../services/todo.service";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { QueryTodoDto } from "../dto/query-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";

export class TodoController {
  constructor(private readonly service: TodoService) {}

  findAll = async (req: Request, res: Response) => {
    const query = res.locals.query as QueryTodoDto
    const result = await this.service.findAll(query);

    return ApiResponse.success(res, result, "Todos retrieved successfully!");
  };

  findById = async (req: Request, res: Response) => {
    const todo = await this.service.findById(req.params.id as string);

    return ApiResponse.success(res, todo, "Todo retrieved successfully");
  };

  create = async (_req: Request, res: Response) => {
    const body = res.locals.body as CreateTodoDto
    const todo = await this.service.create(body);

    return ApiResponse.success(res, todo, "Todo created successfully", 201);
  };

  update = async (req: Request, res: Response) => {
    const body = res.locals.body as UpdateTodoDto
    const todo = await this.service.update(req.params.id as string, body);

    return ApiResponse.success(res, todo, "Todo updated successfully");
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(req.params.id as string);

    return ApiResponse.success(res, null, "Todo deleted successfully");
  };
}
