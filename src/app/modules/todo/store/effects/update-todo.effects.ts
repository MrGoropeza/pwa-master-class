import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { UpdateTodos, UpdateTodosFailure, UpdateTodosSuccess } from '../actions/update-todo.actions';



@Injectable()
export class UpdateTodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  public addTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UpdateTodos),
      mergeMap(async (action) => {
        return this.todoService.updateTodo(action.todo)
          .then(() =>  UpdateTodosSuccess)
          .catch((e) => UpdateTodosFailure({error: `${e}`}))
      })
    )
  });
}
