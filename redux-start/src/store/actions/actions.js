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

export const storeResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    };
};

export const deleteResult = (resultElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resultElId
    };
};