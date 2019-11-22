import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    
    // state is a special property for any React component (same for props). So you can only use this within classes that extend Component
    // What is special about 'state' is that if something in it changes, then React will re-render the component automatically to display the new value
    state = {
        persons: [
            { id: 'aaa', name: 'Max', age: 28 },
            { id: 'bbe', name: 'Manu', age: 29 },
            { id: 'bse', name: 'Test', age: 30 }
        ],
        otherState: 'some othe value',
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };
    
    nameChangeHandler = (event, id) => {       
        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        } );
        
        //It's a best practice to never mutate the original state directly
        //Instead, create a copy of what you're trying to change
        const person = {
            ...this.state.persons[personIndex]
        };
        
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        
        this.setState( {persons: persons} );
    };

    tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( {showPersons: !doesShow} );
    };
    
    render() {
        
        let persons = null;
        
        if (this.state.showPersons) {
            persons = <Persons 
                        persons = {this.state.persons}
                        clicked = {this.deletePersonHandler}
                        changed = {this.nameChangeHandler} />; 
        }
        
        // This is the JSX version. JSX is similar to HTML but it's not  
        return (
            // Typically, you only want one root element per component. In this case, 'div' is the root element.
            // In HTML, the original attribute is class, but since this is JSX, 'class' can't be used since it's a JS reserved word. Instead, we have to use className
            <div className={classes.App}>
                <Cockpit 
                    showPersons={this.state.showPersons}
                    persons={this.state.persons} 
                    clicked={this.tooglePersonsHandler} />
                { persons }
            </div>
        );
        // Another way to do the same as above  
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));  
    }
}

export default App;
