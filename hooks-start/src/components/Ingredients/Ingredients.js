import React, {useReducer, useState, useCallback} from 'react';

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

function Ingredients() {
    const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
    //const [userIngredients, setUserIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed (this function is cached).
    // Basically, when this component is re-rendered, this specific function will not be re-created.
    const filteredIngredientsHandler = useCallback(filteredIngredients => {
        dispatch({type: 'SET', ingredients: filteredIngredients});
    }, []);

    const addIngredientHandler = ingredient => {
        setIsLoading(true);
        //We use fetch() this time instead of Axios, just to explore another solution
        fetch('https://react-hooks-update-7cad4.firebaseio.com/ingredients.json', {
            method: 'POST',
            body: JSON.stringify({ingredient}),
            headers: {'Content-Type': 'application/json'}
        }).then( response => {
            setIsLoading(false);
            return response.json();
        }).then( responseData => {
            //We need a second then() block because json() returns a promise
            dispatch({type: 'ADD', ingredient: {id: responseData.name, ...ingredient}});
        });
    };

    const removeIngredientHandler = ingredientId => {
        setIsLoading(true);
        fetch(`https://react-hooks-update-7cad4.firebaseio.com/ingredients/${ingredientId}.json`, {
            method: 'DELETE'
        }).then( response => {
            setIsLoading(false);
            dispatch({type: 'DELETE', id: ingredientId})
        }).catch(error => {
            setError('Something went wrong!');
        });
    };

    const clearError = () => {
        setError(null);
        setIsLoading(false);
    }

    return (
        <div className="App">
            {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
            <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>

            <section>
            <Search onLoadIngredients={filteredIngredientsHandler}/>
            <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
            </section>
        </div>
    );
}

export default Ingredients;
