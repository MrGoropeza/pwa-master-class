import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { AddTodos, AddTodosFailure, AddTodosSuccess } from '../actions/add-todo.actions';



@Injectable()
export class AddTodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private messageService: MessageService
  ) {}

  public addTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddTodos),
      mergeMap(async (action) => {
        return this.todoService.addTodo(action.todoText)
          .then(() =>  AddTodosSuccess())
          .catch((e) => {
            this.messageService.add({
              severity: "error",
              summary: "Error",
              detail: e
            })
            return AddTodosFailure({error: `${e}`});
        })
      })
    )
  });
}
