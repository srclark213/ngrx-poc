import { Action } from "@ngrx/store";

export class LoadState implements Action {
    readonly type: string = '[App] Load State';
    constructor(public payload: {snapshot: any}) { }
}