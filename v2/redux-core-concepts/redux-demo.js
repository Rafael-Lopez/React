// You can run this code with 'node redux-demo.js'

// Default NodeJS import syntax for third-party packages
const redux = require("redux");

// A reducer function is a standard JavaScript function, but it will it be called by the Redux library and
// it will then always receive two parameters: the old or existing state, and the action that was dispatched.
// And then this reducer function must return a certain output. It must always return a new state object.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
