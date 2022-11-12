import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SignOuts, SignOutsFailure, SignOutsSuccess } from '../actions/sign-out.actions';



@Injectable()
export class SignOutEffects {


  constructor(
    private actions$: Actions, 
    private authService: AuthService,
    private router: Router
  ) {}

  public signOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SignOuts),
        mergeMap(async () => {
          return this.authService
            .signOut()
            .then(() => {return SignOutsSuccess()})
            .catch((e) => {return SignOutsFailure({error: `${e}`})})
        })
      );
    }
  );

  private signOutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SignOutsSuccess),
        tap(() => this.router.navigate(["/auth"]))
      );
    },
    {
      dispatch: false,
    }
  );
}
