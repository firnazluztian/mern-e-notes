import React from 'react'

// Create context object
export const AppContext = React.createContext();
// Set up Initial State
export const initialState = { notePanel: false }

export function reducer(state, action) {
  switch (action.type) {
      case 'UPDATE_INPUT':
          return {
              notePanel: action.data
          };
      default:
          return initialState;
  }
}