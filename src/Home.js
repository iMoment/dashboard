import React, { useState } from 'react'
import applications from './data'

// React Components
import SortFilterBar from './sub-components/SortFilterBar'
import ApplicantPreview from './main-components/ApplicantPreview'

// Helper variables/functions
const constants = {
  APPLICANT: 'applicants',
}

const getLocalStorage = () => {
  let applicants = localStorage.getItem(constants.APPLICANT)
  if (applicants) {
    return JSON.parse(localStorage.getItem(constants.APPLICANT))
  } else {
    return applications
  }
}

// React Component Start
const Home = () => {
  const [applicants, setApplicants] = useState(getLocalStorage())

  return (
    <main>
      <section className='dashboard section'>
        <div className='title'>
          <h2>/ Dashboard</h2>
          <div className='underline'></div>
        </div>

        <SortFilterBar applicants={applicants} setApplicants={setApplicants} />

        {!applicants.length > 0 ? (
          <div className='title'>
            <h3>No applicants were found...</h3>
          </div>
        ) : (
          <p></p>
        )}

        <ApplicantPreview
          applicants={applicants}
          setApplicants={setApplicants}
        />
      </section>
    </main>
  )
}

export default Home
