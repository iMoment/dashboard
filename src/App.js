import React from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { AppContext, useGlobalContext } from './context'

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages for Router
import Home from './Home'
import ApplicantFullDetail from './ApplicantFullDetail'
import Error from './Error'

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

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
