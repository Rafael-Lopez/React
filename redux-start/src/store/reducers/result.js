import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // concat() returns a new Array + the element being concatenated. Therefore, we are still updating the state immutably
                // push() does not create a new Array. Therefore, it's not immutably
                results: state.results.concat({id: new Date(), value: action.result})
            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId );

            return {
                ...state,
                results: updatedArray
            };
    }

    return state;
};

export default reducer;