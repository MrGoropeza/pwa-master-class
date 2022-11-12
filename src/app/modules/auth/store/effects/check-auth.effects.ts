import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';
import { CheckAuths, CheckAuthsFailure, CheckAuthsSuccess } from '../actions/check-auth.actions';



@Injectable()
export class CheckAuthEffects {


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  public checkAuth$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CheckAuths),
        mergeMap(() => {
          return this.authService.checkAuth().pipe(
            map((user) => {
              if(user !== null){
                const authUser : UserModel = {
                  id: user.uid,
                  email: user.email? user.email : "Sin correo",
                  name: user.displayName? user.displayName : "Sin nombre registrado",
                  photoUrl: user.photoURL? user.photoURL : "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                }
                return CheckAuthsSuccess({data: {user: authUser}});
              }else{
                return CheckAuthsFailure({error: "Cancelado por el Usuario"});
              }
            }),
            catchError((e) => of(CheckAuthsFailure({error: `${e}`}))),
          )
        }),
      );
    }
  );

  private checkAuthSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CheckAuthsSuccess),
        tap(() => {
          this.router.navigate(["/todos"]);
        })
      );
    }, {dispatch: false}
  );

}
