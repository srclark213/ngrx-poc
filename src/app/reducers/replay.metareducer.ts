import { AppActionTypes } from "../data/actions/app.actions";

export function replay(reducer) {
    return function(state, action) {
        if (action.type === AppActionTypes.LOADSTATE) {
            console.log('loading snapshot', action.payload.snapshot);
            state = action.payload.snapshot;
        }

        return reducer(state, action);
    }
}