import { Action } from '@ngrx/store';

export enum AppActionTypes {
    LOADSTATE = '[App] Load State',
}

export class LoadState implements Action {
    readonly type: string = AppActionTypes.LOADSTATE;
    constructor(public payload: {snapshot: any}) { }
}
