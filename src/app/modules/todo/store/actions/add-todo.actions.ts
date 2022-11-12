import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const AddTodos = createAction(
  '[AddTodo] AddTodos',
  props<{todoText: string}>()
);

export const AddTodosSuccess = createAction(
  '[AddTodo] AddTodos Success'
);

export const AddTodosFailure = createAction(
  '[AddTodo] AddTodos Failure',
  props<{ error: string }>()
);
