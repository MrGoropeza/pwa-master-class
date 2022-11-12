import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { GetTodos, GetTodosFailure, GetTodosSuccess } from '../actions/get-todo.actions';



@Injectable()
export class GetTodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  public getTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetTodos),
      mergeMap(() => {
        return this.todoService.getTodo().pipe(
          map(todos => GetTodosSuccess({todos})),
          catchError(e => of(GetTodosFailure({error: `${e}`})))
        )
      })
    )
  });
}
