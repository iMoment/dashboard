import React, { useState } from 'react'
import ApplicantPreview from './ApplicantPreview'
import applications from './data'

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
  // const [applicants, setApplicants] = useState(applications)

  // return (
  //   <main>
  //     <section className='dashboard section'>
  //       <div className='title'>
  //         <h2>/ Dashboard /</h2>
  //         <div className='underline'></div>
  //       </div>

  //       <ApplicantPreview applications={applicants} />
  //     </section>
  //   </main>
  // )
}

export default App
