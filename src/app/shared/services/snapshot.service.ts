import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  public lastSnapshot: any = { todo: {todos: [] } };

  // private count = 0;
  // private LOG_CHUNK_SIZE = 5;

  // constructor(private actions$: Actions, private store: Store) {

  //   this.actions$.pipe(filter(event => event.status === ActionStatus.SUCCESSFUL)).subscribe(this.handleAction.bind(this));

  //   this.actions$.pipe(ofActionSuccessful(InitState)).subscribe(() => this.lastSnapshot = this.store.snapshot()); // save initial state
  // }

  // handleAction(event: any) {
  //   this.count++;

  //   if (this.count >= this.LOG_CHUNK_SIZE) {
  //     const snapshot = this.store.snapshot();
  //     this.lastSnapshot = snapshot;
  //     this.count = 0;
  //   }
  // }
}
