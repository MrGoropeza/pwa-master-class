import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';
import { DeleteTodos } from '../../store/actions/delete-todo.actions';
import { UpdateTodos } from '../../store/actions/update-todo.actions';
import { TodoState } from '../../store/reducers/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo!: TodoModel;

  constructor(
    private todoStore: Store<TodoState>
  ) { }

  ngOnInit(): void {
  }

  updateTodo(){
    this.todoStore.dispatch(UpdateTodos({todo: this.todo}));
  }
  
  deleteTodo(){
    this.todoStore.dispatch(DeleteTodos({todo: this.todo}));
  }
}
