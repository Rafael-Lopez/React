import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    
    // useEffect is a React hook
    // Runs for every render cycle (for every update). Takes in a function and executes it
    useEffect( () => {
        console.log('[Cockpit.js] useEffect');
        
        // Fake HTTP request...
        //setTimeout( () => {
        //    alert('Saved data to cloud!');
        //}, 1000);
        toggleBtnRef.current.click();
        
        //You can avoid returning anything (no return needed), or you can return a function that will run after every render cycle
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
        
    }, []); // To control when to run useEffect, pass a second argument that is the array of values that the effect depends on. For exmaple, only when props.persons changes
    // If you want to only run it one time after the component is rendered correctly, (AKA simulate componentDidMount), you can pass an empty array [] instead
    // If you use useEffect and pass and empty array, that also means that the function will only be run when the component is render the first time and when is unmounted
    
    // You can have multiple useEffect
    // This will run al the time since we are not passing a second argument
    useEffect( () => {
        console.log('[Cockpit.js] 2nd useEffect');
        
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }        
    });
    
    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons) {
       btnClass = classes.Red; 
    }
    
    if(props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toogle Persons
            </button>
            { <button onClick={authContext.login}>Log in </button> }
        </div>
    );
}

//Optimize functional cmponents so that they don't render when the parent component renders but the props for this component don't change
export default React.memo(cockpit);