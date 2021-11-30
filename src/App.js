import React from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

// App Components
import Sidebar from './Sidebar'

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages for Router
import Home from './Home'
import Bookmarks from './Bookmarks'
import ApplicantFullDetail from './ApplicantFullDetail'
import Error from './Error'

// Component Start
function App() {
  const { showSidebar } = useGlobalContext()

  return (
    <Router>
      <button className='sidebar-toggle' onClick={showSidebar}>
        <FaBars />
      </button>
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/applicant/:id' children={<ApplicantFullDetail />}></Route>

        <Route path='/bookmarks'>
          <Bookmarks />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
