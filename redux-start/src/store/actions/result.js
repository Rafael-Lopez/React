import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

export const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    };
};

//When an action creator returns a function, that function will get executed by the Redux Thunk middleware.
//This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls.
export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result))
        }, 2000);
    }
};

export const deleteResult = (resultElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resultElId
    };
};