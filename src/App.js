import React from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { AppContext, useGlobalContext } from './context'

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

// Component Pages for Router
import Home from './Home'
import Bookmarks from './Bookmarks'
import ApplicantFullDetail from './ApplicantFullDetail'
import Error from './Error'

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
          {/*Checking here*/}
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
