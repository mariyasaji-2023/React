// store.js
import { createStore } from 'redux';

// A simple reducer
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
const store = createStore(counterReducer);

export default store;
