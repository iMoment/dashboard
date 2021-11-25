import React from 'react'
import { FaBars } from 'react-icons/fa'

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import Home from './Home'
import ApplicantFullDetail from './ApplicantFullDetail'
import Error from './Error'

function App() {
  return (
    <Router>
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
