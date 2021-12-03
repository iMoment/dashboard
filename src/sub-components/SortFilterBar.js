import React, { useState } from 'react'
import applications from '../data'

// Helper variables/functions
const constants = {
  APPLICANT: 'applicants',
  NAME: 'name',
  ID: 'id',
  NAME_ASC: 'Name(Asc)',
  NAME_DESC: 'Name(Desc)',
  ID_ASC: 'ID(Asc)',
  ID_DESC: 'ID(Desc)',
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
const SortFilterBar = ({ applicants, setApplicants }) => {
  const [sortNameAscending, setSortNameAscending] = useState(true)
  const [sortIDAscending, setSortIDAscending] = useState(true)
  const [filterName, setFilterName] = useState('')

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
    setSortNameAscending(!sortNameAscending)

    if (sortNameAscending) {
      const sorted = [...applicants].sort((a, b) =>
        a[constants.NAME].localeCompare(b[constants.NAME])
      )
      setApplicants(sorted)
    } else {
      const sorted = [...applicants].sort((a, b) =>
        b[constants.NAME].localeCompare(a[constants.NAME])
      )
      setApplicants(sorted)
    }
  }

  const handleSortByID = (e) => {
    e.preventDefault()
    setSortIDAscending(!sortIDAscending)

    if (sortIDAscending) {
      const sorted = [...applicants].sort(
        (a, b) => a[constants.ID] - b[constants.ID]
      )
      setApplicants(sorted)
    } else {
      const sorted = [...applicants].sort(
        (a, b) => b[constants.ID] - a[constants.ID]
      )
      setApplicants(sorted)
    }
  }

  return (
    <div className='btn-container'>
      <button type='button' className='sort-btn' onClick={showAllApplicants}>
        All
      </button>
      <button type='button' className='sort-btn' onClick={handleSortByName}>
        {sortNameAscending ? constants.NAME_ASC : constants.NAME_DESC}
      </button>
      <button type='button' className='sort-btn' onClick={handleSortByID}>
        {sortIDAscending ? constants.ID_ASC : constants.ID_DESC}
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
  )
}

export default SortFilterBar
