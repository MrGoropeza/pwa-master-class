import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddTodos } from '../../store/actions/add-todo.actions';
import { TodoState } from '../../store/reducers/todo.reducer';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup = this.fb.group({
    text: ["", [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private todoStore: Store<TodoState>
  ) { }

  ngOnInit(): void {

  }

  submit(){
    this.todoForm.markAllAsTouched();
    if(this.todoForm.valid){
      const text: string = this.todoForm.controls["text"].value as string;

      if(text.length !== 0){
        this.todoStore.dispatch(AddTodos({todoText: text}));
        this.todoForm.reset();
      }
    }
  }

}
