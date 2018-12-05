import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import todoReducer from './todo.reducer';
import { TodoStateModel } from '../data/models/todoState.model';

export interface AppState {
  todo: TodoStateModel
}

export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const selectTodos = (state: AppState) => state.todo.todos;