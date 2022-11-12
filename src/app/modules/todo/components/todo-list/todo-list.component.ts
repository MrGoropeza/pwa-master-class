import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';
import { GetTodos } from '../../store/actions/get-todo.actions';
import { TodoState } from '../../store/reducers/todo.reducer';
import { getTodos } from '../../store/selectors/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos!: Observable<TodoModel[]>

  

  constructor(private todoStore: Store<TodoState>) { }

  ngOnInit(): void {
    this.todoStore.dispatch(GetTodos());
    this.todos = this.todoStore.select(getTodos);
  }

}
