import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo!: TodoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
