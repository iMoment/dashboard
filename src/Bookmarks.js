import React, { useState } from 'react'
import applications from './data'
import { Link } from 'react-router-dom'

// React Components
import ApplicantPreview from './ApplicantPreview'

// Helper variables
// const getLocalStorage = () => {
//   let applicants = localStorage.getItem('applicants')
//   if (applicants) {
//     return JSON.parse(localStorage.getItem('applicants'))
//   } else {
//     return applications
//   }
// }
const getLocalStorage = () => {
  let applicants = localStorage.getItem('bookmarkedApplicants')

  if (applicants) {
    return JSON.parse(localStorage.getItem('bookmarkedApplicants'))
  } else {
    return []
  }
}

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

      <ApplicantPreview
        applicants={bookmarkedApplicants}
        setApplicants={setApplicants}
        bookmarkedApplicants={applicants}
        inBookmarksPage={inBookmarksPage}
      />

      <Link to='/' className='btn'>
        Back to Dashboard
      </Link>
    </section>
  )
}

export default Bookmarks
