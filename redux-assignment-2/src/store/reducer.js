import * as actionTypes from '../store/actionTypes';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }

            return {persons: state.persons.concat(newPerson)};
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.persons.filter(result => result.id !== action.id );

            return {persons: updatedArray};
        default:
            break;
    }

    return state;
};

export default reducer;