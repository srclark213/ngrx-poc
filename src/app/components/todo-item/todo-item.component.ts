import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from 'src/app/data/models/todo.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  todo: TodoModel;
  todo$: Observable<TodoModel>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.todo$.subscribe(val => this.todo = val);
  }

}
