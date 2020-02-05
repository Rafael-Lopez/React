import React, {useReducer, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return action.ingredients;
        case 'ADD':
            return [...state, action.ingredient];
        case 'DELETE':
            return state.filter(ing => ing.id !== action.id);
        default:
            throw new Error('Should not get here!');
    }
};

const httpReducer = (currHttpState, action) => {
    switch (action.type) {
        case 'SEND':
            return {loading: true, error : null};
        case 'RESPONSE':
            return {...currHttpState, loading: false};
        case 'ERROR':
            return {loading: false, error : action.errorMessage};
        case 'CLEAR':
            return {...currHttpState, error : null};
        default:
            throw new Error('Should not be reached!');
    }
};

function Ingredients() {
    const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
    const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error : null});

    // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed (this function is cached).
    // Basically, when this component is re-rendered, this specific function will not be re-created.
    const filteredIngredientsHandler = useCallback(filteredIngredients => {
        dispatch({type: 'SET', ingredients: filteredIngredients});
    }, []);

    const addIngredientHandler = ingredient => {
        dispatchHttp({type: 'SEND'});
        //We use fetch() this time instead of Axios, just to explore another solution
        fetch('https://react-hooks-update-7cad4.firebaseio.com/ingredients.json', {
            method: 'POST',
            body: JSON.stringify({ingredient}),
            headers: {'Content-Type': 'application/json'}
        }).then( response => {
            dispatchHttp({type: 'RESPONSE'});
            return response.json();
        }).then( responseData => {
            //We need a second then() block because json() returns a promise
            dispatch({type: 'ADD', ingredient: {id: responseData.name, ...ingredient}});
        });
    };

    const removeIngredientHandler = ingredientId => {
        dispatchHttp({type: 'SEND'});
        fetch(`https://react-hooks-update-7cad4.firebaseio.com/ingredients/${ingredientId}.json`, {
            method: 'DELETE'
        }).then( response => {
            dispatchHttp({type: 'RESPONSE'});
            dispatch({type: 'DELETE', id: ingredientId})
        }).catch(error => {
            dispatchHttp({type: 'ERROR', errorMessage: error.message});
        });
    };

    const clearError = () => {
        dispatchHttp({type: 'CLEAR'});
    }

    return (
        <div className="App">
            {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
            <IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading}/>

            <section>
            <Search onLoadIngredients={filteredIngredientsHandler}/>
            <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
            </section>
        </div>
    );
}

export default Ingredients;
