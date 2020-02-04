import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";

function Ingredients() {
    const [userIngredients, setUserIngredients] = useState([]);

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
        setUserIngredients(prevIngredients => userIngredients.filter(ingredient => ingredient.id !== ingredientId));
    };

    return (
        <div className="App">
            <IngredientForm onAddIngredient={addIngredientHandler} />

            <section>
            <Search />
            <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
            </section>
        </div>
    );
}

export default Ingredients;
