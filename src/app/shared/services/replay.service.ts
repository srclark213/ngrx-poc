import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Injectable({
  providedIn: 'root'
})
export class ReplayService {

  constructor(private store: Store<AppState>) { }

  resetStore(snapshot: any) {
    console.log('Resetting state to snapshot: ', snapshot);
    // this.store.reset(snapshot);
  }
}
