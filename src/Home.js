import React, { useState, useEffect } from 'react'
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

// React Component Start
const Home = () => {
  const [sortNameAscending, setSortNameAscending] = useState(true)
  const [sortIDAscending, setSortIDAscending] = useState(true)
  const [filterName, setFilterName] = useState('')
  const [applicants, setApplicants] = useState(getLocalStorage())

  const showAllApplicants = () => {
    setSortNameAscending(true)
    setSortIDAscending(true)
    setApplicants(getLocalStorage())
  }

  const handleFilter = (e) => {
    e.preventDefault()

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

  const handleSortByName = (e) => {
    e.preventDefault()
    console.log('Sort by name was pressed.')
    setSortNameAscending(!sortNameAscending)

    if (sortNameAscending) {
      const sorted = [...applicants].sort((a, b) =>
        a['name'].localeCompare(b['name'])
      )
      setApplicants(sorted)
    } else {
      const sorted = [...applicants].sort((a, b) =>
        b['name'].localeCompare(a['name'])
      )
      setApplicants(sorted)
    }
  }

  const handleSortByID = (e) => {
    e.preventDefault()
    console.log('Sort by id was pressed.')
    setSortIDAscending(!sortIDAscending)

    if (sortIDAscending) {
      const sorted = [...applicants].sort((a, b) => a['id'] - b['id'])
      setApplicants(sorted)
    } else {
      const sorted = [...applicants].sort((a, b) => b['id'] - a['id'])
      setApplicants(sorted)
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
          <button type='button' className='sort-btn' onClick={handleSortByName}>
            {sortNameAscending ? 'Name(Asc)' : 'Name(Desc)'}
          </button>
          <button type='button' className='sort-btn' onClick={handleSortByID}>
            {sortIDAscending ? 'ID(Asc)' : 'ID(Desc)'}
          </button>

          <form onSubmit={handleFilter}>
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
