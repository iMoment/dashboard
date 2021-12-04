import React from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './sub-components/Sidebar'
import { AppContext, useGlobalContext } from './context'

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './sub-components/ScrollToTop'

// Component Pages for Router
import Home from './Home'
import Bookmarks from './main-components/Bookmarks'
import ApplicantFullDetail from './main-components/ApplicantFullDetail'
import Error from './sub-components/Error'

// React Component Start
function App() {
  const { showSidebar } = useGlobalContext()

  return (
    <Router>
      <ScrollToTop />
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
