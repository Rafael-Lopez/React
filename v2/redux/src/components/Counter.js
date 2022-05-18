import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // When you use useSelector(), React Redux will automatically set up a subscription to the Redux store for this component.
  // So your component will be updated and will receive the latest counter automatically whenever that data changes in the Redux store.
  // This makes the component reactive, and changes to the Redux store will cause this component function to be re-executed.
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
