import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const UpdateTodos = createAction(
  '[UpdateTodo] UpdateTodos',
  props<{ todo: TodoModel}>()
);

export const UpdateTodosSuccess = createAction(
  '[UpdateTodo] UpdateTodos Success'
);

export const UpdateTodosFailure = createAction(
  '[UpdateTodo] UpdateTodos Failure',
  props<{ error: string }>()
);
