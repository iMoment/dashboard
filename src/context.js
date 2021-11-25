import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarShown, setIsSidebarShown] = useState(false)

  const showSidebar = () => {
    setIsSidebarShown(true)
  }

  const hideSidebar = () => {
    setIsSidebarShown(false)
  }

  return (
    <AppContext.Provider value={{ isSidebarShown, showSidebar, hideSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
