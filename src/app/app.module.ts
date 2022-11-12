import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { PrimeComponentsModule } from './prime-components.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './modules/auth/services/auth.service';
import { SignedInGuard } from './modules/auth/guards/signed-in.guard';
import { SignedOutGuard } from './modules/auth/guards/signed-out.guard';
import { authFeatureKey, reducer } from './modules/auth/store/reducer/auth.reducer';
import { CheckAuthEffects } from './modules/auth/store/effects/check-auth.effects';
import { SignOutEffects } from './modules/auth/store/effects/sign-out.effects';
import { AngularFireModule } from '@angular/fire/compat';
import { MessageService } from 'primeng/api';
import { todoFeatureKey, todoReducer } from './modules/todo/store/reducers/todo.reducer';
import { GetTodoEffects } from './modules/todo/store/effects/get-todo.effects';
import { TodoService } from './modules/todo/services/todo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeComponentsModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([CheckAuthEffects, SignOutEffects]),

    StoreModule.forFeature(todoFeatureKey, todoReducer),
    EffectsModule.forFeature([GetTodoEffects])
  ],
  providers: [AuthService, TodoService, SignedInGuard, SignedOutGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
