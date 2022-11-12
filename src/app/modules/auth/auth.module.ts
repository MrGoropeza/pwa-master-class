import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimeComponentsModule } from 'src/app/prime-components.module';
import { EffectsModule } from '@ngrx/effects';
import { CheckAuthEffects } from './store/effects/check-auth.effects';
import { SignInWithGoogleEffects } from './store/effects/sign-in-with-google.effects';
import { SignOutEffects } from './store/effects/sign-out.effects';

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
    CommonModule, 
    RouterModule.forChild(routes), 
    PrimeComponentsModule, 
    EffectsModule.forFeature([CheckAuthEffects, SignInWithGoogleEffects, SignOutEffects])
  ]
})
export class AuthModule { }
