import React, { useReducer } from 'react'
import '../css/App.css'
import Router from './Router'
import {reducer, AppContext, initialState} from './data/globalState'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router />
    </AppContext.Provider>
  )
}

export default App
