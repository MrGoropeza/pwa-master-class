import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoMainComponent } from './pages/todo-main/todo-main.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListTileComponent } from './components/todo-list-tile/todo-list-tile.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

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
    TodoListTileComponent,
    TodoComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
