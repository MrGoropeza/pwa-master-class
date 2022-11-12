import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { DeleteTodos, DeleteTodosFailure, DeleteTodosSuccess } from '../actions/delete-todo.actions';



@Injectable()
export class DeleteTodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  public addTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeleteTodos),
      mergeMap(async (action) => {
        return this.todoService.deleteTodo(action.todo)
          .then(() =>  DeleteTodosSuccess)
          .catch((e) => DeleteTodosFailure({error: `${e}`}))
      })
    )
  });
}
