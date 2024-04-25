import React, { createContext, useEffect, useState } from 'react'
import getState from './flux'


export const GlobalContext = createContext(null)

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(getState({
    getStore:() => state.store,
    getActions: () => state.actions,
    setStore: (updateStore) => setState({
      store:Object.assign(state.store, updateStore),
      actions: {...state.actions}
    })
  }))

  useEffect(() => {

  }, [])

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider