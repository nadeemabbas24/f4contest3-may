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
      case 'UPDATE_USERNAME':
        return { ...state, username: action.payload };
      case 'UPDATE_EMAIL':
        return { ...state, email: action.payload };
      case 'UPDATE_PASSWORD':
        return { ...state, password: action.payload };
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
