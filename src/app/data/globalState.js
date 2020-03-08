import React from 'react'

// Create context object
export const AppContext = React.createContext();
// Set up Initial State
export const initialState = { notePanel: false, isUserLoggedIn: false, note_id: '', user_name: '' }

export function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
        return { notePanel: action.data }
    case 'USER_SESSION':
        return { isUserLoggedIn: action.data }
    case 'USER_NAME':
        return { user_name: action.data }
    case 'NOTE_ID':
        return { note_id: action.data }
    default:
        return initialState;
  }
}