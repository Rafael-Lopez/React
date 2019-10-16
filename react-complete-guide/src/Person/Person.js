import React from 'react';

// 'props' is passed by default by React
// It includes all the attributes you add to your component
const person = (props) => {
    return <p>I'm {props.name} and I am {props.age} years old!</p>;
};

export default person;