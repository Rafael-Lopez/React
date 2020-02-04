import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const inputState = useState({title: '', amount: ''});

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            {/* Doing it this way, there's no guarantee that we will get the latest state as it may have not been committed yet by React
                onChange={event => inputState[1]({title: event.target.value, amount: inputState[0].amount})}/>
                Doing it as displayed below guarantees that we always get the latest state even if it hasn't been committed yet */}
            <input
                type="text"
                id="title"
                value={inputState[0].title}
                onChange={ event => {
                    const newTitle= event.target.value;
                    inputState[1](prevInputState => ({
                      title: newTitle,
                      amount: prevInputState.amount
                    }))
                }}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
                type="number"
                id="amount"
                value={inputState[0].amount}
                onChange={event => {
                    const newAmount= event.target.value;
                    inputState[1](prevInputState => ({
                        amount: newAmount,
                        title: prevInputState.title
                    }))
                }}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
