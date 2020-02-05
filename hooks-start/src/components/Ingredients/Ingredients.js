import React, {useState, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";

function Ingredients() {
    const [userIngredients, setUserIngredients] = useState([]);

    // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed (this function is cached).
    // Basically, when this component is re-rendered, this specific function will not be re-created.
    const filteredIngredientsHandler = useCallback(filteredIngredients => {
        setUserIngredients(filteredIngredients);
    }, []);

    const addIngredientHandler = ingredient => {
        //We use fetch() this time instead of Axios, just to explore another solution
        fetch('https://react-hooks-update-7cad4.firebaseio.com/ingredients.json', {
            method: 'POST',
            body: JSON.stringify({ingredient}),
            headers: {'Content-Type': 'application/json'}
        }).then( response => {
            return response.json();
        }).then( responseData => {
            //We need a second then() block because json() returns a promise
            setUserIngredients(prevIngredients => [
                ...prevIngredients,
                {id: responseData.name, ...ingredient}
            ]);
        });
    };

    const removeIngredientHandler = ingredientId => {
        fetch(`https://react-hooks-update-7cad4.firebaseio.com/ingredients/${ingredientId}.json`, {
            method: 'DELETE'
        }).then( response => {
            setUserIngredients(prevIngredients => userIngredients.filter(ingredient => ingredient.id !== ingredientId));
        });
    };

    return (
        <div className="App">
            <IngredientForm onAddIngredient={addIngredientHandler} />

            <section>
            <Search onLoadIngredients={filteredIngredientsHandler}/>
            <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
            </section>
        </div>
    );
}

export default Ingredients;
