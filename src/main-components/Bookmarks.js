import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// React Components
import ApplicantPreview from './ApplicantPreview'

// Helper variables/functions
const constants = {
  BOOKMARKED_APPLICANTS: 'bookmarkedApplicants',
}

const getLocalStorage = () => {
  let applicants = localStorage.getItem(constants.BOOKMARKED_APPLICANTS)
  if (applicants) {
    return JSON.parse(localStorage.getItem(constants.BOOKMARKED_APPLICANTS))
  } else {
    return []
  }
}

// React Component Start
const Bookmarks = () => {
  const [inBookmarksPage, setInBookmarksPage] = useState(true)
  const [applicants, setApplicants] = useState(getLocalStorage())

  const bookmarkedApplicants = applicants.filter(
    (applicant) => applicant.isFavorite === true
  )

  return (
    <section className='dashboard section'>
      <div className='title'>
        <h2>/ Bookmarks</h2>
        <div className='underline'></div>
      </div>

      {!bookmarkedApplicants.length > 0 ? (
        <div className='title'>
          <h3>No bookmarks currently saved...</h3>
        </div>
      ) : (
        <p></p>
      )}

      <ApplicantPreview
        applicants={bookmarkedApplicants}
        setApplicants={setApplicants}
        bookmarkedApplicants={applicants}
        inBookmarksPage={inBookmarksPage}
      />

      <div className='container'>
        <Link to='/' className='btn'>
          Back to Dashboard
        </Link>
      </div>
    </section>
  )
}

export default Bookmarks
