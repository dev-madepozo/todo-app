import { CreateTodoDto } from "../dto/create-todo.dto";
import { QueryTodoDto } from "../dto/query-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { Todo } from "../entities/todo.entity";

export interface TodoRepository {
  findAll(query: QueryTodoDto): Promise<{
    data: Todo[];
    total: number;
  }>;
  findById(id: string): Promise<Todo | null>;
  create(data: CreateTodoDto): Promise<Todo>;
  update(id: string, data: UpdateTodoDto): Promise<Todo | null>;
  delete(id: string): Promise<boolean>;
}
