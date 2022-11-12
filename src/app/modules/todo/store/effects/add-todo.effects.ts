import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { AddTodos, AddTodosFailure, AddTodosSuccess } from '../actions/add-todo.actions';



@Injectable()
export class AddTodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  public addTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddTodos),
      mergeMap(async (action) => {
        return this.todoService.addTodo(action.todoText)
          .then(() =>  AddTodosSuccess())
          .catch((e) => AddTodosFailure({error: `${e}`}))
      })
    )
  });
}
