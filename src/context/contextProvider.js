import React, { useState } from 'react'

const RealmAppContext = React.createContext()

export const useRealmApp = () => {
  const app = React.useContext(RealmAppContext)
  if (!app) {
    throw new Error(
      'You must call useRealmApp() inside of a <RealmAppProvider />'
    )
  }
  return app
}

export const RealmAppProvider = ({ children }) => {
  const [isLoading, setLoad] = useState(true)
  const wrapped = { isLoading, setLoad }

  return (
    <RealmAppContext.Provider value={wrapped}>
      {children}
    </RealmAppContext.Provider>
  )
}
