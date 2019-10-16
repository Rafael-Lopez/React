// useSate is a React hook
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    
    // state is a special property for any React component (same for props). So you can only use this within classes that extend Component
    // What is special about 'state' is that if something in it changes, then React will re-render the component automatically to display the new value
    
    // Using Array Destructuring
    // To use useState, you pass in your original state
    // useSate always returns an array with 2 elements
    // 1st element: the current state
    // 2nd element: the function that allows us to udpate the state
    const [ personsSate, setPersonsState] = useState( {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 }
        ],
        otherState: 'some othe value'
    } );
    
    // ALways try to have yout state in small pieces as opposed to having everything in one block. Otherwise, you have to manually update your state to 
    // make sure you don't lose the values not being updated when using useSate
    const [ otherState, setOtherState] = useState( 'Some other value' );
    
    const switchNameHandler = () => {
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        
        // setState is a sepcial method provided by React. This will ensure React knows about the change in the state so that it can update the UI
        // The code below will merge the new info with the old one. This means, only the 'persons' property will be updated, and 'otherState' will remaind untouched (ONLY applicable for class-based state)
        // When using React hook method 'useState', this does NOT merge the new state with the old one.
        setPersonsState( {
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 30}
            ]
        } );
    };
    
    // This is the JSX version
    // JSX is similar to HTML but it's not  
    return (
        // Typically, you only want one root element per component. In this case, 'div' is the root element.
        // In HTML, the original attribute is class, but since this is JSX, 'class' can't be used since it's a JS reserved word. Instead, we have to use className
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsSate.persons[0].name} age={personsSate.persons[0].age} />
            <Person name={personsSate.persons[1].name} age={personsSate.persons[1].age} >My hobbies: Racing</Person>
        </div>
    );
    // Another way to do the same as above  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));  
}

export default app;