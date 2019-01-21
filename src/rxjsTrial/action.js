export const GET_DETAILS = 'action/Get_Case_Details';
export const DETAILS_SUCCESS = 'action/Case_Details_Success';
export const DETAILS_FAILURE = 'action/Case_Details_Failure';
export const getDetails = () => {
    return {
        type: GET_DETAILS
    }
}
export const detailsSuccess = (data) => {
    return {
        type: DETAILS_SUCCESS,
        data
    }
}
export const detailsFailure = (data) => {
    return {
        type: DETAILS_FAILURE,
        data
    }
}

export const DELETE_USER = 'action/Delete_User';
export const DELETE_SUCCESS = 'action/Delete_Success';
export const DELETE_FAILURE = 'action/Delete_Failure';
export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        id
    }
}
export const deleteSuccess = (data) => {
    return {
        type: DELETE_SUCCESS,
        data
    }
}
export const deleteFailure = (data) => {
    return {
        type: DELETE_FAILURE,
        data
    }
}