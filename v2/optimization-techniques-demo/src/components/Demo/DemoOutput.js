import React from "react";

const DemoOutput = props => {
    console.log('DemoOutput running...');
    return <p>{props.show ? 'This is new!' : ''}</p>;
};

// When a component is wrapped in React.memo(), React renders the component and memoizes the result. 
// Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.
// NOTE: Careful when using React.memo() and props contains reference types. They will always be different since every time
// the function to render a component is run, all the things inside (variables, etc) are re-created. Primitive values are safe.
// false === false - TRUE
// [1, 2] === [1, 2] - FALSE
export default React.memo(DemoOutput);