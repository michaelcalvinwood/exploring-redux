import store from "./store";
import { bugAddeded, bugRemoved } from "./actionCreators";

const unsubscribe = store.subscribe(() => {
    console.log('current state', store.getState());
})

store.dispatch(bugAddeded("bug 1"));

store.dispatch(bugRemoved(1));