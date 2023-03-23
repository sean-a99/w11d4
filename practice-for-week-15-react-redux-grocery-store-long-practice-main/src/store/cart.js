

function cartReducer(prevState={}, action) {
    const state = { ...Object.freeze(prevState) }

    switch (action.type) {

        case RECEIVE_ITEM:
            if (state[action.item.id]) {
                state[action.item.id].count += 1;
            } else {
                state[action.item.id] = {
                    id: action.item.id,
                    count: 1
                }
            }
            return state;

        default:
            return state;
    }
}

const RECEIVE_ITEM = "RECEIVE_ITEM"

export const receiveItem = (item) => ({
    type: RECEIVE_ITEM, 
    item
});



export default cartReducer;