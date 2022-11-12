import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimeComponentsModule } from 'src/app/prime-components.module';
import { EffectsModule } from '@ngrx/effects';
import { CheckAuthEffects } from './store/effects/check-auth.effects';
import { SignInWithGoogleEffects } from './store/effects/sign-in-with-google.effects';
import { SignOutEffects } from './store/effects/sign-out.effects';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, reducer } from './store/reducer/auth.reducer';
import { AuthService } from './services/auth.service';
import { SignedInGuard } from './guards/signed-in.guard';
import { SignedOutGuard } from './guards/signed-out.guard';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    canActivate: [SignedOutGuard]
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, 
    PrimeComponentsModule, 
    RouterModule.forChild(routes), 
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([CheckAuthEffects, SignInWithGoogleEffects, SignOutEffects])
  ],
  providers: [
    AuthService, SignedInGuard, SignedOutGuard
  ]
})
export class AuthModule { }
