import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import todoReducer from './todo.reducer';
import actionHistoryReducer from './action-history.reducer';
import { TodoStateModel } from '../models/todoState.model';
import { replay } from './replay.metareducer';

export interface AppState {
  todo: TodoStateModel;
  actionHistory: Action[];
}

export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
  actionHistory: actionHistoryReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [replay] : [];

export const selectTodos = (state: AppState) => state.todo.todos;
