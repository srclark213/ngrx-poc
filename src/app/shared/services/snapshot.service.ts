import { Injectable } from '@angular/core';
import { filter, take, map, tap } from 'rxjs/operators';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { TodoActionTypes } from 'src/app/data/actions/todo.actions';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  public lastSnapshot: any;

  private count = 0;
  private LOG_CHUNK_SIZE = 5;

  constructor(private store: Store<AppState>) { 
    this.store.subscribe(this.handleAction.bind(this));
  }

  handleAction(action) {
    this.count++;
    if (this.count >= this.LOG_CHUNK_SIZE) {
      this.lastSnapshot = action;
      this.count = 0;
    }
  }
}
