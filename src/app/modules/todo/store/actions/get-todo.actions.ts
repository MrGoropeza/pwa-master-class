import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const GetTodos = createAction(
  '[GetTodo] GetTodos'
);

export const GetTodosSuccess = createAction(
  '[GetTodo] GetTodos Success',
  props<{ todos: TodoModel[] }>()
);

export const GetTodosFailure = createAction(
  '[GetTodo] GetTodos Failure',
  props<{ error: string }>()
);
