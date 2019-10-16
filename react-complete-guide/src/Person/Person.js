import React from 'react';

// 'props' is passed by default by React
// It includes all the attributes you add to your component
const person = (props) => {
    return (
        <div>
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;