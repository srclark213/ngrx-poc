import { Action } from '@ngrx/store';

const initialState: Action[] = [];

export default function reducer(state: Action[] = initialState, action: Action) {
    return [...state, action];
}
