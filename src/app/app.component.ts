import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SnapshotService } from './shared/services/snapshot.service';
import { LoadState } from './data/actions/app.actions';
import { Store } from '@ngrx/store';
import { AppState } from './data/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<AppState>, private snapshotService: SnapshotService) { }

  loadLastSnapshot() {
    this.store.dispatch(new LoadState({ snapshot: this.snapshotService.lastSnapshot }));
  }
}
