import * as trialAction from './action'
const initialState = {
    details: null,
    deletedUser: {}
}
const trialReducer = (state = initialState, action) => {
    switch (action.type) {
        case trialAction.DETAILS_SUCCESS:
            return state = {
                ...state,
                details: action.data
            }
        case trialAction.DELETE_SUCCESS:
            return state = {
                ...state,
                deletedUser: action.data
            }
        default: return state
    }
};

export default trialReducer;