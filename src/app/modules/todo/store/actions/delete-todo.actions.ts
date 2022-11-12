import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const DeleteTodos = createAction(
  '[DeleteTodo] DeleteTodos',
  props<{ todo: TodoModel}>()
);

export const DeleteTodosSuccess = createAction(
  '[DeleteTodo] DeleteTodos Success'
);

export const DeleteTodosFailure = createAction(
  '[DeleteTodo] DeleteTodos Failure',
  props<{ error: string }>()
);
