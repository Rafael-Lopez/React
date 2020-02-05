import React, {useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
    //Destructuring an object
    const {onLoadIngredients} = props;
    const [enteredFilter, setEnteredFilter] = useState('');
    const inputRef = useRef();

    // useEffect() lets you perform side effects (data fetching, setting up a subscription, manually changing the DOM, etc)
    // This runs after and for every render cycle
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so,
    // pass an array as an optional second argument to useEffect. However, you can also pass an empty array and useEffect()
    // will act as componentDidMount: it runs only one (after the first render)
    // This useEffect() only runs when enteredFilter or props.onLoadIngredients change
    useEffect(() => {
        const timer = setTimeout(() => {
            if(enteredFilter === inputRef.current.value) {
                const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;
                fetch('https://react-hooks-update-7cad4.firebaseio.com/ingredients.json' + query)
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
                        onLoadIngredients(loadedIngredients);
                    });
            }
        }, 500);

        // You can return a function that will be run to do some clean up
        // This function will run before the next time this useEffect() is used
        return () => {
            clearTimeout(timer);
        };
    }, [enteredFilter, onLoadIngredients, inputRef]);

    return (
        <section className="search">
            <Card>
            <div className="search-input">
                <label>Filter by Title</label>
                <input
                    ref={inputRef}
                    type="text"
                    value={enteredFilter}
                    onChange={event => setEnteredFilter(event.target.value)}
                />
            </div>
            </Card>
        </section>
    );
});

export default Search;
