import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppActionTypes, ActionFired, ActionLogged } from 'src/app/data/actions/app.actions';

@Injectable()
export class HistoryService {

  constructor(private actions$: Actions) { }

  @Effect()
  allActions$: Observable<Action> = this.actions$.pipe(
    filter(action => action.type !== AppActionTypes.ACTIONFIRED && action.type !== AppActionTypes.ACTIONLOGGED),
    map(action => new ActionFired({ action })));

  @Effect()
  actionFired$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.ACTIONFIRED),
    map(this.handleAction.bind(this))
  );

  handleAction(action: ActionFired) {
    console.log(action.payload.action);

    return new ActionLogged({ action: action.payload.action });
  }
}
