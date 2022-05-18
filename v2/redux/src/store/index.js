import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

// If you have multiple reducers, you can pass an object, containing all your reducers 
// { someName: reducer1, someName2: reducer 2}
/* 
const store = configureStore({
  reducer: { counter: counterSlice.reducer }
}); 
*/

export default store;
