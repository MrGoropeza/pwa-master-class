import { createAction, props } from '@ngrx/store';

export const SignOuts = createAction(
  '[SignOut]  SignOuts'
);

export const SignOutsSuccess = createAction(
  '[SignOut]  SignOuts Success',
);

export const SignOutsFailure = createAction(
  '[SignOut]  SignOuts Failure',
  props<{ error: string }>()
);
