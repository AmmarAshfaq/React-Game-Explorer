

export default (state = {}, action) => {
    switch (action.type) {
        case "DATA":
            return ({ ...state, state: action.payload })
        default:
            return state;
    }
}