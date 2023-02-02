
let lastId =  0;

// simple reducer as an example

function reducer(state, action) {
    switch(action.type) {
        case 'bugAdded':
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false,

                }
            ]
            break;
    }
}