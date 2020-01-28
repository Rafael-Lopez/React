const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                // concat() returns a new Array + the element being concatenated. Therefore, we are still updating the state immutably
                // push() does not create a new Array. Therefore, it's not immutably
                results: state.results.concat({id: new Date(), value: state.counter})
            };
    }

    return state;
};

export default reducer;