import store from "./store";

const unsubscribe = store.subscribe(() => {
    console.log('current state', store.getState());
})

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug 1";
    }
});

store.dispatch ({
    type: "bugRemoved",
    payload: {
        id: 1
    }

});