import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
};

//REDUX state can only be updated synchronously
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // concat() returns a new Array + the element being concatenated. Therefore, we are still updating the state immutably
            // push() does not create a new Array. Therefore, it's not immutably
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId );
            return updateObject(state, {results: updatedArray});
    }

    return state;
};

export default reducer;