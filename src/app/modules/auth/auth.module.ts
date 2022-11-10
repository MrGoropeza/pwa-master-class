import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimeComponentsModule } from 'src/app/prime-components.module';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), PrimeComponentsModule
  ]
})
export class AuthModule { }
