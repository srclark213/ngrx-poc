import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './containers/todo-container/todo-container.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SnapshotService } from './shared/services/snapshot.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './data/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HistoryService } from './shared/services/history.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    NewTodoComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([HistoryService]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => function() {},
      deps: [SnapshotService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
