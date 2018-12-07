import { TodoModel } from '../models/todo.model';
import { TodoStateModel } from '../models/todoState.model';
import { TodoActionsUnion, TodoActionTypes } from '../actions/todo.actions';

const initialState: TodoStateModel = { todos: [new TodoModel(1, 'default item')] };

export default function reducer(state: TodoStateModel = initialState, action: TodoActionsUnion) {
    switch (action.type) {
        case TodoActionTypes.CREATETODO: {
            return { ...state, todos: [...state.todos, action.payload] };
        }

        default: {
            return state;
        }
    }

}
