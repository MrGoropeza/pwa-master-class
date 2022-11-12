import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const SignInWithGoogles = createAction(
  '[SignInWithGoogle] SignInWithGoogles'
);

export const SignInWithGooglesSuccess = createAction(
  '[SignInWithGoogle] SignInWithGoogles Success',
  props<{ data: {
    user: UserModel
  } }>()
);

export const SignInWithGooglesFailure = createAction(
  '[SignInWithGoogle] SignInWithGoogles Failure',
  props<{ error: string }>()
);
