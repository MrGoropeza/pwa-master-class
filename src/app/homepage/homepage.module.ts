import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule, Router } from "@angular/router";
import { PrimeComponentsModule } from '../prime-components.module';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomepageComponent
  }
]

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeComponentsModule
  ],
  exports: [RouterModule]
})
export class HomepageModule { }
