import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/data/models/todo.model';
import { AppState, selectTodos } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  public todos$: Observable<TodoModel[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = store.pipe(select(selectTodos));
  }

  ngOnInit() {
  }

}
