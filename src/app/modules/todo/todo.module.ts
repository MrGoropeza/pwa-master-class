import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoMainComponent } from './pages/todo-main/todo-main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: TodoMainComponent
  }
]

@NgModule({
  declarations: [
    TodoMainComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
