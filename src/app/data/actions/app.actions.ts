import { Action } from '@ngrx/store';
import { AppState } from '../reducers';

export enum AppActionTypes {
    LOADSTATE = '[App] Load State',
    ACTIONFIRED = '[App] Action Fired',
    ACTIONLOGGED = '[App] Action Logged'
}

export class LoadState implements Action {
    readonly type: string = AppActionTypes.LOADSTATE;
    constructor(public payload: {snapshot: AppState}) { }
}

export class ActionFired implements Action {
    readonly type: string = AppActionTypes.ACTIONFIRED;
    constructor(public payload: {action: Action}) { }
}

export class ActionLogged implements Action {
    readonly type: string = AppActionTypes.ACTIONLOGGED;
    constructor(public payload: { action: Action }) { }
}
