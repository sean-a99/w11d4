

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

        case REMOVE_ITEM:
            delete state[action.itemId];
            return state;

        default:
            return state;
    }
}

const RECEIVE_ITEM = "RECEIVE_ITEM"

const REMOVE_ITEM = 'REMOVE_ITEM'

export const receiveItem = (item) => ({
    type: RECEIVE_ITEM, 
    item
});

export const removeItem = (itemId) => ({
    type: REMOVE_ITEM,
    itemId
})


export default cartReducer;