import React, { useState } from 'react'
import applications from './data'

// React Components
import ApplicantPreview from './ApplicantPreview'

// Helper variables/functions
const getLocalStorage = () => {
  let applicants = localStorage.getItem('applicants')
  if (applicants) {
    return JSON.parse(localStorage.getItem('applicants'))
  } else {
    return applications
  }
}

// Component Start
const Home = () => {
  const [filterName, setFilterName] = useState('')
  const [applicants, setApplicants] = useState(getLocalStorage())

  const showAllApplicants = () => {
    setApplicants(getLocalStorage())
  }

  const handleFilter = (e) => {
    e.preventDefault()
    console.log('Filter button was pressed.')

    if (!filterName) {
      showAllApplicants()
    } else {
      setApplicants(
        applicants.filter((applicant) => {
          const applicantName = applicant.name.toLowerCase()
          const inputName = filterName.toLowerCase()
          return applicantName.includes(inputName)
        })
      )
      setFilterName('')
    }
  }

  return (
    <main>
      <section className='dashboard section'>
        <div className='title'>
          <h2>/ Dashboard</h2>
          <div className='underline'></div>
        </div>

        <div className='btn-container'>
          <button
            type='button'
            className='sort-btn'
            onClick={showAllApplicants}
          >
            All
          </button>
          <button type='button' className='sort-btn'>
            Name
          </button>
          <button type='button' className='sort-btn'>
            ID
          </button>

          <form className='filter-form' onSubmit={handleFilter}>
            <div className='form-control'>
              <input
                type='text'
                className='filter-input'
                placeholder='Enter a name'
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
              />
              <button type='submit' className='filter-btn'>
                Filter
              </button>
            </div>
          </form>
        </div>

        <ApplicantPreview
          applicants={applicants}
          setApplicants={setApplicants}
        />
      </section>
    </main>
  )
}

export default Home
