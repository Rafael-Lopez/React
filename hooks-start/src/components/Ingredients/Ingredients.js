import React, {useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";

function Ingredients() {
    const [userIngredients, setUserIngredients] = useState([]);

    // useEffect() lets you perform side effects (data fetching, setting up a subscription, manually changing the DOM, etc)
    // This runs after and for every render cycle
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so,
    // pass an array as an optional second argument to useEffect. However, you can also pass an empty array and useEffect()
    // will act as componentDidMount: it runs only one (after the first render)
    useEffect(() => {
        fetch('https://react-hooks-update-7cad4.firebaseio.com/ingredients.json')
            .then( response => response.json() )
            .then( responseData => {
                const loadedIngredients = [];
                for (const key in responseData) {
                    loadedIngredients.push({
                        id: key,
                        title: responseData[key].ingredient.title,
                        amount: responseData[key].ingredient.amount
                    });
                }
                setUserIngredients(loadedIngredients);
            });
    }, []);

    const filteredIngredientsHandler = filteredIngredients => {
        setUserIngredients(filteredIngredients);
    };

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
            <Search onLoadIngredients={filteredIngredientsHandler}/>
            <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
            </section>
        </div>
    );
}

export default Ingredients;
