import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { GetTodos, GetTodosFailure, GetTodosSuccess } from '../actions/get-todo.actions';



@Injectable()
export class GetTodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private messageService: MessageService
  ) {}

  public getTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetTodos),
      mergeMap(() => {
        return this.todoService.getTodo().pipe(
          map(todos => GetTodosSuccess({todos})),
          catchError(e => {
            return of(GetTodosFailure({error: `${e}`}));
          })
        )
      })
    )
  });
}
