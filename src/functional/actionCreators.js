import * as actions from './actionTypes';

const creator = (type, description) => ({
    type,
    payload: {
        description
    }
})

export const bugAdded = description => creator(actions.BUG_ADDED, description);
export const bugRemoved = description => creator(actions.BUG_REMOVED, description);
export const bugResolved = description => creator(actions.BUG_RESOLVED, description);

