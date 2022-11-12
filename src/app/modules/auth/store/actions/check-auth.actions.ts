import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const CheckAuths = createAction(
  '[CheckAuth] CheckAuths'
);

export const CheckAuthsSuccess = createAction(
  '[CheckAuth] CheckAuths Success',
  props<{ data: {
    user: UserModel
  } }>()
);

export const CheckAuthsFailure = createAction(
  '[CheckAuth] CheckAuths Failure',
  props<{ error: string }>()
);
