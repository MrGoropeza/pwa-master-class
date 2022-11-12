import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';
import { SignInWithGoogles, SignInWithGooglesFailure, SignInWithGooglesSuccess } from '../actions/sign-in-with-google.actions';



@Injectable()
export class SignInWithGoogleEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }

  public signInWithGoogle$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SignInWithGoogles),
        mergeMap(async () => {
          return await this.authService
            .signInWithGoogle()
            .then((user) => {
              if(user !== null){
                const authUser : UserModel = {
                  id: user.uid,
                  email: user.email? user.email : "Sin correo",
                  name: user.displayName? user.displayName : "Sin nombre registrado",
                  photoUrl: user.photoURL? user.photoURL : "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                }
                return SignInWithGooglesSuccess({data: {user: authUser}})
              }else{
                return SignInWithGooglesFailure({error: "Cancelado por el Usuario"});
              }
            })
            .catch((e) => { 
              return SignInWithGooglesFailure({error: `${e}`});
            })
        })
      );
    }
  );

  private signInWithGoogleSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SignInWithGooglesSuccess),
        tap(() => this.router.navigate(["/todos"]))
      );
    },
    {
      dispatch: false,
    }
  );

}
