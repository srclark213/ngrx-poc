import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/data/reducers';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  public lastSnapshot: AppState;

  private count = 0;
  private LOG_CHUNK_SIZE = 5;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(this.handleStateChange.bind(this));
  }

  handleStateChange(newState: AppState) {
    this.count++;
    if (this.count >= this.LOG_CHUNK_SIZE) {
      this.lastSnapshot = newState;
      this.count = 0;
    }
  }
}
