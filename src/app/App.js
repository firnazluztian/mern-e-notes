import React, { useReducer } from 'react';
import '../css/App.css';
import Router from './Router';


// Create context object
export const AppContext = React.createContext();
// Set up Initial State
const initialState = {
  notePanel: '',
}

function reducer(state, action) {
  switch (action.type) {
      case 'UPDATE_INPUT':
          return {
              notePanel: action.data
          };
      default:
          return initialState;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router />
    </AppContext.Provider>
  )
}

export default App;
