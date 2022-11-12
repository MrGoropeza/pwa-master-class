import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';
import { AddTodos, AddTodosFailure, AddTodosSuccess } from '../actions/add-todo.actions';
import { DeleteTodos, DeleteTodosFailure, DeleteTodosSuccess } from '../actions/delete-todo.actions';
import { GetTodos, GetTodosFailure, GetTodosSuccess } from '../actions/get-todo.actions';
import { UpdateTodos, UpdateTodosFailure, UpdateTodosSuccess } from '../actions/update-todo.actions';


export const todoFeatureKey = 'todo';

export interface TodoState extends EntityState<TodoModel> {
  loading: boolean;
  error: string | null;
}

export const todoAdapter: EntityAdapter<TodoModel> = createEntityAdapter();

const defaultState: TodoState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
}

export const initialState: TodoState = todoAdapter.getInitialState(defaultState);

export const reducer = createReducer(
  initialState,
  on(GetTodos, (state) => ({...state, loading: true})),
  on(GetTodosSuccess, (state, action) => todoAdapter.setAll(action.todos, {...state, loading: false})),
  on(GetTodosFailure, (state, action) => ({...state, loading: false, error: action.error})),

  on(AddTodos, (state) => ({...state, loading: true})),
  on(AddTodosSuccess, (state) => ({...state, loading: false})),
  on(AddTodosFailure, (state, action) => ({...state, error: action.error})),

  on(UpdateTodos, (state) => ({...state, loading: true})),
  on(UpdateTodosSuccess, (state) => ({...state, loading: false})),
  on(UpdateTodosFailure, (state, action) => ({...state, error: action.error})),

  on(DeleteTodos, (state) => ({...state, loading: true})),
  on(DeleteTodosSuccess, (state) => ({...state, loading: false})),
  on(DeleteTodosFailure, (state, action) => ({...state, error: action.error})),
);
