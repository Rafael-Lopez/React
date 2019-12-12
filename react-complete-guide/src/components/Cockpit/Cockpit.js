import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    // useEffect is a React hook
    // Runs for every render cycle (for every update). Takes in a function and executes it
    useEffect( () => {
        console.log('[Cockpit.js] useEffect');
        
        // Fake HTTP request...
        setTimeout( () => {
            alert('Saved data to cloud!');
        }, 1000);
    }, [props.persons]); //To control when to run useEffect, pass a second argument that is the array of values that the effect depends on. For exmaple, only when props.persons changes
    //If you want to only run it one time after the component is rendered correctly, (AKA simulate componentDidMount), you can pass an empty array [] instead
    
    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons) {
       btnClass = classes.Red; 
    }
    
    if(props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toogle Persons
            </button>
        </div>
    );
}

export default cockpit;