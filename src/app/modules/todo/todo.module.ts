import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoMainComponent } from './pages/todo-main/todo-main.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { PrimeComponentsModule } from 'src/app/prime-components.module';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { GetTodoEffects } from './store/effects/get-todo.effects';
import { AddTodoEffects } from './store/effects/add-todo.effects';
import { UpdateTodoEffects } from './store/effects/update-todo.effects';
import { DeleteTodoEffects } from './store/effects/delete-todo.effects';

const routes: Routes = [
  {
    path: "",
    component: TodoMainComponent
  }
]

@NgModule({
  declarations: [
    TodoMainComponent,
    HeaderComponent,
    TodoListComponent,
    TodoComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), PrimeComponentsModule, FormsModule, EffectsModule.forFeature([GetTodoEffects, AddTodoEffects, UpdateTodoEffects, DeleteTodoEffects])
  ]
})
export class TodoModule { }
