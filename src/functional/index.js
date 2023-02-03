import store from "./store";
import * as actions from './actionTypes';

const unsubscribe = store.subscribe(() => {
    console.log('current state', store.getState());
})

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug 1";
    }
});

store.dispatch ({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }

});