/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
        case 'USER_CHANGE':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}