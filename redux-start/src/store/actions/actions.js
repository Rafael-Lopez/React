export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

//An Action Creator is just a function which creates an action
//Naming convention is to name your Action Creator the same as the action but in lowercase
export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (value) => {
    return {
        type: ADD,
        value: value
    };
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        value: value
    };
};

export const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    };
};

//When an action creator returns a function, that function will get executed by the Redux Thunk middleware.
//This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls.
export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
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