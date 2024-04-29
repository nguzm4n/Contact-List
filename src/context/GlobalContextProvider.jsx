import React, { createContext, useEffect, useState } from 'react'
import getState from './flux'


export const GlobalContext = createContext(null)

const GlobalContextProvider = ({ children }) => {


  const [state, setState] = useState(getState({
    getStore: () => state.store,
    getActions: () => state.actions,
    setStore: (updateStore = {}) => setState(prevState => ({
      ...prevState,
      store: Object.assign(prevState.store, updateStore),
      actions: { ...prevState.actions }
    }))
  }))

  useEffect(() => {
    state.actions.getContacts();
  }, [])

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider