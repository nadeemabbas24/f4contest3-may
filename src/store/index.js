import { createStore } from 'redux';

// Define the initial state of the store
const initialState = {
    username: '',
    email: '',
    password: '',
  };
  
  // Define the reducer function to handle state updates
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGOUT':
        return initialState;
      case 'LOGIN':
        return action.payload;
      default:
        return state;
    }
  };

const store = createStore(reducer);

export default store;
