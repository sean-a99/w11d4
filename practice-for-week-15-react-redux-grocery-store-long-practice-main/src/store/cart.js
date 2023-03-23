

function cartReducer(prevState={}, action) {
    const state = { ...Object.freeze(prevState) }

    switch (action.type) {
        default:
            return state;
    }
}




export default cartReducer;