//An Action Creator is just a function which creates an action
//Naming convention is to name your Action Creator the same as the action but in lowercase
import {ADD, DECREMENT, INCREMENT, SUBTRACT} from "./actionTypes";

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