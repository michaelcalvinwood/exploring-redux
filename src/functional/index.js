import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreators";

const unsubscribe = store.subscribe(() => {
    console.log('current state', store.getState());
})

store.dispatch(bugAdded("bug 1"));

store.dispatch(bugRemoved(1));

store.dispatch(bugResolved(1));

