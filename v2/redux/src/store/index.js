import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // When using redux toolkit, mutating state is allowed
      // ReduxToolkit will take care of things internally
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// To dispatch actions, createSlice() has got us covered. It automatically creates unique action identifiers for our different reducers.
// To get hold of these action identifiers, we can do counterSlice.actions. This returns an object full of keys, where the the key names are:
// increment, decrement, increase, and toggleCounter.
// With this, we get methods created automatically by Redux Toolkit, which when called will create action objects for us.
// Therefore, these methods are called ACTION CREATORS, and they will create action objects for us where these objects already have a type
// property with a unique identifier per action automatically created behind the scenes.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
