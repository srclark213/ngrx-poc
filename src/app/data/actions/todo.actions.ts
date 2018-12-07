import { TodoModel } from 'src/app/data/models/todo.model';
import { Action } from '@ngrx/store';

export enum TodoActionTypes {
    CREATETODO = '[Todo] Add Todo',
  }


export class CreateTodo implements Action {
    readonly type: string = TodoActionTypes.CREATETODO;
    constructor(public payload: TodoModel) { }
}

export type TodoActionsUnion = CreateTodo;
