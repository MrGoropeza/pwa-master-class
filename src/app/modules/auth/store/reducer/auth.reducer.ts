import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { CheckAuths, CheckAuthsFailure, CheckAuthsSuccess } from '../actions/check-auth.actions';
import { SignInWithGoogles, SignInWithGooglesFailure, SignInWithGooglesSuccess } from '../actions/sign-in-with-google.actions';
import { SignOuts, SignOutsFailure, SignOutsSuccess } from '../actions/sign-out.actions';


export const authFeatureKey = 'auth';

export interface State {
  user: UserModel | null;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  user: null,
  loading: false,
  error: null
};

export const reducer = createReducer <State, Action>(
  initialState,
  on(
    CheckAuths, 
    (state) => ({...state, loading: true})
  ),
  on(
    CheckAuthsSuccess,
    (state, action) => ({...state, loading: false, user: action.data.user})
  ),
  on(
    CheckAuthsFailure,
    (state, action) => ({...state, loading: false, error: action.error})
  ),
  on(
    SignInWithGoogles, (state) => ({...state, loading: true})
  ),
  on(
    SignInWithGooglesSuccess,
    (state, action) => ({...state, loading: false, user: action.data.user})
  ),
  on(
    SignInWithGooglesFailure,
    (state, action) => ({...state, loading: false, error: action.error})
  ),
  on(
    SignOuts,
    (state) => ({...state, loading: true})
  ),
  on(
    SignOutsSuccess,
    (state) => ({...state, loading: false, user: null})
  ),
  on(
    SignOutsFailure,
    (state, action) => ({...state, loading: false, error: action.error})
  ),
);
